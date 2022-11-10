import localization from '@/composables/localization'

const messages = {
	en: {
		hint: `
			<p>The lowest-level skills are micro-skills.</p>
			<p>Imagine them as one action within a lesson. That is, the lesson consists of a chain of micro-skills.</p>
		`,
		good: {
			text: "Can choose rice.<br />Can wash rice.<br />Can cook rice.",
		},
		bad: {
			text: `
				<p>Can turn on the rice cooker.<br />
				Can pour water into a rice cooker.<br />
				Can disable the rice cooker.</p>
			`,
			explain: 
			`
				<p>Describe in detail, but do not get carried away. <br />
				You will write down the smallest details when you start planning lesson.</p>
			`,
		}
	},
	ru: {
		hint: `
			<p>Умения самого нижнего уровня — это микроумения.</p>
			<p>Представляйте их себе, как одно действие внутри урока. То есть, урок состоит из цепочки микроумений.</p>
		`,
		good: {
			text: "Умеет выбирать рис.<br />Умеет промывать рис.<br />Умеет варить рис.",
			/*
			explain: `
				<p>Микроумения представляют собой список шагов, выполняемых при готовке риса.</p>
				<p>Процесс «готовка риса» разбит на подпроцессы.</p>
			`,
			*/
		},
		bad: {
			text: `
				<p>Умеет включать рисоварку.<br />
				Умеет заливать воду в рисоварку.<br />
				Умеет отключать рисоварку.</p>
			`,
			explain: 
			`
				<p>Расписывайте подробно, но не увлекайтесь. <br />
				Распишете мельчайшие детали позже, когда приступите к уроку.</p>
			`,
		}
	},
}

const translate = localization(messages)

export default translate