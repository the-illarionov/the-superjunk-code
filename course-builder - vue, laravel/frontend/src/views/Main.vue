<template>
<div>
	<div class="container vh-100 d-flex align-items-center mb-0">
		
		<div>
			<h1 class="header-1 mb-5">
				Page is under development<br />
			</h1>
			<!--
			<span class="button button-block mr-5" @click="create">
				Попробую прямо сейчас!
			</span>
			<h1 class="header-1">
				Мы создавали онлайн-уроки.<br />
				Вы хотели их смотреть.<br />
			</h1>
			<p class="header-3 mb-5">Теперь ваша очередь создавать такие же уроки.</p>
			<span class="button" @click="create">
				Попробую прямо сейчас!
			</span>
			-->
		</div>
	</div>
	

	<!--
		1. в чём секрет?
			в целом про лонгриды, что это круто и new era и зум

		2. а какие примеры?
			маркетинг первый урок и наш https://illarionov.school/longreads/33

		3. а если я не умею создавать лонгриды?
			типа наша фишка что ограничений куча

		4. Какие тарифы?
			оставить 3

		5. Как связаться?
			чисто тележка
	-->

	<!--
	<div class="container vh-100 d-flex align-items-center">
		<div>
			<h1 class="header-1">Что это?</h1>
			<p>Мы хотим, чтобы больше учеников проходило курсы до конца.</p>
			<p>Поэтому мы создали interactor &mdash; платформу для создания и публикации уроков в виде интерактивных лонгридов (например, <a href="https://illarionov.school/longreads/33" target="_blank">вот таких</a> или <a href="https://illarionov.school/longreads/39" target="_blank">таких</a>).</p>
			<p>На <span class="header-1" style="vertical-align: middle;">10%</span> в среднем увеличивается процент дохождения курса у наших клиентов.</p>
		</div>
	</div>

	<div class="container mb-5">
		<h1 class="header-1">Но ведь есть видео?</h1>

		<p><span class="header-1" style="vertical-align: middle;">95%</span> школ используют видео в качестве образовательного материала.</p>
		<p><span class="header-1" style="vertical-align: middle;">70%</span> из них просто выкладывают запись уроков. Такие видео полноценно изучают <span class="header-1" style="vertical-align: middle;">5%</span> учеников.</p>
		<p class="mb-5">Если школа вкладывается в создание видео, процент досмотра может вырасти лишь до 20%.</p>

		<p class="mb-5">Звучит как что-то не совсем правильное, да?</p>

		<p class="mb-5">Вот и мы так думаем. На смену видео идёт новый формат уроков &mdash; интерактивные лонгриды и вот почему:</p>
		<table class="table-comparison table-responsive desktop-table">
			<thead>
				<tr>
					<th style="border: none"></th>
					<th style="width: 35%">Видео</th>
					<th style="width: 35%">Лонгриды</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Взаимодействие с учеником</th>
					<td>
						<p class="header-3">Нет</p>
						<p>Видео &mdash; всегда монолог.</p>
						<p class="mb-0">Все, что может сделать пользователь: поставить на паузу или перемотать.</p>
					</td>
					<td>
						<p class="header-3">Да</p>
						<p>Лонгрид по сути &mdash; обычная страница.</p>
						<p>Значит, интерактив в нем может быть совершенно любой.</p>
					</td>
				</tr>
				<tr>
					<th>Контролирует ли ученик темп восприятия?</th>
					<td>
						<p class="header-3">Нет</p>
						<p>Можно только пересматривать отрывок, если не успел.</p>
					</td>
					<td>
						<p class="header-3">Да</p>
						<p>Лонгрид &mdash; это набор текста и картинок, воспринимать его в своем темпе это естественно.</p>
					</td>
				</tr>
				<tr>
					<th>Сколько стоит создание?</th>
					<td>
						<p class="header-3">Дорого</p>
						<p>Для создания качественного видео нужна студия, хорошая видеокамера с микрофоном и специалист по монтажу и визуальным эффектам.</p>
					</td>
					<td>
						<p class="header-3">Дёшево</p>
						<p>У нас есть много простых инструментов, а так же набор инструкций по быстрому созданию интересных уроков.</p>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="phone-table"> 
			<h2 class="header-2">Видео</h2 >
			<div>
				<span class="header-3" style="vertical-align: middle;">Взаимодействие с учеником:</span>
				<p class="header-3">Отсутствует </p>
				<p>Видео &mdash; всегда монолог.</p>
				<p class="mb-0">Все, что может сделать пользователь: поставить на паузу или перемотать.</p>
			</div>
				
			<div>
				<span class="header-3" style="vertical-align: middle;">Контролирует ли ученик темп восприятия?</span>
				<p class="header-3">Нет</p>
				<p>Можно только пересматривать отрывок, если не успел.</p>
			</div>

			<div>
				<span class="header-3" style="vertical-align: middle;">Сколько стоит создание?</span>
				<p class="header-3">Дорого</p>
				<p>Для создания качественного видео нужна студия, хорошая видеокамера с микрофоном и специалист по монтажу и визуальным эффектам.</p>
			</div>

			<h2 class="header-2">Лонгриды</h2 >
			<div>
				<span class="header-3" style="vertical-align: middle;">Взаимодействие с учеником:</span>
				<p class="header-3">Есть </p>
				<p>Лонгрид по сути &mdash; обычная страница.</p>
				<p>Значит, интерактив в нем может быть совершенно любой.</p>
			</div>
				
			<div>
				<span class="header-3" style="vertical-align: middle;">Контролирует ли ученик темп восприятия?</span>
				<p class="header-3">Полностью</p>
				<p>Лонгрид &mdash; это набор текста и картинок, воспринимать его в своем темпе это естественно.</p>
			</div>

			<div>
				<span class="header-3" style="vertical-align: middle;">Сколько стоит создание?</span>
				<p class="header-3">Дёшево</p>
				<p>У нас есть много простых инструментов, а так же набор инструкций по быстрому созданию интересных уроков.</p>
			</div>
		</div>
		
	</div>

	<div class="container mb-5" id="pricing">
		<div style="width:100%;">
			<h1 class="header-1">Сколько стоит?</h1>
			<p>Пока мы только запускаемся и использование нашего сервиса будет бесплатным для всех пользователей до 31 ноября 2020 года. Будут работать условия тарифа «‎учитель»‎. Позднее вам нужно будет выбрать свой тарифный план. Полный функционал доступен на всех тарифах.</p>
			<div class="mb-5">
				<div class="button">
					<h2>Базовый</h2>
					<div>
						2 лонгрида <br/>
						Бесплатно
					</div>
				</div>
				<div class="button">
					<h2>Простой</h2>
					<div>
						10 лонгридов <br/>
						990 руб/мес
					</div>
				</div>
				<div class="button">
					<h2>Учитель</h2>
					<div>
						50 лонгридов <br/>
						3960 руб/мес
					</div>
				</div>
				<div class="button">
					<h2>Школа</h2>
					<div>
						100 лонгридов <br/>
						6900 руб/мес
					</div>
				</div>
				<div class="button">
					<h2>Персональный</h2>
					<div>
						персональные условия <br/>
						запросы на добавление функций
					</div>
				</div>
			</div>
		</div>
		<span class="button" @click="register">
			Регистрация
		</span>  
	</div>
	

	<div class="container pt-5">
		<h1 class="header-1">Как связаться?</h1>
		<p>
			<a href="mailto:kychkin.kirill@gmail.com">kychkin.kirill@gmail.com</a>
		</p>
		<p>
			<a href="tel:+79142900484"> +79142900484 </a>
		</p>
		<p>
			<a href="/feedback"> Обратная связь </a>
		</p>
		<p>
			<a href="https://t.me/interactor_chat"> Telegram </a>
		</p>
	</div>
	<div class="container pt-5">
		<h1 class="header-1">Информационный блок</h1>
		<p>
			<a href="/docs">Документы и реквизиты</a>
		</p>
	</div>
	-->
