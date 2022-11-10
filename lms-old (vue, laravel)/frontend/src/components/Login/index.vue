<template>
	<div>
		<a :href="apiUrl + '/login/facebook'" @click="showPreloader"
			>facebook</a
		>
		<a :href="apiUrl + '/login/google'" @click="showPreloader">google</a>
		<a :href="apiUrl + '/login/vk'" @click="showPreloader">vk</a>
		<a :href="apiUrl + '/login/twitter'" @click="showPreloader">twitter</a>
	</div>
</template>
<script>
import application from "@/stores/Application"

export default {
	setup() {
		const apiUrl = process.env.VUE_APP_API

		function showPreloader() {
			application.preloaders.main = true
		}

		return {
			apiUrl,
			application,
			showPreloader
		}
	}
}
</script>
