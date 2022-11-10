//import { reactive } from 'vue'
import course_state from '@/store/course'

class State {
	constructor(data = {}) {
		this.name = data.name
		this.id = data.id
		this.order = data.order
		this.description = data.description
		this.examples = data.examples
		this.module_placement = data.module_placement
		this.sprint_placement = data.sprint_placement

		course_state.states.items[this.id] = this
	}
}

const createState = data => new State(data)

export { createState }