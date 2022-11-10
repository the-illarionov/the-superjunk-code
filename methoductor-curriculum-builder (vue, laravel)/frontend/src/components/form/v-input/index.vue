<template>
	<input 
		:type="type"
		:value="modelValue"
		:placeholder="placeholder"
		:class="css"
		@input="$emit(
			'update:modelValue', 
			$event.target.value
		)"
	/>
</template>

<script>
import { computed } from "vue"

import localization from "@/composables/localization"
import messages from '@/localization/components/form'



const translate = localization(messages)

export default {
	props: {
		type: {
			default: "text",
		},
		placeholder: {
			default: translate("tap")
		},
		noBg: {
			default() {
				return false
			},
			type: Boolean
		},
		block: {
			default() {
				return false
			},
			type: Boolean
		},
		modelValue: {},
	},
	setup(props) {
		const css = computed( () => {
			return {
				"no-bg": props.noBg,
				"block" : props.block
			}
		})

		return { css }
	},
}
</script>

<style scoped lang="scss">
@import "./index";
</style>