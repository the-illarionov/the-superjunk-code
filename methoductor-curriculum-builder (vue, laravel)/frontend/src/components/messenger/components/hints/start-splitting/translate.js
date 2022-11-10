import localization from '@/composables/localization'

const messages = {
	en: {
		hint: `
			<p>Start to break the main skill of the course into sub-skills. To do this, use the sentence: "If the student can..., then he can...". </p>
			<p>For example: "If a student can cook ingredients, make a roll, etc., then he knows how to prepare rolls."</p>
			<p>You can add or remove columns: hover over the skill and click on the add icon <i class="las la-plus-circle"></i>.</p>
		`
	},
	ru: {
		hint: `
			<p>Начинайте дробить главное умение курса на подумения. Для этого используйте предложение: «Если ученик умеет..., значит он умеет ...».</p>
			<p>Например: «Если ученик умеет готовить ингредиенты, закатывать ролл и т.д., значит он умеет готовить роллы».</p>
			<p>Вы можете добавлять или удалять колонки: наведите на умение и нажмите на иконку добавления <i class="las la-plus-circle"></i>.</p>
		`
	},
}

const translate = localization(messages)

export default translate