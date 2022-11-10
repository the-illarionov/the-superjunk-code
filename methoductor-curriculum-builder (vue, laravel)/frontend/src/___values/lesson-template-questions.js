import localization from "@/composables/localization"
import messages from '@/localization/values/lesson-template-questions'



const translate = localization(messages)

export default [
	{
		text: translate("what.question"),
		value: 'type',
		values: [
			{
				text: translate("what.answers.learn"),
				disabled: false,
				value: "new_theme",
			},
			{
				text: translate("what.answers.repeat"),
				disabled: true,
				value: "",
			},
		],
	},
	{
		text: translate("when.question"),
		value: 'time',
		values: [
			{
				text: translate("when.answers.beginning"),
				disabled: false,
				value: "beginning",
			},
			{
				text: translate("when.answers.middle"),
				disabled: true,
				value: "",
			},
			{
				text: translate("when.answers.end"),
				disabled: true,
				value: "",
			},
		],
	},
	{
		text: translate("self.question"),
		value: 'solo',
		values: [
			{
				text: translate("self.answers.yes"),
				disabled: true,
				value: "",
			},
			{
				text: translate("self.answers.no"),
				disabled: false,
				value: "no",
			},
		],
	},
]