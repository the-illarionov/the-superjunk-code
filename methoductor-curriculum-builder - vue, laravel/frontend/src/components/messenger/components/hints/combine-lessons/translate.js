import localization from '@/composables/localization'

const messages = {
	en: {
		'hint' : `
			<p>Combine lessons in small series.</p>
			<p>On what principle-decide for yourself. For example, the number of lessons per week. Or one topic, one task, etc.</p>
			<p>We recommend a series of 3 lessons: in the first two, the theory is studied. In the third, the topics covered are fixed on independent practice.</p>
		`,
	},
	ru: {
		'hint' : `
			<p>Объединяйте уроки в небольшие серии.</p>
			<p>По какому принципу — решайте сами. Например, количество уроков в неделю. Или одна тема, одно задание и т.д.</p>
			<p>Мы рекомендуем серии из 3 уроков: на первых двух изучается теория, на третьем пройденные темы закрепляются на самостоятельной практике.</p>
		`,
	},
}

const translate = localization(messages)

export default translate