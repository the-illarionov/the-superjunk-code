import { Node } from '../Node'
import { reactive } from 'vue'
import course_state from '@/store/course'
//import { LessonTemplate } from '@/store/classes/LessonTemplate'

class LessonPlan extends Node {
	constructor(data = {}) {
		super(data)
		
		this.type = "lesson_plan"
		this.lesson_id = data.lesson_id

		this.linkToLesson(data.lesson_id)

		super.put()
	}

	get container() {
		return course_state.lesson.items
	}

	get lesson() {
		return course_state.lessons.items[this.lesson_id]
	}

	get template_id() {
		let result = undefined

		const templates = course_state.lesson_templates.items
		const state_id = this.lesson.state_id
		
		// здесь и будет описана логика подбора шаблона. пока что просто первый со вхождением
		if(state_id) {
			for(let key in templates) {
				if(templates[key].states_ids.indexOf(state_id) > -1) result = key
			}
		}

		return result
	}

	linkToLesson(lessonId) {
		this.lesson_id = lessonId
		course_state.lessons.items[lessonId].plan_id = this.id
	}

	delete() {
		if(course_state.lesson.selected_id === this.id) {
			course_state.lesson.loaded = false
			course_state.lesson.selected_id = null
		}

		super.delete()
	}
}

const createLessonPlan = data => reactive(new LessonPlan(data))

export { createLessonPlan }