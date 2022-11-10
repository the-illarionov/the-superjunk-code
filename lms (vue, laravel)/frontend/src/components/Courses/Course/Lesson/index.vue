<template>
	<div>
		<div v-if="lesson">
			{{ lesson }}

			<h1>{{ lesson.number }}. {{ lesson.name }} -</h1>
			<longread :is-editor="isEditor" :structure="lesson.structure" />
			<slot name="default"></slot>
		</div>
		<div v-else>
			<h1 class="skeleton-container">&nbsp;</h1>
		</div>
	</div>
</template>
<script>
import user from "@/stores/User"

import Longread from "@/components/Longread"

export default {
	setup() {
		return {
			user
		}
	},
	props: {
		lesson: {
			required: true
		},
		isEditor: {
			default: () => false
		}
	},
	components: {
		Longread
	}
}
</script>
