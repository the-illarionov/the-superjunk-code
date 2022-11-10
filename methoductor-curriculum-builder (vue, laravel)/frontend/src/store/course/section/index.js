import state from '@/store/course'
import { computed } from '@vue/runtime-core'

export default {
	expanded: false,
	section_id: undefined,
	deep: false,

	loaded: computed(() => {
		return typeof state.section.section_id !== 'undefined'
	}),
	reset() {
		state.section.section_id = undefined
	}
}