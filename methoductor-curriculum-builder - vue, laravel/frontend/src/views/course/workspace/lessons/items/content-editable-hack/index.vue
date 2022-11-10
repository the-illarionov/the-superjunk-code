<template>
	<span v-if="element.show_skill">
		{{ translate('c_can') }}
	</span>
	<span v-else>
		{{ translate('c_knows') }}
	</span>
	<content-editable
		class="inline"
		lower-case
		:placeholder="element.placeholder"
		v-model="element.value" />
</template>

<script>
import { computed } from "vue"
import state from '@/store/course'
import ContentEditable from '@/components/content-editable'

import translate from '../translate'

export default {
	setup(props) {
		const element = computed(() => {
			let element = {
				placeholder: "null",
				value: "null",
				show_skill: true,
			}

			if(state.lessons.items[props.id]) {
				element = state.topics.items[state.lessons.items[props.id].topic_id]
			}
			
			return element
		})

		return {
			element,
			translate
		}
	},
	components: {
		ContentEditable
	},
	props: {
		id: {
			required: true,
			type: String,
		}
	}
}
</script>

<style>

</style>