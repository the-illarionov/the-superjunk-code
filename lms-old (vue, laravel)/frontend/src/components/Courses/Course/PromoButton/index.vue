<template>
	<div class="promo-button skeleton-container" style="min-height: 100px">
		<p>{{ course?.name }}</p>
		<router-link :to="basePath + '/' + course?.url">Подробнее</router-link>
	</div>
</template>

<script>
import { useRoute } from "vue-router"

export default {
	setup() {
		return {}
	},
	props: {
		course: {
			required: true,
			type: Object
		},
		basePath: {
			type: String,
			default() {
				const route = useRoute()
				return route.path
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>
