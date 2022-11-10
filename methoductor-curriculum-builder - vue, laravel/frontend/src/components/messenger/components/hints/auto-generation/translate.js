import localization from '@/composables/localization'

const messages = {
	en: {
		'hint' : `
			<p>You can trust us to create lessons and states.</p>
			<p>So far, the algorithm is quite simple, but soon we will connect the AI and you will get an individually designed course structure with states.</p>
		`,
	},
	ru: {
		'hint' : `
			<p>Вы можете доверить нам создание уроков и состояний.</p>
			<p>Пока что алгоритм достаточно простой, но скоро мы подключим ИИ и вы будете получать индивидуально проработанную структуру курса с состояниями.</p>
		`,
	},
}

const translate = localization(messages)

export default translate