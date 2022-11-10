import localization from '@/composables/localization'

const messages = {
	en: {
		click_to_edit: 'Type text',
	},
	ru: {
		click_to_edit: 'Введите текст',
	},
}

const translate = localization(messages)

export default translate