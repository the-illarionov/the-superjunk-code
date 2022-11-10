import common from '@/localization/common'
import localization from '@/composables/localization'
const messages = {
    en: {
        many: "too many",
		...common('en')
    },
    ru: {
        many: "слишком много",
		...common('ru')
    },
}

const translate = localization(messages)

export default translate