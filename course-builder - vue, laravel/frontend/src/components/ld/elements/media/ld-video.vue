<template>
<div>
	<p v-if="m_desc" class="ld-desc" v-html="m_desc"></p>

	<div class="ld-media-wrapper" :class="m_wrapper_class" ref="media_wrapper">
		<transition :name="m_ld_element_edit_transition">
			<div class="ld-element-edit" v-if="m_element.is_editing && !m_element.is_editing_highlights">
				<input rows="2" v-model="m_desc" placeholder="Описание (необязательно)" class="media-desc-input">
				
				<dropzone
					:file="m_file"
					type="video"
					:url="$store.state.api_url + 'uploadfile'"
					v-on:change_element="m_changeElement"
					v-on:change_src="m_changeSrc"></dropzone>
				
			</div>
		</transition>
		
		<div ref='video_container'>
			<video loop controls autoplay muted src="" :data-lazy-src="m_file.src" class="ld-media-element ld-lazy-load" ref="lazy_element" @canplaythrough="m_hasLoaded"/>
			<!--
			<div class="controls" v-show="show_controls">

				<i @click="play_pause" v-show="!play_toggle" class="las la-play"></i>
				<i @click="play_pause" v-show="play_toggle" class="las la-pause"></i>

				<progress ref="progress" value="0" min="0" style="margin-left:5%;">
					<span ref="progress_bar"></span>
				</progress>

				<i @click="mute_unmute" v-show="mute_toggle" class="las la-volume-mute" style="margin-left:5%;"></i>
				<i @click="mute_unmute" v-show="!mute_toggle" class="las la-volume-up" style="margin-left:5%;"></i>

				<i @click="fullscreen" v-show="!fullscreen_toggle" class="las la-expand" style="margin-left:5%;"></i>
				<i @click="fullscreen" v-show="fullscreen_toggle" class="las la-expand-arrows-alt" style="margin-left:5%;"></i>
			</div>
			-->
		</div>

		<ld-highlights
			:element="m_element"
			:map="m_map"
			:is_media_loaded="m_loaded">
			</ld-highlights>
		
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
//import { elements_types } from '@/components/ld/elements/types'
import { mixin_ld_element } from '@/mixins/ld-element';
import { mixin_ld_media } from '@/mixins/ld-media';
import { mixin_ld_lazy } from '@/mixins/ld-lazy';

export default {
	mixins: [
		mixin_ld_element,
		mixin_ld_media,
		mixin_ld_lazy
	],
	name: "ld-video",
	data() {
		return {
			show_controls: false,
			play_toggle: true,
			mute_toggle: true,
			fullscreen_toggle: false,
		}
	},
	methods: {
		play_pause: function() {
			if (this.$refs.lazy_element.paused || this.$refs.lazy_element.ended) this.$refs.lazy_element.play()
			else this.$refs.lazy_element.pause()
			this.play_toggle = ! this.play_toggle
		},
		mute_unmute: function() {
			this.$refs.lazy_element.muted = !this.$refs.lazy_element.muted
			this.mute_toggle = ! this.mute_toggle
		},
		isFullScreen: function() {
			return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
		},
		setFullscreenData: function(state) {
			this.$refs.video_container.setAttribute('data-fullscreen', !!state)
		},
		fullscreen: function() {
			if (this.isFullScreen()) {
				if (document.exitFullscreen) document.exitFullscreen()
				else if (document.mozCancelFullScreen) document.mozCancelFullScreen()
				else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen()
				else if (document.msExitFullscreen) document.msExitFullscreen()
				this.setFullscreenData(false);
			}
			else {
				if (this.$refs.video_container.requestFullscreen) this.$refs.video_container.requestFullscreen()
				else if (this.$refs.video_container.mozRequestFullScreen) this.$refs.video_container.mozRequestFullScreen()
				else if (this.$refs.video_container.webkitRequestFullScreen) this.$refs.video_container.webkitRequestFullScreen()
				else if (this.$refs.video_container.msRequestFullscreen) this.$refs.video_container.msRequestFullscreen()
				this.setFullscreenData(true)
			}
			this.fullscreen_toggle = ! this.fullscreen_toggle
		},
		countOffset: function(element) {
			let left = 0
			do {
				left += element.offsetLeft || 0
				element = element.offsetParent
			} while(element)
			return left
		},
	},
	mounted() {
		// this.$refs.lazy_element.controls = false
		this.show_controls = true
		let self = this

		this.$refs.lazy_element.addEventListener('timeupdate', function() {
			self.$refs.progress.setAttribute('max', self.$refs.lazy_element.duration)

			self.$refs.progress.value = self.$refs.lazy_element.currentTime
			self.$refs.progress_bar.style.width = Math.floor((self.$refs.lazy_element.currentTime / self.$refs.lazy_element.duration) * 100) + '%'
		})

		this.$refs.progress.addEventListener('click', function(e) {
			let offsetLeft = self.countOffset(self.$refs.progress)
			let pos = (e.pageX  - offsetLeft) / this.offsetWidth
			self.$refs.lazy_element.currentTime = pos * self.$refs.lazy_element.duration;
		})
	}
}
</script>
<style lang="scss" scoped>
.controls {
	width: 100%;
	z-index: 400;
	position: absolute;
	bottom: 10px;
	display: flex;
	justify-items: stretch;
}
.controls progress {
	width: 85%;
	/*color:#f00;*/
}

// code below is required for firefox and chrome
/*
.controls progress::-moz-progress-bar {
   background-color:#f00;
}

.controls progress::-webkit-progress-value {
   background-color:#f00;
}
*/
</style>