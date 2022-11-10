<template>
<div>
	<p v-if="m_desc" class="ld-desc" v-html="m_desc"></p>

	<div class="ld-media-wrapper" :class="m_wrapper_class" ref="media_wrapper">
		<transition :name="m_ld_element_edit_transition">
			<div class="ld-element-edit" v-if="m_element.is_editing && !m_element.is_editing_highlights">
				<input rows="2" v-model="m_desc" placeholder="Описание (необязательно)" class="media-desc-input">
				<dropzone
					type="image"
					:file="m_file"
					:url="$store.state.api_url + 'uploadfile'"
					v-on:change_element="m_changeElement"
					v-on:change_src="m_changeSrc">
				</dropzone>
				
			</div>
		</transition>
		
		<img src="" :data-lazy-src="m_file.src" class="ld-media-element ld-lazy-load" ref="lazy_element" @load="m_hasLoaded" />
		
		<ld-highlights
			:element="m_element"
			:map="m_map" 
			:is_media_loaded="m_loaded"
			v-on:delete_highlights="m_delete_highlights">
			</ld-highlights>
		
		<div class="loader-wrapper">
			<div class="loader">
			</div>
		</div>
	</div>
	
	<div class="pt-4" v-if="m_element.is_editing && m_loaded">
		<span class="button button-block" @click="m_changeElement({ is_editing_highlights: false })" v-if="m_element.is_editing_highlights">Выключу указатели</span>
		<span class="button button-block" @click="m_changeElement({ is_editing_highlights: true })" v-else>Включу указатели</span>
	</div>

	<transition name="top-to-bottom">
		<div class="pt-3" v-if="m_element.is_editing_highlights">
			<div>
				Цвет фона:
				<input type="text" v-model="m_highlights_bg" />
			</div>
		</div>
		
	</transition>
	
</div>
</template>

<script>
import { mixin_ld_element } from '@/mixins/ld-element';
import { mixin_ld_media } from '@/mixins/ld-media';
import { mixin_ld_lazy } from '@/mixins/ld-lazy';

export default {
	mixins: [
		mixin_ld_element, 
		mixin_ld_media,
		mixin_ld_lazy
	],
	name: "ld-image",
}
</script>

