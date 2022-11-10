import { Node } from '../Node'
import { reactive } from 'vue'
import course_state from '@/store/course'

class Sprint extends Node {
	constructor(data = {}) {
		super(data)
		
		this.type = "sprint"

		super.put()
	}

	get container() {
		return course_state.lessons.items
	}
}

const createSprint = data => reactive(new Sprint(data))

export { createSprint }