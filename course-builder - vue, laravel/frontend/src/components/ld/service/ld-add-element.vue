<template>
	<!--
		#TODO
		Когда добавлявется элемент нао чтоб "добавить элемент" скрывалась сразу а то дурацкий скачок какой то
	-->
	<div class="ld-add-container">
		<div class="ld-add-container__button">
			<span class="button" @click="open_buttons" style="position: relative">
				<template v-if="root">
					Добавлю элемент
				</template>
				<template v-else>
					Добавлю слайд
				</template>
				
			</span>
		</div>
		
		<transition name="fade" >
			<modal :fromjs="false" type='belowclick' @hide="show_buttons = false" v-if="show_buttons" :x="x" :y="y">
				<p style="margin-left: 10px">Какой?</p>
				<template
					v-for="(group, index) in elements_types">
					<div
						class="mb-3"
						:key="index"
						v-if="!group.hidden">
						<span
							class="button button-without-border d-block"
							v-for="(element, index) in group.elements" 
							:key="index"
							@click="check_elements(element)">
							{{ element.name }}
						</span>
					</div>
				</template>
			</modal>
		</transition>
	</div>
</template>
<script>
import { elements_types } from '@/components/ld/elements/types'
import { containers_types } from '@/components/ld/containers/types'
export default {
	data() {
		return {
			elements_types: elements_types,
			show_buttons: false,
			x: 0,
			y: 0,
		}
	},
	methods: {
		open_buttons(e) {
			this.x = e.clientX
			this.y = e.clientY
			this.show_buttons = !this.show_buttons
		},
		check_elements(element) {
			let can_insert = true
			let error = 'Some error'
			this.show_buttons = !this.show_buttons
			/* 
				Тут настройка всяких правил, которые могут
				изменить can_insert на false
			*/
			/*
			if(this.root) {
			*/
				/*
					Если элемент добавляется в рут
				*/
				/*
				let previous_element
				let next_element
				let structure = this.$store.state.longread.structure
				if(structure.length > 0) {
					if(this.index == 0) {
						next_element = structure[this.index].elements[0].elements[0].name
						if(next_element == element.name) {
							can_insert = false
							error = 'Два однотипных элемента не могут идти друг за другом'
						}
					} else {
						previous_element = structure[this.index - 1 ].elements[0].elements[0].name
						if(structure.length > this.index) {
							next_element = structure[this.index].elements[0].elements[0].name
				
							if( (previous_element == element.name) || (next_element == element.name) ) {
								can_insert = false
								error = 'Два однотипных элемента не могут идти друг за другом'
							}
						} else {
							if(previous_element == element.name) {
								can_insert = false
								error = 'Два однотипных элемента не могут идти друг за другом'
							}
						}
					}
				}
			}
			*/
			if(can_insert) {
				this.dispatch(element)
			} else {
				this.$modal.methods.open('error',error)
			}
			
		},
		dispatch(element) {
			let destination = this.destination;
			let container_wrapper = this.$_.find(containers_types, { subtype: "wrapper" });
			let container_element = this.$_.find(containers_types, { subtype: "element" });
			if(this.root) {	
				destination = this.push({
					element: container_wrapper,
					destination: this.$store.state.longread.structure,
				}).element.elements;
			}
			destination = this.push({
				element: container_element,
				destination: destination,
			}).element.elements;			
			this.push({
				element: element,
				destination: destination,
			});
			this.$emit("added_element", element);
			/*
				Все контейнеры - интерактивны по дефолту. Элемент всегда лежит внутри контейнера
			*/
		},
		push(data) {
			let element = this.$_.cloneDeep(data.element);
			
			let payload = {
				destination: data.destination,
				element: element,
				index: this.index,
			}
			this.$store.dispatch("longread/addElement", payload);
			return {
				element: element,
			}
		}
	},
	props: {
		destination: {},
		root: {
			default() {
				return false;
			}
		},
		container: {},
		index: {
			required: true,
		},
	}
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';
.ld-add-container {
	position: relative;
	transition: background .25s;
	.header {
		text-align: center;
	}
	&:hover {
		background: $color_level2;
	}
	.ld-add-container__button {
		text-align: center;
		padding: 1rem 0;
		//transform: translate3d(0,-100%,0);
		transition: transform .25s, opacity .15s;
		opacity: 0;
		z-index: -1;
	}
	&:hover .ld-add-container__button,
	&.active .ld-add-container__button {
		transform: translate3d(0,0,0);
		opacity: 1;
	}
	&.inline {
		display: inline;
	}
	&.inline .ld-add-container__button {
		padding: 0;
		display: inline;
	}
	&.no-padding .ld-add-container__button {
		padding: 0;	
	}
	&.button-block .button {
		display: block;
	}
	.ld-add-container__buttons {
		position: absolute;
		width: 200px;
		left: 50%; top: 100%;
		margin-left: -100px;
		background: $color_level2;
	}
}
</style>