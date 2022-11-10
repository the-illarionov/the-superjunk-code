import localization from '@/composables/localization'

const messages = {
	en: {
		topics: [
			{
				good: {
					text: "Can cook the rolls",
					explain: `
						<p>When we write "can," we think about the student, not about our professional field or company.<br />
						The student usually comes to you for practical knowledge.</p>
					`,
				},
				bad: {
					text: `
						<p>Can cook the ingredients, make a roll etc.<br />
					`,
					explain: 
					`
						<p>You do not need to write all the skills you will give in the course. Formulate it in one sentence. You will break it up in the next steps. </p>
					`,
				}
			},
			{
				good: {
					text: `
						Knows how to prepare ingredients.<br />
						Knows how to roll a roll.<br />
						Knows how to cook and bake.
					`,
					explain: `
						<p>If you imagine that there will be ready-made training materials for each module, they can easily be separate mini-courses.</p>
						<p>Also, it is easy to come up with a test task at the end of each module.</p>
					`,
				},
				bad: {
					text: `
						<p>Cooking rice.<br />
						The history of Japanese cuisine.<br />
						How to eat rolls correctly.</p>
					`,
					explain: 
					`
						<p>"Cooking rice" is too specific, and it's a topic within the module, not the module itself.</p>
						<p>Also, you still have to think within the framework of practice, not theory.</p>
					`,
				}
			},
			{
				good: {
					text: `
						Cooking rice.<br />
						Cut the fish.<br />
						Slicing vegetables.`,
					explain: `
						<p>Each of the topics could be a separate lesson.<br />
						Also, even from the name, it is clearly clear that the new student will receive.</p>
					`,
				},
				bad: {
					text: `
						<p>
							The correct way of slicing.<br />
							Rinsing the rice.<br />
							Adding vinegar.
						</p>
					`,
					explain: 
					`
						<p>The topics are taken too small, and they would not be able to become independent lessons in theory.<br />  
						The division into sub-themes will be further.</p>
					`,
				},
			},
			{
				good: {
					text: "Can choose rice.<br />Can wash rice.<br />Can cook rice.",
					explain: `
						<p>Micro-skills are a list of steps that are performed when cooking rice.</p>
						<p>The process of "cooking rice" is divided into sub-processes.</p>
					`,
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
						Write down the smallest details when you start the lesson.</p>
					`,
				}
			}
		]
		
	},
	ru: {
		topics: [
			{
				good: {
					text: "Умеет готовить роллы.",
					explain: `
						<p>Когда мы пишем «умеет», то думаем об ученике, а не о своей профессиональной  области или о компании.<br />
						Ученик обычно приходит к вам за практическими знаниями.</p>
					`,
				},
				bad: {
					text: `
						<p>Умеет готовить ингредиенты, закатывать роллы и т.д.<br />
					`,
					explain: 
					`
						<p>Не нужно писать все умения, которые вы собираетесь дать на курсе. Сформулируйте одним предложением. Разбивать будете на следующих шагах. </p>
					`,
				}
			},
			{
				good: {
					text: `
						Умеет готовить ингредиенты.<br />
						Умеет закатывать ролл.<br />
						Умеет жарить и запекать.
					`,
					explain: `
						<p>Если представить, что для каждого модуля будут готовые учебные материалы, то они легко могут быть отдельными мини-курсами.</p>
						<p>Кроме того, в конце каждого модуля легко придумать проверочное задание.</p>
					`,
				},
				bad: {
					text: `
						<p>Готовка риса.<br />
						История возникновения японской кухни.<br />
						Как правильно есть роллы.</p>
					`,
					explain: 
					`
						<p>«Готовка риса» — слишком конкретно, это тема внутри модуля, а не сам модуль.</p>
						<p>Кроме того, вы всё ещё должны думать в рамках практики, а не теории.</p>
					`,
				}
			},
			{
				good: {
					text: `
						Готовка риса.<br />
						Нарезка рыбы.<br />
						Нарезка овощей.`,
					explain: `
						<p>Каждая из тем могла бы стать отдельным уроком.<br />
						Кроме того, даже из названия чётко понятно, что нового получит ученик.</p>
					`,
				},
				bad: {
					text: `
						<p>
							Умеет выбирать рис.<br />
							Умеет промывать рис.<br />
							Умеет варить рис.
						</p>
					`,
					explain: 
					`
						<p>Темы взяты слишком мелкие, они бы не смогли стать самостоятельным уроков в теории.<br />  
						Деление на подтемы будет дальше.</p>
					`,
				},
			},
			{
				good: {
					text: "Умеет выбирать рис.<br />Умеет промывать рис.<br />Умеет варить рис.",
					explain: `
						<p>Микроумения представляют собой список шагов, выполняемых при готовке риса.</p>
						<p>Процесс «готовка риса» разбит на подпроцессы.</p>
					`,
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
						Распишете мельчайшие детали когда приступите к уроку.</p>
					`,
				}
			}
		]
	},
}

const translate = localization(messages)

export default translate