import common from '@/localization/common'
import localization from '@/composables/localization'

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