<template>
	<textarea
		:value="modelValue"
		@input="$emit(
			'update:modelValue', 
			$event.target.value
		)"
		:placeholder="placeholder"
	></textarea>
</template>

<script>

import localization from "@/composables/localization"
import messages from '@/localization/components/form'



const translate = localization(messages)

export default {
	props: {
		modelValue: {},
		placeholder: {
			default: translate("tap")
		},
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>