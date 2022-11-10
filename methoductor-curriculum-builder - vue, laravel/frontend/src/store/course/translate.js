import localization from '@/composables/localization'

const messages = {
	en: {
		'states-group-start' : 'For the beginning',
		'states-group-middle' : 'For the middle',
		'states-group-end' : 'For the end',

		'state-its_working' : 'I can do it',
		'state-its_working-description' : `
			<p>The student should get a sense of success, because a person always has a fear of something incomprehensible and complex.</p>
			<p>To get the "I can do it" state, give tasks that can be completed in a short period of time and are "close" to the student.</p>
		`,
		'state-its_working-good-text' : `
			They begin to knit with the teacher a striped scarf with the flowers of the faculty from Harry Potter. Learn how to choose yarn and make simple loops. Then they finish it themselves.
		`,
		'state-its_working-good-explain' : `
			The result should be interesting immediately in the first lesson, so that the student is curious to know what awaits him further in the training.Getting the result should be easy and simple, so the scarf is half ready, you just need to tie it with the simplest knitting technique.
		`,
		'state-its_working-bad-text' : `
			The history of knitting. Tools and materials. A chain of air loops.
		`,
		'state-its_working-bad-explain' : `
			The classic mistake of the first lesson is to submit the theory immediately, without reference to the theory. Students want to get results right away, not know the history of knitting.
		`,

		'state-its_working_plus' : 'I do it + I did it myself',
		'state-its_working_plus-description' : `
			<p>The student understands that it is easy for him and he can do some small things himself. You can dilute simple things with independent task solutions.</p>
			<p>The teacher gives a task that they do together and using the same knowledge, the student does another or finishes the task independently.</p>
		`,
		'state-its_working_plus-good-text' : `
			Knit gloves from GP. Learn how to calculate loops and read diagrams. With the teacher, they knit two fingers, the other fingers themselves.
		`,
		'state-its_working_plus-good-explain' : `
			The teacher creates such a situation that the students will definitely succeed. The finger is not a whole glove, independence is still small.
		`,
		'state-its_working_plus-bad-text' : `
			They tied a glove with the teacher, then they knit a mitten themselves.
		`,
		'state-its_working_plus-bad-explain' : `
			The teacher hastened to give independence. The students never knitted a mitten. For now, they should just repeat what the teacher did step by step.
		`,

		'state-made_myself' : 'I did it myself',
		'state-made_myself-description' : `
			<p>The student has some knowledge with which to assert himself or express himself. It is necessary to warm up this new interest and allow the student to independently apply all the knowledge that he received in previous lessons.</p>
			<p>The teacher gives an independent task in which there are topics of previous lessons. The task has a strict framework. The result is the same for everyone.</p>
		`,
		'state-made_myself-good-text' : `
			They knit a sock from Harry Potter according to the scheme themselves. On the upper part of the socks, simple loops from the first lesson are used, on the lower part, calculations are made according to the scheme as in the second lesson.
		`,
		'state-made_myself-good-explain' : `
			The lesson combines not only the knowledge of previous lessons, but also practice. At the end, the students get a single set of clothes.
		`,
		'state-made_myself-bad-text' : `
			They knit a hat with a pompom from Harry Potter themselves. Learn how to knit in a circle, how to make a pompom.
		`,
		'state-made_myself-bad-explain' : `
			It is logical that the cap will be included. But in order to connect it, you need additional knowledge. Students should not learn a lot of new material in such a lesson, they only do practice.
		`,

		'state-adding_mine' : 'I add my own',
		'state-adding_mine-description' : `
			<p>In the middle of training, the student is not so interested in doing simple tasks, it becomes boring to do everything under a carbon copy. To maintain a sense of interest in the subject, the material submitted must be supplemented with the student's vision.</p>
			<p>The teacher gives the tasks on which the student passes/fixes a new topic, but the student must necessarily add something. The terms of the supplement are set by the teacher, but the student comes up with a specific implementation. Additions should not greatly affect the overall result.</p>
		`,
		'state-adding_mine-good-text' : `
			The upper part of the vest is made with a bow: they knit a pattern with stars. Add a pattern with your zodiac sign on the bottom of the vest.
		`,
		'state-adding_mine-good-explain' : `
			The task is limited to the signs of the zodiac and the teacher can prepare for the mistakes and problems of all students. He can even check with the students in advance of their sign.
		`,
		'state-adding_mine-bad-text' : `
			Each student knits a vest of his own style with his zodiac sign.
		`,
		'state-adding_mine-bad-explain' : `
			Too much independence. The vest is a large product and most of it needs to be done with the teacher. Otherwise, only cool students will succeed, those who fall behind will not be able to complete the task.
		`,

		'state-know_paths' : 'I know different ways to solve the problem',
		'state-know_paths-description' : `
			<p>In the middle of the training, the student has a basic understanding of the subject, but still does not have enough experience to use different ways of solving problems.</p>
			<p>The teacher prepared a step-by-step analysis of their actions to solve a problem or problem. The teacher shows how he experimented, analyzed, and used various methods to solve the problem. The student repeats after the teacher.</p>
		`,
		'state-know_paths-good-text' : `
			The teacher voices the task "to tie a New Year's sweater with reindeer". Then he shows how he solves this problem step by step, voicing each of his actions.
		`,
		'state-know_paths-good-explain' : `
			The teacher's thought process is voiced, how he puts hypotheses and solves problems, so that students learn to think the same way.
		`,
		'state-know_paths-bad-text' : `
			Together with the teacher, they knit a sweater with a pattern.
		`,
		'state-know_paths-bad-explain' : `
			There are a lot of options for a sweater with a pattern. Students should be presented with a problem or a very specific task.
		`,

		'state-self_searching' : 'I myself am looking for different ways to solve the problem',
		'state-self_searching-description' : `
			<p>In the middle of the training, the student has an understanding of the subject, he can use various ways to solve problems. </p>
			<p>Before reaching this state, the student previously performed similar tasks together with the teacher, which made it clear to him where to start the task, at what stages to beat it, etc.</p>
			<p>The teacher sets the task and gives an introduction, without a ready-made algorithm and tools. The student determines the algorithm and starts the task.</p>
		`,
		'state-self_searching-good-text' : `
			Students must link any logo (game, superhero, football team) on the sweater.
		`,

		'state-express' : 'I express myself',
		'state-express-description' : `
			<p>The student knows and understands the topic of the module well. He has a high level of independence. The teacher does not lead by the hand, but rather mentors and moderates. </p>
			<p>The student is ready to solve more complex and complex problems, using all their acquired knowledge. The most appropriate form of assignment is a personal project that lasts 2 or more lessons.</p>
			<p>A project is a task that is close to a professional one, which has many solutions. The student presents his own version of the solution to this problem. This is the moment of self-expression. </p>
		`,
		'state-express-good-text' : `
			<p>Link the creative header.</p>
			<p>Link creative gloves.</p>
		`,

		'state-using_for_myself' : 'I use knowledge "inside"',
		'state-using_for_myself-description' : `
			<p>The student thinks about the fact that his work should be of value. That the result of his work can be used by someone. The first user of the work should be himself.</p>
		`,
		'state-using_for_myself-good-text' : `
			<p>Tie yourself a smartphone case.</p>
			<p>Tie yourself a knitted toy on the desktop.</p>
		`,

		'state-using_for_outside' : 'I use knowledge "outside"',
		'state-using_for_outside-description' : `
			<p>At the end of the training, the student knows how he can influence the world around him with the help of the knowledge that he has received.</p>
			<p>The student is ready to solve more complex and complex problems, using all their acquired knowledge. </p>
			< p>Here a team project goes well, students can combine their life experience, share responsibilities among themselves, conduct a comprehensive analysis of the task, etc. But, this is not necessary.</p>
		`,
		'state-using_for_outside-good-text' : `
			<p>Link eco-shoppers for friends.</p>
			<p>Knit clothes for dogs.</p>
		`,
	},
	ru: {
		'states-group-start' : 'Для начала курса',
		'states-group-middle' : 'Для середины курса',
		'states-group-end' : 'Для конца курса',

		'state-its_working' : 'У меня получается',
		'state-its_working-description' : `
			<p>Ученик должен получить чувство успеха, потому что у человека всегда есть страх перед чем-то непонятным и сложным.</p>
			<p>Чтобы получить состояние «У меня получается», дайте задания, которые  можно выполнить  за короткий промежуток времени и являющиеся “близкими” ученику.</p>
		`,
		'state-its_working-good-text' : `
			Начинают вязать с учителем полосатый шарф со цветами факультета из Гарри Поттер. Изучают как выбирать пряжу и делать простые петли. Затем сами доканчивают.
		`,
		'state-its_working-good-explain' : `
			Результат должен быть интересным  сразу же на первом уроке, чтобы ученику было любопытно узнать, что ждёт его дальше на обучении.Получение результата должно быть легким и простым, поэтому шарф наполовину готов, надо просто довязать самым простым приёмом вязания. 
		`,
		'state-its_working-bad-text' : `
			История возникновения вязания. Инструменты и материалы. Цепочка из воздушных петель. 
		`,
		'state-its_working-bad-explain' : `
			Классическая ошибка первого урока подавать теорию сразу, без привязки к теории. Ученики хотят сразу получать результаты, а не знать историю возникновения вязания. 
		`,

		'state-its_working_plus' : 'У меня получается + Я сделал сам',
		'state-its_working_plus-description' : `
			<p>Ученик понимает, что ему легко и какие-то небольшие вещи он может делать сам. Можно разбавить простые вещи, самостоятельными решением задания.</p>
			<p>Преподаватель дает задание, которое они делают вместе и используя те же знания ученик делает другое или доканчивает задание самостоятельно.</p>
		`,
		'state-its_working_plus-good-text' : `
			Вяжут перчатки из ГП. Узнают как рассчитывать петли и читать схемы. С преподом вяжут два пальца, остальные пальцы сами.
		`,
		'state-its_working_plus-good-explain' : `
			Преподаватель создаёт такую ситуацию, чтобы у учеников точно получилось. Палец это не целая перчатка, самостоятельность пока маленькая. 
		`,
		'state-its_working_plus-bad-text' : `
			Связали с преподом перчатку, потом сами вяжут варежку.
		`,
		'state-its_working_plus-bad-explain' : `
			Препод поспешил давать самостоятельность. Ученики ни разу не вязали варежку. Они пока должны просто повторять то, что делал препод пошагово. 
		`,

		'state-made_myself' : 'Я сделал сам',
		'state-made_myself-description' : `
			<p>У ученика есть какие-то знания, которыми можно самоутвердиться или выразить себя. Необходимо подогревать этот появившийся интерес и позволить ученику самостоятельно применить все те знания, которые он получил на предыдущих уроках.</p>
			<p>Преподаватель дает самостоятельное задание в котором есть темы предыдущих уроков. У задания жесткие рамки. Результат у всех одинаковый.</p>
		`,
		'state-made_myself-good-text' : `
			Вяжут носок из Гарри Поттера по схеме самостоятельно. На верхней части носков используют простые петли из первого урока, на нижней части производят рассчеты по схеме как на втором уроке.
		`,
		'state-made_myself-good-explain' : `
			Урок объединяет не только знания предыдущих уроков, но и практику. В конце у учеников получается единый комплект одежды.
		`,
		'state-made_myself-bad-text' : `
			Вяжут шапку с помпоном из Гарри Поттера сами. Узнают как вязать по кругу, как сделать помпон.
		`,
		'state-made_myself-bad-explain' : `
			Логично, что в комплекте будет шапка. Но для того, чтобы её связать нужны дополнительные знания. Ученики не должны на таком уроке изучать много нового материала, они делают только практику.
		`,
		
		'state-adding_mine' : 'Я добавляю своё',
		'state-adding_mine-description' : `
			<p>В середине обучения ученику уже не так интересно выполнять простые задания, ему становится скучно делать всё под копирку. Чтобы удержать чувство интереса к предмету,  подаваемый материал должен быть дополнен видением ученика.</p>
			<p>Преподаватель даёт задания, на котором ученик проходит/закрепляет новую тему, но ученик обязательно должен  дополнить чем-то. Условия дополнения ставит преподаватель, но конкретную реализацию придумывает ученик.  Дополнения не должны сильно влиять на общий результат.</p>
		`,
		'state-adding_mine-good-text' : `
			Верхнюю часть жилета делают с преподом: вяжут узор со звездами. Добавляют узор со своим знаком зодиака на нижнюю часть жилета. 
		`,
		'state-adding_mine-good-explain' : `
			Задание ограничено знаками зодиака и препод может подготовиться к ошибкам и проблемам всех учеников. Он может даже заранее уточнить у учеников их знак.
		`,
		'state-adding_mine-bad-text' : `
			Каждый ученик вяжет жилет своего фасона со своим знаком зодиака.
		`,
		'state-adding_mine-bad-explain' : `
			Слишком большая самостоятельность. Жилет это большое изделие и большую его часть нужно делать с учителем. Иначе получится только у крутых учеников, те кто отстают не осилят задание. 
		`,

		'state-know_paths' : 'Я знаю разные способы решения задачи',
		'state-know_paths-description' : `
			<p>В середине обучения у ученика есть базовое понимание предмета, но все еще нет достаточного опыта, чтобы использовать различные пути решения задач.</p>
			<p>Преподаватель подготовил пошаговый анализ своих действий по решению какой-то задачи или проблемы. Преподаватель показывает как он эксперементировал, анализировал, использовал различные способы, чтобы решить задачу. Ученик повторяет за преподавателем.</p>
		`,
		'state-know_paths-good-text' : `
			Преподаватель озвучивает задачу “связать новогодний свитер с оленями”. Потом показывает, как он решает эту задачу пошагово, озвучивая каждое своё дествие.
		`,
		'state-know_paths-good-explain' : `
			Озвучивается мыслительный процесс преподавателя, то как он ставит гипотезы и решает задачи, чтобы ученики научились мыслить так же.
		`,
		'state-know_paths-bad-text' : `
			Вместе с преподавателем вяжут свитер с узором.
		`,
		'state-know_paths-bad-explain' : `
			Вариантов свитера с узором очень много. Перед учениками должна ставиться проблема или очень конкретная задача.
		`,

		'state-self_searching' : 'Я сам ищу разные способы решения задачи',
		'state-self_searching-description' : `
			<p>В середине обучения у ученика есть понимание предмета, он может использовать различные способы решения задач. </p>
			<p>До достижения этого состояния, ученик ранее выполнял аналогичные задачи вместе с преподавателем, которые дали ему понять с чего стоит приступать к задаче, на какие этапы ее бить и т.д.</p>
			<p>Преподаватель ставит задачу и дает вводную, без готового алгоритма работы и инструментария. Ученик сам определяет алгоритм и приступает к заданию.</p>
		`,
		'state-self_searching-good-text' : `
			Ученики должны связать  любой логотип (игра, супергерой, футбольная команда) на свитере. 
		`,

		'state-express' : 'Я выражаю себя',
		'state-express-description' : `
			<p>Ученик хорошо знает и понимает тему модуля. У него высокий уровень самостоятельности.  Преподаватель не ведёт за руку, а скорее менторит и модерирует. </p>
			<p>Ученик готов решать более сложные и комплексные задачи, используя все свои полученные знания. Наиболее подходящая форма задания - личный проект, длящийся 2 и более уроков.</p>
			<p>Проект это задача, близкая к профессиональной, у которой много вариантов решения. Ученик представляет свой вариант решения этой задачи. В этом заключается момент самовыражения. </p>
		`,
		'state-express-good-text' : `
			<p>Связать креативную шапку.</p>
			<p>Связать креативные перчатки.</p>
		`,

		'state-using_for_myself' : 'Я использую знания «внутрь»',
		'state-using_for_myself-description' : `
			<p>Ученик задумывается о том, что его работа должна представлять ценность. Что результат его работы может быть кем-то использован.  Первым пользователем работы должет быть он сам.</p>
		`,
		'state-using_for_myself-good-text' : `
			<p>Связать себе чехол для смартфона.</p>
			<p>Связать себе вязаную игрушку на рабочий стол.</p>
		`,

		'state-using_for_outside' : 'Я использую знания «наружу»',
		'state-using_for_outside-description' : `
			<p>В конце обучения ученик знает,  как может повлиять на окружающий мир с помощью тех знаний которые получил.</p>
			<p>Ученик готов решать более сложные и комплексные задачи, используя все свои полученные знания. </p>
			<p>Здесь хорошо заходит командный проект, ученики могут объединить свой жизненный опыт, разделить обязанности между собой, провести комплексный анализ задачи и т.д. Но, это не обязательно.</p>
		`,
		'state-using_for_outside-good-text' : `
			<p>Связать эко - шопперы для друзей.</p>
			<p>Связать одежду для собак.</p>
		`,
	},
}

const translate = localization(messages)

export default translate