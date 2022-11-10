import localization from '@/composables/localization'

const messages = {
	en: {
		lessons: `
			<p>Under development, the approximate launch time: the beginning of April.</p>
		`,
		lesson: `
			<p>Under development, the approximate launch time: the beginning of June.</p>
		`,
		
	},
	ru: {
		lessons: `
			<p>В разработке, приблизительное время запуска: начало апреля.</p>
		`,
		lesson: `
			<p>В разработке, приблизительное время запуска: начало июня.</p>
		`,
	},
}

const translate = localization(messages)

export default translate