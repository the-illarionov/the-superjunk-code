<template>
<div class="ld-container-wrapper mb-3" :class="wrapper_classes">
	<div class="ld-container-main" :class="container_class">
		<div class="ld-container" ref="container">
			<div class="ld-interactive-navigation-wrap" v-if="show_navigation">
				<ol class="ld-interactive-navigation">
					<!--
						#TODO
						Добавить опцию чтобы можно было скрывать контролы	
					-->
					<li 
						v-for="(sub_element, sub_index) in m_element.elements"
						:key="sub_element.subtype + sub_index"
						:class="{ 'active' : sub_index == current_index }"
						@click="change_current_index(sub_index)">
						<span>{{ sub_index + 1 }}</span>
						<i v-show="m_element.is_editing" class="lar la-trash-alt ld-interactive-navigation-delete"
							v-on:click.stop="remove_slide(sub_index)"></i>
					</li>
				</ol>
				<transition name="left-to-right">
					<span class="ld-interactive-previous" v-if="current_index > 0" @click="current_index--">
						<i class="las la-arrow-left"></i>
					</span>
				</transition>
				<transition name="left-to-right">
					<span class="ld-interactive-next" v-if="current_index < m_element.elements.length - 1" @click="current_index++">
						<i class="las la-arrow-right"></i>
					</span>
				</transition>
			</div>

			<div style="position: relative">
				<transition-group tag="div" name="left-to-right">
					<component 
						v-for="(sub_element, sub_index) in m_element.elements"
						:key="sub_element.subtype + sub_index"
						
						:is="sub_element.component"
						v-show="show_component(sub_element, sub_index, current_index)"
						
						:m_map="m_modifyMap(sub_index)" />
				</transition-group>
			</div>
		</div>
	</div>
	<div class="ld-container-author-actions" v-if="m_longread.is_author && is_root">
		<ld-add-element
			class="active no-padding button-block mb-3"
			:index="m_element.elements.length"
			:destination="m_element.elements"
			v-on:added_element="added_element"
			:container="m_element" />

		<div 
			class="button mb-3 button-block" 
			v-if="m_element.is_editing" 
			@click="m_changeIsEditing({ toggle: true })" 
			key="view">Включу просмотр</div>

			<!--
				#TODO
				Надо делать запрет переключаться в режим если value пустой, иначе он исчезает и потом  трудно опять прокликать
			-->

		<div 
			class="button mb-3 button-block" 
			v-else 
			@click="m_changeIsEditing({ toggle: true })" 
			key="edit">Включу редактирование</div>

		<div 
			class="button mb-3 button-block" 
			@click="open_settings">
			Настрою элемент</div>

		<div 
			class="button button-red button-block" 
			@click="m_remove(null, null)" 
			v-show="is_root">
				Удалю элемент
		</div>

		<modal :fromjs="false" type='belowclick' @hide="show_settings = false" v-if="show_settings" :x="x" :y="y">
			<div class="mb-3">
				<!-- 
					#BUG
					нужно делать через
					changeElement
				-->
				<input type="checkbox" v-model="m_element.is_big" class="mr-2" :id="'is_big' + m_index" />
				<label :for="'is_big' + m_index">Сделаю большим</label>
			</div>
			<div v-if="m_element.elements.length > 1">
				<input type="checkbox" v-model="m_element.show_slider_controls" class="mr-2" :id="'show_slider_controls' + m_index" />
				<label :for="'show_slider_controls' + m_index">Покажу управление слайдером</label>
			</div>
		</modal>
		
	</div>
</div>
</template>
<script>
import { mixin_ld_element } from '@/mixins/ld-element';

export default {
	mounted() {
		this.current_index = 0;
	},
	data() {
		return {
			adding_element: false,
			show_settings: false,
		}
	},
	methods: {
		open_settings(e) {
			this.x = e.clientX
			this.y = e.clientY
			this.show_settings = true
		},
		toggle_add_element() {
			this.adding_element = !this.adding_element;
		},
		show_component(element, index, current_index) {
			let show = true;
			if(!this.is_element_container) {
				show = index === current_index;
			} 
			return show;
		},
		change_current_index(index) {
			this.current_index = index;
		},
		added_element() {
			this.current_index = this.m_element.elements.length - 1;
		},
		/*
			Раньше удаление вызывалось изунтри дочернего контейнера, поэтому нужно было всплытие. Сейчас удаление реализуется на уровне родительского контейнера

			removed_element(element) {
				console.log(element, 'REMOVEELEMENT')
				this.current_index = element.index > 0 ? element.index - 1 : 0;
			},
		*/
		remove_slide(index) {
			console.log(this.m_source, 'remove')
			this.m_remove(this.m_element.elements, index)

			/*
				#REFACTOR
				Надо бы более изящную логику сделать. Сейчас если я на первом слайде и удаляю третий, меня свитчает на второй
			*/
			this.current_index = index > 0 ? index - 1 : 0;
		}
	},
	computed: {
		current_index: {
			get() {
				return this.m_element.current_index
			},
			set(index) {
				this.m_changeElement({
					current_index: index 
				});
			}
		},
		container_class() {
			return {
				"ld-container-main_big" : this.m_element.is_big,
				"ld-container-main_bordered": this.not_solo && !this.is_root,
			}
		},
		is_root() {
			return this.m_map.length === 1;
		},
		is_element_container() {
			return this.m_element.type == "container" && this.m_element.subtype == "element";
		},
		not_solo() {
			return this.m_source.length > 1;
		},

		show_author_actions() {
			return this.m_longread.is_author && (this.not_solo || this.is_root);
		},
		show_add_element() {
			return this.is_root && this.m_longread.is_author && this.m_element.is_editing && this.adding_element;
		},
		show_navigation() {
			if(this.m_element.show_slider_controls == undefined && !this.is_element_container && this.m_element.elements.length > 1) {
				return true
			} else {
				return this.m_element.show_slider_controls && this.m_element.elements.length > 1 && !this.is_element_container;
			}
		},
		wrapper_classes() {
			return {
				'ld-container-wrapper_editing' : this.m_element.is_editing,
				'ld-container-wrapper_author' : this.$store.state.longread.is_author
			}
		}
	},
	mixins: [ mixin_ld_element ],
	name: "ld-container",
}
</script>
<style lang="scss">
@import '@/assets/scss/variables';

