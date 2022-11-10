<template>
<div class="l-content">
	Экспорт
</div>
</template>

<script>
import course_state from '@/store/course'

import translate from './translate'

export default {
	setup() {
		console.log('eslint fix', course_state)

		return {
			translate,
		}
	},
	props: {

	},
	components: {
		
	}
}
</script>

<style>

</style>