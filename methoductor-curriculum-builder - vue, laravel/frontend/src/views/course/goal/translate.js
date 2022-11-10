import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		description: "You can skip this step, but then we won't be able to generate the course structure for you",
		...common('en')
	},
	ru: {
		description: `
			Мб тут варнинг даже Можно пропустить но тип тогда цель хорошо не будета это плохло потому что.`,
		...common('ru')
	},
}

const translate = localization(messages)

export default translate