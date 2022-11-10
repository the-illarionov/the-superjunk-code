<template>
	<div v-show="local_control">
		<div class="modal-container">
			<div :class="type" ref='modal'> 
				<slot >

				</slot>
			</div>
		</div>
		<div class="modal-overlay" @click="hide" v-if=" (type != 'info') && (type!='locked')">
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import modal from '@/components/utils/modal'

export default {
	mounted() {
		if(this.type == 'info') {
			setTimeout(() => this.local_control = false, 3500)
			setTimeout(() => document.querySelector('#app').removeChild(this.$el), 4000)
		} else if(this.type =='belowclick') {
			let windowSize = window.innerHeight
			let windowWidth = window.innerWidth
			let lowestPoint = this.y + this.$refs.modal.getBoundingClientRect().height
			let rightestPoint = this.x + this.$refs.modal.getBoundingClientRect().width
			if(lowestPoint > windowSize) {
				this.$refs.modal.style.top = this.y - (lowestPoint-windowSize)+ 'px'
			} else {
				this.$refs.modal.style.top = this.y + 'px'
			}
			if(rightestPoint > (windowWidth - 40)) {
				this.$refs.modal.style.left = this.x - 40 - (rightestPoint-windowWidth)+ 'px'
			} else {
				this.$refs.modal.style.left = this.x + 'px'
			}
		}
	},
	methods: {
		open: function(type, text) {
			let ComponentClass = Vue.extend(modal)
			let instance = new ComponentClass({
				propsData: { type: type }
			})
			instance.$slots.default = [text]
			instance.$mount()
			document.querySelector('#app').appendChild(instance.$el)
		},
		hide: function() {
			if(this.fromjs) {
				this.local_control = false
				setTimeout(() => document.querySelector('#app').removeChild(this.$el), 1000)
			} else {
				this.$emit('hide')
			}
		}
	},
	data() {
		return {
			local_control: true
		}
	},
	computed: {
		
	},
	props: {
		type: {
			default: 'info',
		},
		fromjs: {
			default: true,
		},
		x: {
		},
		y: {
		},
	}
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables';
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0,0,0,0.85);
	z-index: 1200;
}
.belowclick {
	z-index: 1300;
	position: fixed;
}
.transparent {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1300;
}
.info {
	position: fixed;
	top: 10px;
	color: $color_level1;
	background: $color_green_light;
	left: 50%;
	transform: translateX(-50%);
	width: 25vw;
	min-height: 5vh;
	border: 2px solid $color_green_light;
	text-align: center;
	z-index: 1400;
	padding: 10px 0;
}
.error {
	position: fixed;
	top: 30%;
	color: $color_error;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	z-index: 1400;
}
.test {
	background: #ccc;
}
</style>