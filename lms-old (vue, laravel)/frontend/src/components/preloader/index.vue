<template>
	<transition name="fade-preloader">
		<div class="loader" v-if="controller" />
	</transition>
</template>

<script>
export default {
	props: {
		controller: Boolean
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
