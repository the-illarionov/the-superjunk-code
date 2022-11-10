import { reactive } from 'vue'

import state from '@/store/course'
import { TemplateNode } from '../TemplateNode'

class LessonSection extends TemplateNode {
	constructor(data = {}) {
		super(data)

		this.template_id = data.template_id
		this.isCopy = data.isCopy ? true : false
		this.type = "section"
		this.subtype = data.subtype
		this.order = data.order ?? undefined
		this.description = data.description
		this.examples = data.examples

		super.put()
	}

	get container() {
		return this.isCopy ? state.lesson.items : state.lesson_templates.items[this.template_id].items
	}
}

const createLessonSection = data => reactive(new LessonSection(data))

export { createLessonSection }