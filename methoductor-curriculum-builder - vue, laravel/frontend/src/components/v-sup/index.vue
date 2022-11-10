<template>
	<span class="v-sup">
		<slot name="default"></slot>
		<span class="text">
			<slot name="sup"></slot>
		</span>
	</span>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import './index';
</style>