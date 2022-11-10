import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		add_step: 'Add step',
		section_placeholder: "Type the lesson's part name",
		step_placeholder: "Type the step's name",
		step: 'step',
		check_skills: 'Mark the skills that are being learned in this step:',
		add_skills: 'Add skills to the lesson to mark those that are learned in this step.',
		...common('en')
	},
	ru: {
		add_step: 'Добавить шаг',
		section_placeholder: 'Введите название части урока',
		step_placeholder: 'Введите название шага',
		step: 'шаг',
		check_skills: 'Отметьте умения, которые изучаются на этом шаге:',
		add_skills: 'Добавьте умения в урок, чтобы отмечать те, которые изучаются на этом шаге.',
		...common('ru')
	},
}

const translate = localization(messages)

export default translate