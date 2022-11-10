import { reactive } from 'vue'
//import generateKey from '@/composables/generateKey'
import course_state from '@/store/course'

class Device {
	constructor(data = {}) {
		this.id = data.id
		this.name = data.name
		this.description = data.description
		this.examples = data.examples ?? {}
		this.section_subtypes = data.section_subtypes

		this.container[this.id] = this
	}

	get container() {
		return course_state.devices.items
	}
}

const createDevice = data => reactive(new Device(data))

export { createDevice }