import { createI18n } from 'vue-i18n'
import global from "@/store/application"

import locale from '@/composables/locale'
const { getLocale } = locale()

export default function(messages) {
    const i18n = createI18n({
        locale: getLocale(),
        fallbackLocale: global.fallback,
        silentTranslationWarn: true,
        silentFallbackWarn: true,
        warnHtmlInMessage: 'off',
        messages
    })

    function translate(key) {
        return i18n.global.t(key)
    }

	return translate
}