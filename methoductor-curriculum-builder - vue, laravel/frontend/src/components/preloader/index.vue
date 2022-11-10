<template>
	<transition name="fade-preloader">
		<div class="loader-wrapper" v-if="show_loader">
			<div class="loader">
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		show_loader: Boolean
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>