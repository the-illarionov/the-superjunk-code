import generateStep from '@/store/common/generateLessonStep'

import localization from "@/composables/localization"
import messages from '@/localization/values/lesson-templates'



const translate = localization(messages)

export default [
	{
		text: translate("first.name"),
		value: 'first_lesson',
		html: translate("first.html"),
		disabled: false,
		map: {
			type: "new_theme",
			time: "beginning",
			solo: "no",
		},
		structure: [
			{
				id: 'task-development',
				title_menu: translate("first.structure.task_development.title_menu"),
				title_page: translate("first.structure.task_development.title_page"),
				title_result: translate("first.structure.task_development.title_result"),
				non_editable: true,
				steps: [
					generateStep({
						name: translate("first.structure.task_development.steps.first.name"),
						placeholder_description: translate("first.structure.task_development.steps.first.placeholder_description"),
						name_result: translate("first.structure.task_development.steps.first.name_result"),
						device: ["service","task_concept"],
						non_editable: true,
					}),
					generateStep({
						name: translate("first.structure.task_development.steps.second.name"),
						placeholder_description: translate("first.structure.task_development.steps.second.placeholder_description"),
						name_result: translate("first.structure.task_development.steps.second.name_result"),
						device: ["service","task_together"],
						non_editable: true,
					}),
					generateStep({
						name: translate("first.structure.task_development.steps.third.name"),
						placeholder_description: translate("first.structure.task_development.steps.third.placeholder_description"),
						name_result: translate("first.structure.task_development.steps.third.name_result"),
						device: ["service","task_solo"],
						non_editable: true,
					}),
				]
			},
			{
				id: 'show-demo',
				title_menu: translate("first.structure.show_demo.title_menu"),
				title_page: translate("first.structure.show_demo.title_page"),
				title_result: translate("first.structure.show_demo.title_result"),
				non_editable: true,
				steps: [
					generateStep({
						placeholder_description: translate("first.structure.show_demo.steps.first.placeholder_description"),
						device: ["service","demo"],
						non_editable: true,
						no_name: true,
					}),
				]
			},
			{
				id: 'together',
				title_menu: translate("first.structure.together.title_menu"),
				title_page: translate("first.structure.together.title_page"),
				title_result: translate("first.structure.together.title_result"),
				device: ['service','practice_together'],
				steps: [
					generateStep({
						device: ["theory","repeat"],
					}),
					generateStep({
						device: ["theory","c_from_problem"],
					}),
					generateStep({
						device: ["theory","repeat"],
					}),
					generateStep(),
				]
			},
			{
				id: 'solo',
				title_menu: translate("first.structure.solo.title_menu"),
				title_page: translate("first.structure.solo.title_page"),
				title_result: translate("first.structure.solo.title_result"),
				device: ['service','practice_solo'],
				steps: [
					generateStep({
						device: ["practice","finish"],
					}),
					generateStep(),
				]
			},
			{
				id: 'end',
				title_menu: translate("first.structure.end.title_menu"),
				title_page: translate("first.structure.end.title_page"),
				title_result: translate("first.structure.end.title_result"),
				non_editable: true,
				steps: [
					generateStep({
						device: ['service','finish'],
						non_editable: true,
						no_name: true,
					}),
				]
			},
		]
	},
	{
		text: translate("dis1.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis2.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis3.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis4.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis5.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis6.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis7.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis8.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis9.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis10.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis11.name"),
		value: 'q',
		disabled: true,
	},
	{
		text: translate("dis12.name"),
		value: 'q',
		disabled: true,
	},
]