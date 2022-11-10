import { reactive } from 'vue'
// import generateKey from '@/composables/generateKey'
import course_state from '@/store/course'
import api from '@/api'

function Node(data) {
	const node = reactive({
		// обязательные ключи
		/*
		parentId: data.parentId,
		type: data.type,
		childs: data.childs ?? [],
		id: data.id ?? generateKey(),
		level: computed(() => {
			return node.getParent() ? node.getParent().level + 1 : 0
		}),

		highlight(isHighlighting) {
			if(node.parentId) {
				if(isHighlighting) {
					document.getElementById(node.id).classList.add("highlighted")
					//console.log('highlighted', node.id)
				}
				else {
					document.getElementById(node.id).classList.remove("highlighted")
				}
				data.container[node.parentId].highlight(isHighlighting)
				
			}
		},
		
		getParent() {
			return node.parentId && data.container[node.parentId] ? data.container[node.parentId] : false
		},
		getChilds() {
			let result = []
		
			node.childs.forEach(key => {
				result.push(data.container[key])
			});

			return result
		},
		getLowestChilds(maxLevel = null, resultNodes = false) {
			let result = []
			
			function cycle(cycledNode) {
				//console.log(cycledNode.id)
				if(typeof maxLevel !== 'number' ||
					cycledNode.level < maxLevel) {
					//console.log(cycledNode.level, maxLevel)

					//console.log('cycledNode:', cycledNode)

					cycledNode.childs.forEach(childId => {

						if(data.container[childId].childs && data.container[childId].childs.length > 0) cycle(data.container[childId])
						else {
							//console.log(childId)
							if(resultNodes) result.push(data.container[childId])
							else result.push(childId)
						}
					})
				} else {
					if(resultNodes) result.push(data.container[cycledNode.id])
					else result.push(cycledNode.id)
				}
			}

			cycle(node)

			return result
		},
		getSiblings() {
			let result = []

			if(node.getParent()) {
				let ids = node.getParent().childs
				ids.forEach(key => {
					if(key !== node.id) {
						result.push(data.container[key])
					}
				});
			}

			return result
		},
		getIndex() {
			return node.getParent().childs.indexOf(node.id)
		},



		moveTo(newParentId = null, newIndex = null) {
			// newParentId = null значит что не меняем parentId, двигаем внутри родителя
			if(newParentId) {
				if(node.getParent()) node.getParent().childs.splice(node.getIndex(), 1) // можем вызывать moveTo у ноды, у которой еще нет parentId
				node.parentId = newParentId
			}
			if(typeof newIndex !== 'number') newIndex = node.getParent().childs.length // просто пушим в конец если индекс не указан
			node.getParent().childs.splice(newIndex, 0, node.id)
			return node
		},
		moveChildsTo(newParentId, index = 0, key = "childs") {
			const length = node[key].length
			for(let i=0; i < length; i++) {
				data.container[node[key][node[key].length - 1]].moveTo(newParentId, index)
				//console.log(key)
			}
			return node
		},
		remove(id, key) {
			if(node[key].indexOf(id) >= 0) {
				node[key].splice(node[key].indexOf(id), 1)
				return node
			} else {
				return false
			}
		},
		*/
		delete(deep = true) {
			/*
			document.querySelectorAll(".highlighted").forEach( highlighted => {
				highlighted.classList.remove("highlighted")
			})
			*/
			
			switch(node.type) {
				/*
				case 'skill':
					course_state.topics.items[node.topic_id].remove(node.id, 'skills')

					for(let i = 0; i < node.steps.length; i++) {
						const stepId = node.steps[i]

						if(course_state.lesson.items[stepId]) {
							const skillIndex = course_state.lesson.items[stepId].skills.indexOf(node.id)

							course_state.lesson.items[stepId].skills.splice(skillIndex, 1)
						}
					}
				break;
				
				
				case 'lesson':
					if(node.plan_id && course_state.lesson.items[node.plan_id]) {
						course_state.lesson.items[node.plan_id].delete()
					}

					if(node.plan_id && !course_state.is_demo) api.delete('lesson-plans/' + node.plan_id.replace("lesson_plan_",""))
					
				break;

				
				case 'topic':
					var length = node.skills.length
					for(let i = 0; i < length; i++) {
						course_state.lessons.items[node.skills[0]].delete()
					}
				break;
				

				case 'lesson_plan':
					if(course_state.lesson.selected_id === node.id) {
						course_state.lesson.loaded = false
						course_state.lesson.selected_id = null
					}
					
				break;
				*/

				case 'lesson_step':
					node.skills.forEach( skillId => {
						const index = course_state.lessons.items[skillId].steps.indexOf(node.id)
						course_state.lessons.items[skillId].steps.splice(index, 1)
					})
				break;
			}
			
			/*
			if(deep && node.childs.length > 0) {
				let length = node.childs.length
				for(let i=0; i < length; i++) {
					//console.log('foreach', length, node.getChilds())
					node.getChilds()[0].delete()
				}
			}
			if(node.getParent()) node.getParent().remove(node.id, "childs")
			//console.log('delete', node.id)
			delete data.container[node.id]
			*/
		},


		/*
		// lesson
		getState() {
			return course_state.states.items[node.state_id]
		},
		getIndexInModule() {
			return node.getParent().getParent().getLowestChilds(3).indexOf(node.id)
		},
		



		// skill
		linkToTopic(topicId) {
			node.topic_id = topicId
			course_state.topics.items[topicId].skills.push(node.id)

			return node
		},
		getTopic() {
			return course_state.topics.items[node.topic_id]
		},
		



		// lesson_plan
		linkToLesson(lessonId) {
			node.lesson_id = lessonId
			course_state.lessons.items[lessonId].plan_id = node.id
		},
		getLesson() {
			return course_state.lessons.items[node.lesson_id]
		}
		*/
	})



	// необязательные ключи
	switch(node.type) {
		/*
		case 'topic':
			node.show_skill = data.show_skill ?? true
			node.skills = data.skills ?? []
		break;
		
		case 'lesson':
			node.plan_id = data.plan_id
			node.state_id = data.state_id
		break;
		

		case 'skill':
			node.topic_id = data.topic_id
			node.steps = data.steps ?? []
		break;
		

		case 'lesson_plan':
			node.linkToLesson(data.lesson_id)
		break;
		*/

		case 'lesson_step':
			node.skills = data.skills ?? []
		break;
	}

	/*
	if(data.value) node.value = data.value
	if(data.placeholder) node.placeholder = data.placeholder
	if(data.name) node.name = data.name



	// действия при инициализации
	data.container[node.id] = node
	if(node.getParent() && node.getParent().childs.indexOf(node.id) < 0) {
		node.moveTo() // автоматически добавляем в childs родителя
	}
	*/

	return node
}
/*
Node.getNodesByLevel = (level, items) => {
	let result = []
	for(let key in items) {
		if(items[key].level === level) result.push(key)
	}

	return result
}
*/
export default Node