</div>
</template>
<script>

export default {
	beforeDestroy() {
		this.$store.commit("setLoadedPage", false)
	},
	mounted() {
		//this.$store.commit("setSidenavCollapsed", false)
        this.$store.commit("setLoadedPage", true)
	},
	data() {
		return {
		}
	},
	methods: {
		register() {
			this.$router.push('/register')
		},
		create() {
			this.$router.push('/demo')
		}
	}
}
</script>
<style lang="scss" scoped>
.vh-100 {
	height: 100vh;
}
.create-button {
	width: 15vw;
	background: #000;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	padding: 20px 0;
	cursor: pointer;
}
.desktop-table {
	display: block;
}
.phone-table {
	display: none;
	div {
		margin-bottom: 60px;
	}
}
body {
	font-family: "Raleway", Arial, sans-serif;
	font-size: 18px;
	line-height: 1.4;
}

p {
	margin: 0 0 1rem;
}



.l-flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}

.table-comparison {
	width: 100%;
	border-collapse: collapse;
}

.container {
	margin-bottom: 30px;
}

.table-comparison th,
.table-comparison td {
	text-align: center;
	border: 1px solid #ccc;
	padding: 20px;
	font-weight: 400;
	vertical-align: top;
}

.table-comparison tbody th {
	text-align: left;
}

.beforeafter {
	text-align: center;
	background: #f5f5f5;
	padding: 10px;
	margin-bottom: 5px;
}

button {
	cursor: pointer;
}

.interactive {
	border: 5px solid #90c9f9;
	padding: 1.5rem;
}

.video-cont {
	position: relative;
}

.video-cont-link {
	position: absolute;
	background: #2296f3;
	-webkit-animation-name: highlight;
					animation-name: highlight;
	padding: 5px 10px 10px;
	-webkit-animation-duration: 1s;
					animation-duration: 1s;
	-webkit-animation-timing-function: linear;
					animation-timing-function: linear;
	-webkit-animation-iteration-count: infinite;
					animation-iteration-count: infinite;
	-webkit-animation-direction: alternate;
					animation-direction: alternate;
	height: 40px;
	font-size: 1rem;
	cursor: pointer;
}

@-webkit-keyframes highlight {
	0% {
		opacity: 1;
		transform: scale(1.2);
	}

	80% {
		opacity: 0;
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(1);
	}
}

@keyframes highlight {
	0% {
		opacity: 1;
		transform: scale(1.2);
	}

	80% {
		opacity: 0;
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(1);
	}
}

.input-text {
	display: block;
	width: 100%;
	padding: 20px 10px;
	font-size: 1.5rem;
}

.hideable {
	opacity: 1;
	transition: opacity 0.3s;
	z-index: 10;
	position: relative;
}

.hideable_active {
	opacity: 0;
	z-index: 0;
}

.preloader {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: 50% 50% no-repeat url("/images/preloader.gif") rgba(255, 255, 255, 0.9);
	background-size: auto 50%;
}

@media screen and (max-width: 991px) {
	.create-button {
		width: 40vw;
	}

	h5 {
		font-size: 14px!important;
	}
	.desktop-table {
		display: none;
	}
	.phone-table {
		display: block;
	}
}
</style>