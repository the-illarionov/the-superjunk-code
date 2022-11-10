import localization from '@/composables/localization'
import common from '@/localization/common'

const messages = {
	en: {
		enter_name: 'Type title',

		...common('en')
	},
	ru: {
		enter_name: 'Введите название',

		...common('ru')
	},
}

const translate = localization(messages)

export default translate