<template>
	<div v-html="translate('hint')" />
</template>

<script>
import translate from './translate'
export default {
	setup() {
		return {
            translate
		}
	},
}
</script>

<style scoped lang="scss">
@import "./index";
</style>