import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
	en: {
		topics: [
			`
			<p>Click on the block and write the skill that the student will receive after completing the course.</p>
			<p>All sentences start with "can," so you will think within the practice framework, not theory. And this is good because:</p>
			<div class='px-3 mb-3'>
				<ol>
				<li>The practical result is easy to measure.</li>
				<li>A theory presented as a solution to a practical problem is always better absorbed.</li>
				</ol>
			</div>
			<p class="mb-5">Attention! Skills are not related to lessons yet, so don't think about them.</p>
			`,
			`
				<p>Start splitting the skill into divisions. To do this, use the sentence: "If the student can.., then he can...". </p>
				<p>For example: "If a student can cook ingredients, make a roll, etc., then he knows how to prepare rolls."</p>
				<p>You can add or remove columns (hover over the title).</p>
			`,
			`
			<p>A topic is something that can be conventionally represented as the name of a single lesson.</p>
			<p class="mb-5">t is no longer necessary to use verbs here. But the topic should still give a clear idea of the practical result for the student. He should understand what specific benefits the study of this topic will bring to him.</p>
			`,
			`
			<p>Micro-skills are the last, smallest part of your curriculum.</p>
			<p>Describe them in as much detail as possible because later, when you design the lesson, it is from them that you will collect various activities within the lesson.</p>
			<p>But you should not go to the extreme either — if you do not need to explain anything for micro-skills, then formulate it more extensively.</p>
			`,
		],
		lessons: [
			`
				<p>Combine lessons in small series.</p>
				<p>On what principle-decide for yourself. It can be one topic, one task, or something else.</p>
				<p>We recommend a series of 3 lessons: in the first two, the material is studied. In the third, the topics covered are fixed on independent practice.</p>
			`,
		],
		...common('en')
	},
	ru: {
		topics: [
			`
			<p>Нажмите на блок и напишите умение, которое получит ученик после окончания курса.</p>
			<p class="mb-0">Все предложения начинаются с «умеет», так вы будете мыслить в рамках практики, а не теории. И это хорошо потому, что:</p>
			<div class='px-3 mb-3'>
				<ol>
					<li>Практический результат легко измерить.</li>
					<li>Теория, подаваемая как решение практической задачи, всегда лучше усваивается.</li>
				</ol>
			</div>
			<p class="mb-5">Внимание! Умения пока никак не связаны с уроками, не думайте о них.</p>
			`,
			`
				<p>Начинайте дробить умение на подумения. Для этого используйте предложение: «Если ученик умеет.., значит он умеет ...».</p>
				<p>Например: «Если ученик умеет готовить ингредиенты, закатывать ролл и т.д., значит он умеет готовить роллы».</p>
				<p>Вы можете добавлять или удалять колонки (наведите на заголовок).</p>
			`,
			`
			<p>Тема — это то, что условно можно представить в виде названия одного урока.</p>
			<p class="mb-5">Здесь уже необязательно использовать глаголы. Но тема всё ещё должна давать чёткое понятие о практическом результате для ученика, он должен понимать, какую конкретно пользу ему принесёт изучение этой темы.</p>
			`,
			`
			<p>Микроумения — это последняя, самая маленькая часть вашей учебной программы.</p>
			<p>Распишите их максимально подробно, потому что позже, когда вы будете проектировать урок, именно из них вы будете собирать различные активности внутри урока.</p>
			<p>Но и в крайность впадать тоже не стоит — если для микроумения ничего не требуется объяснять, то сформулируйте его более обширно.</p>
			`,
		],
		lessons: [
			`
				<p>Объединяйте уроки в небольшие серии.</p>
				<p>По какому принципу — решайте сами. Это может быть одна тема, одно задание или что-то ещё.</p>
				<p>Мы рекомендуем серии из 3 уроков: на первых двух изучается материал, на третьем пройденные темы закрепляются на самостоятельной практике.</p>
			`,
		],
		...common('ru')
	},
}

const translate = localization(messages)

export default translate