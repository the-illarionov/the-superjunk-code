<template>
	<v-card class="mb-5 pb-2">
		<div v-html="translate(type)"></div>
		<!--
		<p>После запуска стоимость вырастет до $19/месяц</p>
		<p class="mb-0">Для тех кто подпишется сейчас, цена навсегда $4/месяц</p>
		-->
	</v-card>
</template>

<script>
import VCard from '@/templates/card'
import translate from './translate'

export default {
	setup() {
		return {
			translate
		}
	},
	props: {
		type: {
			required: true,
		}
	},
	components: {
		VCard
	}
}
</script>

<style>

</style>