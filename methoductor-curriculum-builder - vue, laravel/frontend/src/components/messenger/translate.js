import localization from '@/composables/localization'
import common from '@/localization/common'

const messages = {
	en: {
		...common('en')
	},
	ru: {
		...common('ru')
	},
}

const translate = localization(messages)

export default translate