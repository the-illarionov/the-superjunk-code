
import localization from "@/composables/localization"
import messages from '@/localization/values/course-format'



const translate = localization(messages)

export default [
	{
		text: {
			course: translate("realtime.text.course"),
			lesson: translate("realtime.text.lesson"),
		},
		value: "sync",
		values: [
			{
				text: translate("c_yes"),
				html: translate("realtime.html.yes"),
				value: 'yes',
				disabled: false,
			},
			{
				text: translate("c_no"),
				html: translate("realtime.html.no"),
				value: 'no',
				disabled: true,
			}
		],
	},
	{
		text: {
			course: translate("interaction.text.course"),
			lesson: translate("interaction.text.lesson"),
		},
		value: "teamwork",
		values: [
			{
				text: translate("c_yes"),
				value: 'yes',
				disabled: false,
				html: translate("interaction.html.yes"),
			},
			{
				text: translate("c_no"),
				value: 'no',
				disabled: true,
				html: translate("interaction.html.no"),
			}
		],
	},
	{
		text: {
			course: translate("homework.text.course"),
			lesson: translate("homework.text.lesson"),
		},
		value: "homework",
		values: [
			{
				text: translate("c_yes"),
				value: 'yes',
				disabled: true,
			},
			{
				text: translate("c_no"),
				value: 'no',
				disabled: false,
			}
		],
	},
]