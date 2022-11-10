import generateKey from '@/composables/generateKey'
import course_state from '@/store/course'

class TemplateNode {
	constructor(data = {}) {
		this.type = data.type ?? undefined
		this.parent_id = data.parent_id ?? undefined
		this.name = data.name ?? undefined
		this.value = data.value ?? undefined
		this.id = data.id ?? generateKey()
		this.description = data.description ?? undefined	
		
		this.childs = data.childs ?? []	
	}

	put() {
		this.container[this.id] = this
		
		if(this.parent && this.index < 0) this.moveTo(this.parent_id)
	}

	get parent() {
		return course_state.lesson_templates.items[this.parent_id]
	}

	get index() {
		return this.parent ? this.parent.childs.indexOf(this.id) : undefined
	}

	moveTo(parent_id, index = undefined) {
		if(this.parent) {
			this.parent.childs.splice(this.index, 1)
		}
		if(typeof index === 'undefined') index = this.container[parent_id].childs.length

		this.container[parent_id].childs.splice(index, 0, this.id)
		this.parent_id = parent_id
	}
}

export { TemplateNode }