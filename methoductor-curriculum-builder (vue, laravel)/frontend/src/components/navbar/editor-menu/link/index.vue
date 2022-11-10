<template>
	<router-link
		:to="append($route, path)"
		custom
		v-slot="{ navigate, isActive }">
		<v-button
			small
			block
			:active="isActive"
			@click="navigate">
			<span class="counter" />
			{{ text }}
		</v-button>
	</router-link>
</template>

<script>
import VButton from "@/components/form/v-button"

export default {
	props: {
		text: {
			required: true,
		},
		path: {
			required: true,
		}
	},
	components: {
		VButton
	}
}
</script>

<style>

</style>