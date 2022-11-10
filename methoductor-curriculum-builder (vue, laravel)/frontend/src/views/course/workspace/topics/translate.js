import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		skill: "Main skill",
		modules: "Sub-skills",
		topics: "Sub-skills",
		subtopics: "Microskills",
		header_placeholder: 'Type header',
		main: "cook the rolls (example)",

		module_1: "cook the ingredients (example)",
		module_2: "make a roll (example)",
		module_3: "cook and bake (example)",
		topic_1: "cook rice (example)",
		topic_2: "slice fish (example)",
		topic_3: "slice vegetables (example)",
		
		subtopic_1: "choose rice",
		subtopic_2: "rinse the rice",
		subtopic_3: "wash rice",
		...common('en')
	},
	ru: {
		skill: "Главное умение",
		modules: "Подумения",
		topics: "Подумения",
		subtopics: "Микроумения",
		header_placeholder: 'Введите заголовок',

		main: "готовить роллы (пример)",

		module_1: "готовить ингредиенты (пример)",
		module_2: "закатывать ролл (пример)",
		module_3: "жарить и запекать (пример)",
		topic_1: "готовить рис (пример)",
		topic_2: "нарезать рыбу (пример)",
		topic_3: "нарезать овощи (пример)",
		
		subtopic_1: "выбирать рис",
		subtopic_2: "промывать рис",
		subtopic_3: "варить рис",
		...common('ru')
	},
}

const translate = localization(messages)

export default translate