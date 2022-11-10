//import state from '@/store/course'
import translate from './translate'

import { createLessonTemplate } from '@/store/classes/LessonTemplate'
import { createLessonSection } from '@/store/classes/LessonTemplate/Section'
import { createLessonStep } from '@/store/classes/LessonTemplate/Step'

export default {
	items: {},
	fill() {
		createLessonTemplate({
			id: "first_lesson",
			name: "template name",
			description: "tempalte description",
			states_ids: ["its_working"],
		})

			createLessonSection({
				id: "first_lesson_begin",
				name: "Beginning",
				subtype: "begin",
				template_id: "first_lesson",
				isCopy: false,
				childs: [
					createLessonStep({
						device_id: "xz",
						template_id: "first_lesson",
						parent_id: "first_lesson_begin",
						isCopy: false,
					}).id,
				]
			})

			createLessonSection({
				id: "first_lesson_task",
				subtype: "task",
				template_id: "first_lesson",
				order: 1,
				description: 'description',
				value: "",
				examples: {
					good: [
						{
							text: translate('good.text'),
							explain: translate('good.explain'),
						}
					],
					bad: [
						{
							text: translate('bad.text'),
							explain: translate('bad.explain'),
						}
					],
				},
				childs: [
					createLessonStep({
						id: 'tpl_first_lesson_task_together',
						device_id: "task_together",
						template_id: "first_lesson",
						parent_id: "tpl_first_lesson_task",
						childs: [
							createLessonStep({
								device_id: "task_together_xz",
								template_id: "first_lesson",
								parent_id: "tpl_first_lesson_task_together",
							}).id,
							createLessonStep({
								device_id: "task_together_xz",
								template_id: "first_lesson",
								parent_id: "tpl_first_lesson_task_together",
							}).id
						]
					}).id,
					createLessonStep({
						id: 'tpl_first_lesson_task_independence',
						device_id: "task_independence",
						template_id: "first_lesson",
						parent_id: "tpl_first_lesson_task",
						childs: [
							createLessonStep({
								device_id: "task_independence_xz",
								template_id: "first_lesson",
								parent_id: "tpl_first_lesson_task_independence",
							}).id
						]
					}).id,
				]
			})
			/*
			createLessonSection({
				id: "tpl_first_lesson_task_2",
				subtype: "task",
				template_id: "first_lesson",
				order: 2,
				childs: [
					createLessonStep({
						id: 'tpl_first_lesson_task_2_independence',
						device_id: "task_independence",
						template_id: "first_lesson",
						parent_id: "tpl_first_lesson_task_2",
						childs: [
							createLessonStep({
								device_id: "task_independence_xz",
								template_id: "first_lesson",
								parent_id: "tpl_first_lesson_task_2_independence",
							}).id
						]
					}).id,
				]
			})
			*/

			createLessonSection({
				id: "tpl_first_lesson_end",
				name: "Ending",
				subtype: "end",
				template_id: "first_lesson",
				childs: [
					createLessonStep({
						device_id: "xz2",
						template_id: "first_lesson",
						parent_id: "tpl_first_lesson_begin",
					}).id,
				]
			})
	},
	reset() {
		// state.lesson_templates.items = {}	
	},
}