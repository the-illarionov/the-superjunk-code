<template>
	<div class="l-content">
		<h2 class="header-3">{{ translate('header') }}</h2>
		<p>{{ translate('text') }}</p>
		<router-link to="/" replace>
			{{ translate('main') }}
		</router-link>
	</div>
</template>

<script>
import translate from './translate'

export default {
	setup() {
		return {
			translate
		}
	},
}
</script>

<style>

</style>