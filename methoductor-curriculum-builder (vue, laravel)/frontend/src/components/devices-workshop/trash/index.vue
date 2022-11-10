<template>
<div>
	<draggable 
		class="trash__draggable"
		:group="{ name: 'devices', pull: false, put: true}" 
		animation="300">
		<p class="trash__text">{{ translate("delete") }}</p>
		<div class="drag-cover"></div>
	</draggable>
</div>
</template>

<script>
import draggable from 'vuedraggable'

import localization from "@/composables/localization"
import messages from '@/localization/components/device'



const translate = localization(messages)

export default {
	setup() {
		return {
			translate
		}
	},
	props: {
		
	},
	components: {
		draggable,
	}
}
</script>

<style lang="scss" scoped>
@import '../index';
</style>