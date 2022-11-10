<template>
	<div>
		<longread
			:is_author="true"
			:is_demo="true" />
	</div>
</template>

<script>
import Longread from '@/components/view/longread'

export default {
	components: {
		Longread
	},
}
</script>
