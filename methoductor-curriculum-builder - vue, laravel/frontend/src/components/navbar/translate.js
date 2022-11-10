import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		functionality: "Features",
        methodist: "To instructional designer",
        tariffs: "Pricing",
        about: "How does engagement work?",
        demo: "Try a demo",
        login: "Login",
        signin: "Sign Up",
        main: "Main page",
        create_course: "Create a course",
        logout: 'Logout',
		...common('en')
	},
	ru: {
		demo: "Попробовать демо",
        functionality: "Возможности",
        methodist: "Методисту",
        tariffs: "Тарифы",
        about: "Как мы создаём вовлечение?",
        login: "Вход",
        signin: "Регистрация",
        language: 'Язык',
        main: "На главную",
        create_course: "Создать курс",
        logout: 'Выйти',
		...common('ru')
	},
}

const translate = localization(messages)

export default translate