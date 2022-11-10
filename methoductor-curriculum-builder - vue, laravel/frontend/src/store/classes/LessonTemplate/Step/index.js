import { reactive } from 'vue'

import state from '@/store/course'
import { TemplateNode } from '../TemplateNode'

class LessonStep extends TemplateNode {
	constructor(data = {}) {
		super(data)

		this.type = "step"
		this.device_id = data.device_id

		this.template_id = data.template_id
		this.isCopy = data.isCopy ? true : false

		super.put()
	}

	get container() {
		return this.isCopy ? state.lesson.items : state.lesson_templates.items[this.template_id].items
	}
}

const createLessonStep = data => reactive(new LessonStep(data))

export { createLessonStep }