import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		click_to_edit: `
			Hover over any lesson and click on the edit icon in the upper-right corner <i class="las la-pen"></i> to open it.
		`,
		...common('en')
	},
	ru: {
		click_to_edit: `
			Наведите на этап урока и нажмите на иконку редактирования в правом верхнем углу <i class="las la-pen"></i>, чтобы открыть его.
		`,
		lesson_first: `
			Сначала начните редактировать урок.
		`,
		...common('ru')
	},
}

const translate = localization(messages)

export default translate