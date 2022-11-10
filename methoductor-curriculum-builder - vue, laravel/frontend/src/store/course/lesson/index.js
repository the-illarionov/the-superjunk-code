import { cloneDeep } from "lodash"

import state from '@/store/course'
import loader from "@/store/loader"
import api from '@/api'
import router from '@/router/index'

import { createLessonPlan } from '@/store/classes/nodes/LessonPlan'
import { createLessonSection } from '@/store/classes/LessonTemplate/Section'
import { createLessonStep } from '@/store/classes/LessonTemplate/Step'

export default {
	expanded: false,
	loaded: false,
	selected_id: null,
	items: {},
	reset() {
		state.lesson.expanded = false
		state.lesson.loaded = false
		state.lesson.selected_id = null
		state.lesson.items = {}
	},

	open(id) {
		if(state.is_demo ) {
			state.lesson.selected_id = id
			state.lesson.loaded = true

			setTimeout(() => {
				loader.workspace.lesson = false
			}, 750)
		} else {
			console.log('open plan')

			const lessonPlanId = id.replace("lesson_plan_","")

			api.get('lesson-plans/' + lessonPlanId).then( response => {
				if(response.data.structure) {
					let structure = JSON.parse(response.data.structure)

					for(let key in structure) {
						let data = structure[key]
						data.container = state.lesson.items
						new Node(data)
					}
				} else {
					state.lesson.reset()

					const lessonPlan = createLessonPlan({
						id: 'lesson_plan_' + response.data.id,
						lesson_id: response.data.lesson_id,
					})

					state.lesson.fill(lessonPlan.id)
				}

				state.lesson.selected_id = id
				state.lesson.loaded = true
				loader.workspace.lesson = false

				/*
				setTimeout(() => {
					state.can_be_saved = true
				}, 700)
				*/

				console.log( state.lesson.items )
			})

			// здесь идет апи запрос и в резолве структура меняется и лоадер убирается - или же игнорится, если после создания сразу пришёл ответ
		}
	},
	create(lesson_id) {
		if(state.is_demo) {	
			const lessonPlan = createLessonPlan({
				lesson_id: lesson_id,
			})

			state.lesson.fill(lessonPlan.id)

			// console.log(state.lesson)

			state.lesson.open(lessonPlan.id)
		} else {
			console.log('create plan')

			api.post('lesson-plans',
			{
				course_id: router.currentRoute.value.params.course_id,
				lesson_id: lesson_id,
			}).then( response => {
				state.lesson.reset()
				// state.can_be_saved = false

				const lessonPlan = createLessonPlan({
					id: 'lesson_plan_' + response.data.id,
					lesson_id: lesson_id,
				})
	
				state.lesson.fill(lessonPlan.id)

				state.lesson.open(lessonPlan.id)
			})
		}
	},
	
	fill(lessonPlan_id) {
		const template_id = state.lesson.items[lessonPlan_id].template_id
		const template = state.lesson_templates.items[template_id]

		for(let key in template.items) {
			const item = cloneDeep(template.items[key])
			item.isCopy = true

			switch(item.type) {
				case 'section':
					item.parent_id = lessonPlan_id
					createLessonSection(item)
				break;

				case 'step':
					createLessonStep(item)
				break;
			}
		}

		console.log('template', template)
		console.log('lesson.items', state.lesson.items)
		/*
		const sectionIntro = new Node({
			type: 'lesson_section',
			parentId: lessonPlan_id,
			container: state.lesson.items,
			name: translate_lesson('section_intro'),
		})

			new Node({
				type: 'lesson_step',
				parentId: sectionIntro.id,
				container: state.lesson.items,
				name: translate_lesson('step_demo'),
			})

			new Node({
				type: 'lesson_step',
				parentId: sectionIntro.id,
				container: state.lesson.items,
				name: translate_lesson('step_analyze'),
			})

		const sectionBegin = new Node({
			type: 'lesson_section',
			parentId: lessonPlan_id,
			container: state.lesson.items,
			name: translate_lesson('section_begin'),
		})

			new Node({
				type: 'lesson_step',
				parentId: sectionBegin.id,
				container: state.lesson.items,
			})

		const sectionEnd = new Node({
			type: 'lesson_section',
			parentId: lessonPlan_id,
			container: state.lesson.items,
			name: translate_lesson('section_end'),
		})

			new Node({
				type: 'lesson_step',
				parentId: sectionEnd.id,
				container: state.lesson.items,
			})
		*/
	},
	
}