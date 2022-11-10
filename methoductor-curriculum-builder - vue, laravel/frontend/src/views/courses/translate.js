import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		start: "Where do you want to start?",
		info: "Инфо: ",
		name: "Имя: ",
		mail: "Почта: ",
		send_nudes: "Пишите мне о новых важных обновлениях",
		courses: "Your courses: ",
		add_course: "Добавлю курс",
		create_header: "Create course",
		create_desc: "I want to learn how to create courses",
		modify_header: "I have my own course",
		modify_desc: "I want to increase completion rate.",
		choose: "Choose",
		create: "Create",
		development: `<p>We are sorry, but designing the course structure is still in development.</p>`,
		
		...common('en')
	},
	ru: {
		start: "С чего начнем?",
		info: "Инфо: ",
		name: "Имя: ",
		mail: "Почта: ",
		send_nudes: "Пишите мне о новых важных обновлениях",
		courses: "Ваши курсы: ",
		add_course: "Добавлю курс",
		create_header: "Создать курс",
		create_desc: "Хочу научиться создавать курсы",
		modify_header: "У меня есть свой курс",
		modify_desc: "Хочу повысить дохождение",
		choose: "Выбрать",
		create: "Создать",
		development: `<p>К сожалению, создание структуры курса ещё в разработке.</p>`,
		
		...common('ru')
	},
}

const translate = localization(messages)

export default translate