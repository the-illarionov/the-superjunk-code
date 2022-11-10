import localization from '@/composables/localization'

const messages = {
	en: {
		hint: `
			<p>Hi! At the beginning of the course, you need to create a skill map. Then you will collect lessons from them.</p>
			<p>First, determine the main skill of the course. Click on the selected block and type it.</p>
			<p>Attention! Skills are not related to the lesson schedule yet, so don't think about it.</p>
		`,
		good: {
			text: "Can cook the rolls",
			explain: `
				<p>We recommend using the word "can" rather than "knows." So you will think within the framework of practice, not theory. And this is good because:</p>
				<div class='px-3 mb-3'>
					<ol>
						<li>The practical result is easy to measure.</li>
						<li>The knowledge that is studied as a solution to a practical problem is better absorbed.</li>
					</ol>
				</div>
			`,
		},
		bad: {
			text: `
				<p>Can cook the ingredients, make a roll etc.<br />
			`,
			explain: 
			`
				<p>In the main skill, don't write everything you want to give in the course.</p>
				<p>Write down only one, the most important skill.</p>
				<p>You will divide it later.</p>
			`,
		}
	},
	ru: {
		hint: `
			<p>Привет! В начале работы над курсом нужно составить карту умений. Далее из них  будут собираться уроки.</p>
			<p>Сначала определите главное умение курса. Нажмите на выделенный блок и введите его.</p>
			<p>Внимание! Умения пока никак не связаны с календарным планом уроков, не думайте о нём.</p>
		`,
		good: {
			text: "Умеет готовить роллы.",
			explain: `
				<p>Мы рекомендуем использовать слово «умеет», а не «знает». Так вы будете мыслить в рамках практики, а не теории. И это хорошо потому, что:</p>
				<div class='px-3 mb-3'>
					<ol>
						<li>Практический результат легко измерить.</li>
						<li>Знания, изучаемые как решение практической задачи, лучше усваиваются.</li>
					</ol>
				</div>
			`,
		},
		bad: {
			text: `
				<p>Умеет готовить ингредиенты, закатывать роллы и т.д.<br />
			`,
			explain: 
			`
				<p>В главном умении не пишите всё, что вы хотите дать на курсе.</p>
				<p>Выпишите только одно, самое главное умение.</p>
				<p>Разбивать его будете дальше.</p>
			`,
		}
	},
}

const translate = localization(messages)

export default translate