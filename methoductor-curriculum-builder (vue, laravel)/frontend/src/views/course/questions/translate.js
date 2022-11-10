import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		description: "You can skip this step, but then we won't be able to generate the course structure for you",
		...common('en')
	},
	ru: {
		description: `
			Вы можете пропустить этот шаг, но тогда мы не сгенерируем вам структуру курса. Здесь кароч должно быть объединено всё - и вопросы формата и шаблона и разбивка по модулям`,
		...common('ru')
	},
}

const translate = localization(messages)

export default translate