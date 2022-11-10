//import { reactive } from 'vue'
import state from '@/store/course'
import { TemplateNode } from './TemplateNode'

class LessonTemplate extends TemplateNode {
	constructor(data = {}) {
		super(data)

		if(!data.structure) data.structure = {}

		this.type = "template"

		this.states_ids = data.states_ids
		
		this.items = {}

		super.put()
	}

	get container() {
		return state.lesson_templates.items
	}

	/*
	static get all() {
		let result = []
		for(let key in course_state.lesson_templates.items) {
			if(course_state.lesson_templates.items[key].type === 'template') result.push(course_state.lesson_templates.items[key])
		}
		return result
	} 
	*/
}

const createLessonTemplate = data => new LessonTemplate(data)

export { createLessonTemplate, LessonTemplate }