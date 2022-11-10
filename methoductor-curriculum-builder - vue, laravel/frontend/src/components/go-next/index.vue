<template>
<div class="col-12 col-lg-6 offset-lg-6 button-container">
	<router-link
		:to="append($route, path)"
		custom
		v-slot="{ navigate }">
		<v-button
			@click="navigate"
			class="button">
			{{ translate("c_go") }}
			<i class="las la-arrow-right"></i>
		</v-button>
	</router-link>
</div>
</template>

<script>
import VButton from '@/components/form/v-button'
import translate from './translate'

export default {
	props: {
		path: {
			required: true,
		}
	},
	setup() {
		return {
			translate
		}
	},
	components: {
		VButton,
	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>