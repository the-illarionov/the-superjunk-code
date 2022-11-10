import { Node } from '../Node'
import { reactive } from 'vue'
import course_state from '@/store/course'

class Module extends Node {
	constructor(data = {}) {
		super(data)
		
		this.type = "module"

		super.put()
	}

	get container() {
		return course_state.lessons.items
	}
}

const createModule = data => reactive(new Module(data))

export { createModule }