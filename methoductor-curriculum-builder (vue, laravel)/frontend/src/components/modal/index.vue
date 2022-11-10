<template>
	<div class="modal-container" :class="{ 'absolute': type == 'tooltip' , 'fixed': type == 'popup', 'small': small }">
		<div :class="[type, popupClass]" ref='modal'> 
			<slot name="default"></slot>

			<span
				class="close"
				@click="hide"
				v-if="type == 'popup'">
				<i class="las la-times"></i>
			</span>
		</div>

		<div class="modal-overlay" @click="hide" v-if="overlay">
		</div>
	</div>
</template>
<script>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'

import localization from "@/composables/localization"
import messages from '@/localization/components/modal'
/*
#TODO
неверная комбинация login/пароль
e-mail уже зарегистрирован
*/


const translate = localization(messages)

export default {
	emits: ['hide'],
	props: {
		type: {
			default: 'info',
		},
		x: {

		},
		y: {

		},
		small: {
			default() {
				return false
			},
			type: Boolean
		},
		popupClass: {},
	},
	setup(props, { emit }) {
		const overlay = computed(() => {
			if ( (props.type != 'info') && (props.type!='error_smooth') && (props.type!='locked') && (props.type!='tooltip') && (props.type!='tooltiptime')) {
				document.querySelector("body").classList.add("freeze")
				return true
			} else {
				return false
			}
		})

		const modal = ref(null)

		function hide() {
			emit("hide")
		}

		onMounted(() => {
			if(props.type == 'info' || props.type == 'error_smooth') {
				setTimeout(() => emit("hide"), 3500)
			} else if(props.type =='belowclick') {
				let windowSize = window.innerHeight
				let windowWidth = window.innerWidth
				let lowestPoint = props.y + modal.value.getBoundingClientRect().height
				let rightestPoint = props.x + modal.value.getBoundingClientRect().width
				if(lowestPoint > windowSize) {
					modal.value.style.top = props.y - (lowestPoint-windowSize)+ 'px'
				} else {
					modal.value.style.top = props.y + 'px'
				}
				if(rightestPoint > (windowWidth - 40)) {
					modal.value.style.left = props.x - 40 - (rightestPoint-windowWidth)+ 'px'
				} else {
					modal.value.style.left = props.x + 'px'
				}
			}
		})

		onBeforeUnmount(() => {
			document.querySelector("body").classList.remove("freeze")
		})
		
		return { hide, modal, overlay, translate }
	},
	components: {
		
	}
}
</script>
<style scoped lang="scss">
@import "./index";
</style>