.ld-container-wrapper {
	position: relative;
	transition: background .25s, padding .35s;
	
	&:hover {
		z-index: 100;
		
	}
}

.ld-container-wrapper_author:hover {
	background: $color_level2;
}

.ld-container-wrapper_editing {
	padding: 10px 0;

	&:hover {
		
	}
}
    
.ld-container-main {
	width: 800px;
	margin-left: 200px;
	//border: 1px solid red;
	//padding: 10px;
	
	.ld-container-main {
		width: 100%;
		margin-left: 0;
	}

	.ld-container {
		position: relative;
	}
}

.ld-add-element-container {
	position: absolute;
	right: 0px;
	top: 0px;
}

.ld-container-main_big {
	width: 1200px;
}

.ld-container-main_bordered {
	//outline: 5px solid #0f0f0f;
}
.ld-container-main_bordered .ld-header {
	margin-top: 0;
}

.ld-container-author-actions {
	position: absolute; 
	right: 10px; 
	top: 50%;
	z-index: 110;
	width: 300px;
	margin-top: -120px;
	background: $color_level2;
	margin-right: -150px;
	opacity: 0;
	transition: margin-right .3s, opacity .5s;
	padding: 30px 0 30px 50px;
}

.ld-container-wrapper:hover .ld-container-author-actions {
	opacity: 1;
	margin-right: 0;
}

.ld-interactive-navigation-wrap {
	position: relative;
	margin-bottom: 1rem;
	height: 30px;
}

.ld-interactive-navigation {
	list-style: none;
    position: absolute;
    top: 0px;
    left: 50%;
    width: 0;
    display: flex;
    padding: 0;
	justify-content: center;
	z-index: 200;
	
	li {
		cursor: pointer;
		border: 1px solid $color_white;
		transition: opacity .3s;
		position: relative;
		//border-radius: 20px;
		margin: 0 0 0 5px;
		font-size: .6rem;
		color: $color_white;
		display: block;
		transition: background .3s, color .3s;

		span {
			display: block;
			width: 25px;
			line-height: 25px;
			border-radius: 20px;
			text-align: center;
		}
	}

	li.active, li:hover {
		background: $color_white;
		color: $color_level1;
	}

	li:hover .ld-interactive-navigation-delete {
		opacity: 1;
		z-index: 1;
	}
}

.ld-interactive-navigation-bg {
	position: absolute;
	left: 0; top: -5px;
	width: 100%;
	height: 40px;
	background: #ccc;
	z-index: 10;
	border: 5px solid #3f3f3f
}

.ld-interactive-previous,
.ld-interactive-next {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	opacity: 0.8;
	color: $color_white;
	border: 1px solid $color_white;
	line-height: 25px;
	text-align: center;
	font-size: 15px;
	cursor: pointer;
	transition: background .3s, color .3s;
	//border-radius: 30px;
	width: 25px;
}
.ld-interactive-previous:hover,
.ld-interactive-next:hover {
	background: $color_white;
	color: $color_level1;
}
.ld-interactive-next {
	left: auto;
	right: 0;
}

.ld-interactive-navigation-delete {
	position: absolute;
	bottom: 100%;
	font-size: 20px;
	width: 100%;
	left: 0;
	text-align: center;
	margin: 0 0 8px;
	z-index: -1;
	opacity: 0;
	transition: opacity .25s;
	color: $color_white;
}

.ld-interactive-navigation-delete:hover {
	outline: 1px solid $color_white;
}

@media screen and (max-width:991px) {
	.ld-container-main {
		width: 100%;
		margin: 0;
		padding: 0 10px;
	}

	.ld-container-author-actions {
		display: none;
	}
}
</style>