import { Node } from '../Node'
import { reactive } from 'vue'
import course_state from '@/store/course'
import api from '@/api'

class Lesson extends Node {
	constructor(data = {}) {
		super(data)
		
		this.type = "lesson"

		this.plan_id = data.plan_id ?? undefined
		this.state_id = data.state_id ?? undefined

		super.put()
	}

	get container() {
		return course_state.lessons.items
	}

	get state() {
		return course_state.states.items[this.state_id]
	}

	get indexInModule() {
		return this.parent.parent.getLowestChilds(3).indexOf(this.id)
	}

	delete() {
		if(this.plan_id && course_state.lesson.items[this.plan_id]) {
			course_state.lesson.items[this.plan_id].delete()
		}

		if(this.plan_id && !course_state.is_demo) api.delete('lesson-plans/' + this.plan_id.replace("lesson_plan_",""))

		super.delete()
	}
}

const createLesson = data => reactive(new Lesson(data))

export { createLesson }