import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		subtopics_lesson: 'main_gifs/en/subtopics_lessons.png',
		subtopics_path: 'main_gifs/en/subtopics_path.png',

		create_lessons: "Create lessons...",
		create_lessons_desc: `
			<p>Drag and drop subtopics and combine them into lessons.</p>
			<p>We will tell you the best place for each of your subtopics.</p>
		`,

		path: "2.1. And design a student's emotional experience",
		path_desc: `
			<p>Immerse the student in different emotional states in each lesson.</p>
			<p>We will offer you the most appropriate state chain, but you can change it as you want.</p>
		`,
		add_module: 'Add module',
		auto_make_lessons: "Create lessons automatically",
		confirm_auto_lessons: 'If you have already added skills, they will be removed. Continue?',
		practice_lesson: 'Independent practice',
		auto_make_lessons_desc: `
			<p>Every skill that has at least one micro-skill, we will turn into a lesson.<br />
			And we will make every third lesson an independent work, consolidating the skills from the previous two lessons.</p>
		`,
		auto_make_states: 'Bind states automatically',
		module_hint: `
			The module is a big new chapter inside your course. Create it only when necessary. For example, if you have more than 15 lessons.<br />
			In all other cases, we recommend creating a series of lessons.
		`,
		...common('en')
	},
	ru: {
		subtopics_lesson: 'main_gifs/ru/subtopics_lessons.png',
		subtopics_path: 'main_gifs/ru/subtopics_path.png',

		create_lessons: "Создавайте уроки...",
		create_lessons_desc: `
			<p>Перетаскивайте подтемы и объединяйте их в уроки.</p>
			<p>Мы подскажем лучшее место для каждой вашей подтемы.</p>
		`,

		path: "2.1. И проектируйте эмоциональный опыт ученика",
		path_desc: `
			<p>Погружайте ученика в разные эмоциональные состояния на каждом уроке.</p>
			<p>Мы предложим вам наиболее подходящую цепочку состояний, но вы сможете изменить её как захотите.</p>
		`,
		add_module: 'Добавить модуль',
		auto_make_lessons: "Создать уроки автоматически",
		confirm_auto_make_lessons: 'Если вы уже добавляли умения, то они будут удалены. Продолжить?',
		practice_lesson: 'Самостоятельная практика',
		auto_make_lessons_desc: `
			<p>Каждое умение, в котором есть хотя бы одно микроумение, мы превратим в урок.<br />
			И сделаем каждый третий урок самостоятельной работой, закрепляющей умения из двух предыдущих уроков.</p>
		`,
		auto_make_states: 'Привязать состояния автоматически',
		module_hint: `
			Модуль &mdash; это большая новая глава внутри вашего курса. Создавайте его только когда необходимо. Например, если у вас больше 15 уроков.<br />
			В остальных случаях мы рекомендуем создавать серии уроков.
		`,
		...common('ru')
	},
}

const translate = localization(messages)

export default translate

