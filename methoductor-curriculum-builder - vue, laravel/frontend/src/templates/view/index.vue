<template>
	<div class="view" :class="css">
		<div class="px-xxl-5">
			<slot name="default"></slot>
		</div>
	</div>
</template>

<script>
import { computed } from "vue"

export default {
	props: {
		center: {
			default() {
				return false
			},
			type: Boolean
		}
	},
	setup(props) {
		const css = computed(() => {
			return {
				"view_center": props.center,
			}
		})

		return { css }
	}
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>