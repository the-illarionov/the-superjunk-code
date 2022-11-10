import localization from '@/composables/localization'

const messages = {
	en: {
		'header': 'Forbidden',
		text: "You don't have the right to access this page.",
		main: 'Go to main page',
	},
	ru: {
		'header': 'Доступ запрещён',
		text: 'Вы не имеет прав на доступ к этой странице.',
		main: 'На главную страницу',
	},
}

const translate = localization(messages)

export default translate