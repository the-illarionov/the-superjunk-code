import { Node } from '../Node'
import { reactive } from 'vue'
import course_state from '@/store/course'

class Skill extends Node {
	constructor(data = {}) {
		super(data)
		
		this.type = "skill"

		this.topic_id = data.topic_id ?? undefined
		this.steps = data.steps ?? []

		super.put()
	}

	get container() {
		return course_state.lessons.items
	}

	get topic() {
		return course_state.topics.items[this.topic_id]
	}

	delete() {
		course_state.topics.items[this.topic_id].remove(this.id, 'skills')

		for(let i = 0; i < this.steps.length; i++) {
			const stepId = this.steps[i]

			if(course_state.lesson.items[stepId]) {
				const skillIndex = course_state.lesson.items[stepId].skills.indexOf(this.id)

				course_state.lesson.items[stepId].skills.splice(skillIndex, 1)
			}
		}

		super.delete()
	}

	linkToTopic(topicId) {
		this.topic_id = topicId
		course_state.topics.items[topicId].skills.push(this.id)

		return this
	}
}

const createSkill = data => reactive(new Skill(data))

export { createSkill }