

import localization from "@/composables/localization"
import messages from '@/localization/values/course-type'


const translate = localization(messages)

export default [
	{
		value: "dop",
		text: translate("dop.header"),
		values: [
			{
				value: "dop_cgi",
				text: translate("dop.values.dop_cgi"),
			},
			{
				value: "dop_programming",
				text: translate("dop.values.dop_programming"),
				disabled: true,
			},
			{
				value: "_",
				text: translate("dop.values.languages"),
				disabled: true,
			},
			{
				value: "_",
				text: translate("dop.values.finances"),
				disabled: true,
			},
			{
				value: "_",
				text: translate("dop.values.marketing"),
				disabled: true,
			},
			{
				value: "_",
				text: translate("dop.values.art"),
				disabled: true,
			},
			{
				value: "_",
				text: translate("dop.values.dance"),
				disabled: true,
			},
			{
				value: "_",
				text: translate("dop.values.music"),
				disabled: true,
			},
		]
	},
	{
		value: "corp",
		text: translate("corp.header"),
		development: true,
	},
	{
		value: "_",
		text: translate("university.header"),
		development: true,
	},
	{
		value: "_",
		text: translate("school.header"),
		development: true,
	},
	{
		value: "_",
		text: translate("kindergarten.header"),
		development: true,
	},
]
/*
const options = [
			{
				text: "Дополнительный",
				buttons: [
					{
						text: "Иностранные языки",
						
						disabled: true,
					},
					{
						text: "Программирование",
						value: "dop_programming",
						disabled: true,
					},
					{
						text: "Компьютерная графика",
						value: "dop_cgi",
					},
					{
						text: "Маркетинг",
						disabled: true,
					},
					{
						text: "Танцы",
						disabled: true,
					},
					{
						text: "Музыка",
						disabled: true,
					},
				]
			},

			{
				text: "Корпоративный",
				buttons: [
					{
						text: "Познакомить нового сотрудника с компанией",
						disabled: true,
					},
					{
						text: "Научить сотрудника новому практическому навыку",
						value: "corp_practice",
						disabled: true,
					},
					{
						text: "Научить владению стандартами",
						disabled: true,
					},
				]
			},

			{
				text: "Для университета",
				buttons: [
					{
						text: "Технический",
						disabled: true,
					},
					{
						text: "Медицинский",
						disabled: true,
					},
					{
						text: "Экономический",
						disabled: true,
					},
					{
						text: "Юридический",
						disabled: true,
					},
					{
						text: "Информационные технологии",
						disabled: true,
					},
					{
						text: "Гуманитарный",
						disabled: true,
					},
				]
			},

			{
				text: "Для школы",
				buttons: [
					{
						text: "Математика",
						disabled: true,
					},
					{
						text: "Геометрия",
						disabled: true,
					},
					{
						text: "Общественно-научный",
						disabled: true,
					},
					{
						text: "Гуманитарный",
						disabled: true,
					},
					{
						text: "Спортивный",
						disabled: true,
					},
					{
						text: "Искусство",
						disabled: true,
					},
				]
			},

			{
				text: "Для детского сада",
				buttons: [
					{
						text: "Физическое развитие",
						disabled: true,
					},
					{
						text: "Познавательное развитие",
						disabled: true,
					},
					{
						text: "Речевое развитие",
						disabled: true,
					},
					{
						text: "Художественно-эстетическое развитие",
						disabled: true,
					}
				]
			},
		]
*/