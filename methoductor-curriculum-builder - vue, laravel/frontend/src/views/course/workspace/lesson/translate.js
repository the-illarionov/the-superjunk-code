import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		click_to_edit: `
			Hover over any lesson and click on the edit icon in the upper-right corner <i class="las la-pen"></i> to open it.
		`,
		add_section: 'Add lesson section',

		section_intro: 'Intro',
		step_demo: 'Demonstration of the result',
		step_analyze: 'Task analysis',
		section_begin: 'Beginning',
		section_end: 'Finish',
		state_not_chosen: 'You did not select the student state in this lesson. Select it so that we can tell you how best to conduct the lesson.',
		student_state: 'The state of the student in this lesson:',
		...common('en')
	},
	ru: {
		click_to_edit: `
			Наведите на любой урок и нажмите на иконку редактирования в правом верхнем углу <i class="las la-pen"></i>, чтобы открыть его.
		`,
		add_section: 'Добавить часть урока',

		section_intro: 'Вводная',
		step_demo: 'Демонстрация результата',
		step_analyze: 'Анализ задачи',
		section_begin: 'Начало',
		section_end: 'Завершение',
		state_not_chosen: 'Вы не выбрали состояние ученика на этом уроке. Выберите его, чтобы мы подсказали, как лучше провести урок.',
		student_state: 'Состояние ученика на этом уроке:',
		...common('ru')
	},
}

const translate = localization(messages)

export default translate