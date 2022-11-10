<template>
<div class="ld-intro">
	<transition :name="m_ld_element_edit_transition">
		<div class="ld-element-edit" v-show="m_element.is_editing">
			<dropzone
				type="media"
				:file="m_file"
				:url="$store.state.api_url + 'uploadfile'"
				v-on:change_element="m_changeElement"
				v-on:change_file_type="change_file_type">
			</dropzone>

			<input
				type="text"
				:maxlength="60"
				placeholder="Заголовок"
				v-model="header"
				class="intro-header" />
			
			<input
				type="text"
				placeholder="Описание (необязательно)"
				:maxlength="60"
				v-model="desc"
				class="intro-desc" />
		</div>
	</transition>

	<div class="ld-intro-text">
		<h1 class="ld-header">{{ header }}</h1>
		<p>{{ desc }}</p>
	</div>

	<template v-if="has_image">
		<div class="loader-wrapper" v-if="show_loader">
			<div class="loader">
			</div>
		</div>
		
		<img 
			v-if="is_image"
			class="ld-intro-element" 
			:src="m_file_src" 
			
			ref="image" 
			@load="show_loader = false" />

		<video 
			v-if="is_video"
			class="ld-intro-element"
			loop
			autoplay 
			muted 
			:src="m_file.src"
			@canplaythrough="show_loader = false"/>

	</template>
	
</div>
</template>
<script>
import { mixin_ld_element } from '@/mixins/ld-element';
import { mixin_ld_media } from '@/mixins/ld-media';

export default {
	mounted() {
		
	},
	mixins: [
		mixin_ld_element,
		mixin_ld_media
	],
    data: function () {
        return {
			show_loader: true,
			is_video: false,
			is_image: false,
        }
    },
	computed: {
		element_wrapper_class() {
			return {
				"ld-element-wrapper-min-height" : this.m_element.is_editing
			}
		},
		has_image() {
			return this.m_file.src
		},
		header: {
			get() {
				return this.m_element.header;
			},
			set(value) {
				this.m_changeElement({
					header: value
				});
			}
		},
		desc: {
			get() {
				return this.m_element.desc;
			},
			set(value) {
				this.m_changeElement({
					desc: value
				});
			}
		}
	},
	name: "ld-intro",
	methods: {
		change_file_type(type) {
			console.log(type, 'emit')
			if(type.indexOf("image") > -1) {
				this.is_image = true
				this.is_video = false
			}
			else if(type.indexOf("video") > -1) {
				this.is_image = false
				this.is_video = true
			}
		}
	},
	watch: {
		
	}
}
</script>

<style scoped>
.ld-intro {
	width: 1200px;
	min-height: 675px;
	position: relative;
	overflow: hidden;
}

.ld-intro-text {
	position: relative;
	z-index: 10;
	margin-left: 50px;
}

.ld-intro-element {
	width: 100%;
	display: block;
	left: 0; top: 0;
	position: absolute;
	z-index: 1;
}

.loader-wrapper {
	position: absolute;
	z-index: -2;
	background: none;
}

@media screen and (max-width:991px) {
	.ld-intro {
		width: 100vw;
		margin-left: -20px;
		max-height: 50vh;
		min-height: 40vh;
	}

	.ld-intro .ld-header {
		margin-top: 0;
		padding-top: 100px;
	}
}
</style>