/*
вотч для lessonstep для приёмов
	function addWatchSimple() {
		return watch(step.devices.simple,() => {
			unwatchComplex()
			step.devices.complex.length = 0

			for(let category_key in devices.complex.values) {
				let category = devices.complex.values[category_key]

				for(let device_key in category.values) {
					let device = category.values[device_key]

					if(isEqual(sortBy(device.map), sortBy(step.devices.simple))) { // здесь можно будет переписать чтобы порядок учитывался
						step.devices.complex[0] = "complex"
						step.devices.complex[1] = category_key
						step.devices.complex[2] = device_key
					}
					
				}
			}

			unwatchComplex = addWatchComplex()

			

		}, { deep: true })
	}

	function addWatchComplex() {
		return watch(step.devices.complex, () => {
			if(step.devices.complex[0] && step.devices.complex[1] && step.devices.complex[2]) {
				step.devices.simple.length = 0

				let device = devices[step.devices.complex[0]].values[step.devices.complex[1]].values[step.devices.complex[2]]

				unwatchSimple()

				device.map.forEach( (item) => {
					step.devices.simple.push(item)
				})
				
				unwatchSimple = addWatchSimple()

				
			}
		}, { deep: true })
	}

	let unwatchSimple = addWatchSimple()
	let unwatchComplex = addWatchComplex()


	*/