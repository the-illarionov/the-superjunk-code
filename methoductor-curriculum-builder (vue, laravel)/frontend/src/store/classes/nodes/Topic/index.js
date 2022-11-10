import { Node } from '../Node'
import { reactive } from 'vue'
import course_state from '@/store/course'

class Topic extends Node {
	constructor(data = {}) {
		super(data)
		
		this.type = "topic"

		this.show_skill = data.show_skill ?? true
		this.skills = data.skills ?? []

		super.put()
	}

	get container() {
		return course_state.topics.items
	}

	delete() {
		const length = this.skills.length
		for(let i = 0; i < length; i++) {
			this.container[this.skills[0]].delete()
		}

		super.delete()
	}
}

const createTopic = data => reactive(new Topic(data))

export { createTopic }