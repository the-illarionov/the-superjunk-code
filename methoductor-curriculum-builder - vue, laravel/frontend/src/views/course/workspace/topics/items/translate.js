import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		...common('en'),
		can: 'Can',
		knows: 'Knows',
		add_microskill: 'Add microskill',
		connected_lessons_begin: 'Used in',
		connected_lessons_end: 'lessons',
		connected_lessons_end_single: 'lesson',
	},
	ru: {
		can: 'Умеет',
		knows: 'Знает',
		connected_lessons_begin: 'Есть в',
		connected_lessons_end: 'уроках',
		connected_lessons_end_single: 'уроке',
		...common('ru')
	},
}

const translate = localization(messages)

export default translate