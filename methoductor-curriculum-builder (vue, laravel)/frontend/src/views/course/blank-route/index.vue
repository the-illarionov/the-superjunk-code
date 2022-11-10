<template>
	<div></div>
</template>

<script>
import routerReplace from '@/composables/routerReplace'

export default {
	setup() {
		let redirect = "goal"
		// здесь будет логика по редиректу в зависимости от условий
		//console.log(route)

		routerReplace(redirect)
		
	}
}
</script>

<style>

</style>