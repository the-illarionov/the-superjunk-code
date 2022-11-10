<template>
	<div class="modal-wrapper" @click="application.modal.hide">
		<div class="modal" v-on:click.stop>
			<span class="modal-close" @click="application.modal.hide"
				>закрыть</span
			>
			<login v-if="application.modal?.type === 'login'" />
			<div id="modal"></div>
		</div>
	</div>
</template>
<script>
import application from "@/stores/Application"

import Login from "@/components/Login"

export default {
	setup() {
		return {
			application
		}
	},
	components: {
		Login
	}
}
</script>
<style lang="scss" scoped src="./index.scss"></style>
