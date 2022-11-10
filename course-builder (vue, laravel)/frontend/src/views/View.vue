<template>
	<div>
		<longread
			:is_author="is_admin" />
	</div>
</template>

<script>
import Longread from '@/components/view/longread'

export default {
	components: {
		Longread
	},
	props: {
		is_admin: {
			required: true,
		}
	}
}
</script>
