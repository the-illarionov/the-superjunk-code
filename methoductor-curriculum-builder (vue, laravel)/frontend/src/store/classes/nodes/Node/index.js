import generateKey from '@/composables/generateKey'
import { computed } from 'vue'

class Node {
	constructor(data = {}) {
		this.parentId = data.parentId ?? undefined
		this.childs = data.childs ?? []
		this.id = data.id ?? generateKey()
		this.value = data.value ?? undefined
		this.placeholder = data.placeholder ?? undefined
		this.name = data.name ?? undefined
	}
	put() {
		this.container[this.id] = this

		if(this.parent && this.index < 0) {
			this.moveTo() // автоматически добавляем в childs родителя
		}
	}

	get level() {
		return computed(() => this.parent ? this.parent.level + 1 : 0)
	}

	// getParent() {
	get parent() {
		return this.parentId && this.container[this.parentId] ? this.container[this.parentId] : false
	}

	// getChilds() {
	get childNodes() {
		let result = []
	
		this.childs.forEach(key => {
			result.push(this.container[key])
		});

		return result
	}

	//getSiblings() {
	get siblings() {
		let result = []

		if(this.parent) {
			let ids = this.parent.childs
			ids.forEach(key => {
				if(key !== this.id) {
					result.push(this.container[key])
				}
			});
		}

		return result
	}

	//getIndex() {
	get index() {
		return this.parent.childs.indexOf(this.id)
	}

	getLowestChilds(maxLevel = null, resultNodes = false) {
		let result = []

		const cycle = cycledNode => {
			if(typeof maxLevel !== 'number' ||
				cycledNode.level < maxLevel) {
				cycledNode.childs.forEach(childId => {
					if(this.container[childId].childs && this.container[childId].childs.length > 0) cycle(this.container[childId])
					else {
						if(resultNodes) result.push(this.container[childId])
						else result.push(childId)
					}
				})
			} else {
				if(resultNodes) result.push(this.container[cycledNode.id])
				else result.push(cycledNode.id)
			}
		} 

		cycle(this)

		return result
	}

	highlight(isHighlighting) {
		if(this.parentId) {
			if(!document.getElementById(this.id)) console.log(this.id, '!!!')
			if(isHighlighting) {
				document.getElementById(this.id).classList.add("highlighted")
				//console.log('highlighted', node.id)
			}
			else {
				document.getElementById(this.id).classList.remove("highlighted")
			}
			this.container[this.parentId].highlight(isHighlighting)
		}
	}

	moveTo(newParentId = null, newIndex = null) {
		// newParentId = null значит что не меняем parentId, двигаем внутри родителя
		if(newParentId) {
			if(this.parent) this.parent.childs.splice(this.index, 1) // можем вызывать moveTo у ноды, у которой еще нет parentId
			this.parentId = newParentId
		}
		if(typeof newIndex !== 'number') newIndex = this.parent.childs.length // просто пушим в конец если индекс не указан
		this.parent.childs.splice(newIndex, 0, this.id)
		return this
	}

	moveChildsTo(newParentId, index = 0) {
		const length = this.childs.length
		for(let i=0; i < length; i++) {
			this.container[this.childs[this.childs.length - 1]].moveTo(newParentId, index)
		}
		return this
	}

	remove(id, key) {
		if(this[key].indexOf(id) >= 0) {
			this[key].splice(this[key].indexOf(id), 1)
			return this
		} else {
			return false
		}
	}

	delete(deep = true) {
		document.querySelectorAll(".highlighted").forEach( highlighted => {
			highlighted.classList.remove("highlighted")
		})

		if(deep && this.childs.length > 0) {
			let length = this.childs.length
			for(let i=0; i < length; i++) {
				//console.log('foreach', length, node.getChilds())
				this.childNodes[0].delete()
			}
		}

		if(this.parent) this.parent.remove(this.id, "childs")

		delete this.container[this.id]
	}

	static getNodesByLevel = (level, items) => {
		let result = []
		for(let key in items) {
			if(items[key].level === level) result.push(key)
		}
	
		return result
	}
}

export { Node }