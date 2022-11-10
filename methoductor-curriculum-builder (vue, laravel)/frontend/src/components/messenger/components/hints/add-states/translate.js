import localization from '@/composables/localization'

const messages = {
	en: {
		hint: `
			<p>Next, select the state of the student in each lesson.</p>
			<p>The student's state is his thoughts and emotions during the lesson. The correct selection of states affects the engagement and completion rate of the course.</p>
			<p>Also, the state affects the lesson template.</p>
		`,
	},
	ru: {
		hint: `
			<p>Далее выберите состояние ученика на каждом уроке.</p>
			<p>Состояние ученика — это его мысли и эмоции во время урока. Правильный подбор состояний влияет на вовлечение и процент завершения курса.</p>
			<p>Кроме того, состояние влияет на шаблон урока.</p>
		`,
	},
}

const translate = localization(messages)

export default translate