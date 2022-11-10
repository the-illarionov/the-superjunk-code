<template>
<div
	class="content-editable"
	contenteditable
	:placeholder="computed_placeholder"
	@keydown.enter="submit"
	@blur="$emit(
		'update:modelValue', 
		$event.target.innerText
	)">
	{{ modelValue }}
</div>
</template>

<script>
//import global from '@/store/application'
import { computed } from "vue"

import translate from './translate'

export default {
	setup(props) {
		/*
		function onKeyUp(e) { // костыль для сафари мобилки
			if(global.is_mobile) {
				let range, selection
				if(document.createRange) {
					range = document.createRange();//Create a range (a range is a like the selection but invisible)
					range.selectNodeContents(e.target);//Select the entire contents of the element with the range
					range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
					selection = window.getSelection();//get the selection object (allows you to change selection)
					selection.removeAllRanges();//remove any selections already made
					selection.addRange(range);//make the range you have just created the visible selection
				}
			}
		}
		*/

		function submit(e) {
			e.target.blur()
			e.preventDefault()
			return false
		}

		const computed_placeholder = computed( () => {
			if(!props.placeholder) {
				return props.lowerCase ? translate('click_to_edit').toLowerCase() : translate('click_to_edit')
			} else {
				return props.placeholder
			}
			
		})

		return {
			//onKeyUp,
			computed_placeholder,
			submit
		}
	},
	props: {
		placeholder: {
			default() {
				return false
			}
		},
		modelValue: {},
		lowerCase: {
			default() {
				return false
			},
			type: Boolean
		}
	}
}
</script>

<style scoped lang="scss">
@import './index';
</style>