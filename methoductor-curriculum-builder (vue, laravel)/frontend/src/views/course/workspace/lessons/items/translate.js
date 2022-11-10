import localization from '@/composables/localization'
import common from '@/localization/common'

const messages = {
	en: {
		module: 'module',
		module_placeholder: "Type module's name",
		are_you_sure: 'Are you sure you want to delete a module?',
		add_sprint: 'Add a series of lessons',
		sprint_placeholder: 'Опишите эту серию: чем объединены уроки, что вы будете изучать?',
		lessons: 'Lessons amount:',
		series: 'series',
		lesson_placeholder: 'Type lesson name',
		lesson: 'lesson',
		lesson_blank: 'Drag a micro-skill here',

		connected_steps_begin: 'Used in',
		connected_steps_end: 'steps',
		connected_steps_end_single: 'step',

		state_not_chosen: 'State is not selected',
		student_state: 'Student state:',

		'sprint_hint' : `
			<p>Группируйте уроки в серии, объединённые одной темой.<br />
			Сгруппированный материал усваивается лучше, чем просто набор разрозненных уроков.<br />
			Мы рекомендуем серии из 3 уроков: на первых двух изучается теория, на третьем пройденные темы закрепляются на самостоятельной практике.</p>
		`,

		...common('en')
	},
	ru: {
		module: 'модуль',
		module_placeholder: 'Введите название модуля',
		are_you_sure: 'Вы точно хотите удалить модуль?',
		add_sprint: 'Добавить серию уроков',
		sprint_placeholder: 'Опишите эту серию: чем объединены уроки, что вы будете изучать?',
		lessons: 'Всего уроков:',
		series: 'серия уроков',
		lesson_placeholder: 'Введите название урока',
		lesson: 'урок',
		lesson_blank: 'Перетащите микроумение сюда',

		connected_steps_begin: 'Есть в',
		connected_steps_end: 'шагах',
		connected_steps_end_single: 'шаге',

		state_not_chosen: 'Состояние не выбрано',
		student_state: 'Состояние ученика:',

		'sprint_hint' : `
			<p>Группируйте уроки в серии, объединённые одной темой.<br />
			Сгруппированный материал усваивается лучше, чем просто набор разрозненных уроков.<br />
			Мы рекомендуем серии из 3 уроков: на первых двух изучается теория, на третьем пройденные темы закрепляются на самостоятельной практике.</p>
		`,

		...common('ru')
	},
}

const translate = localization(messages)

export default translate