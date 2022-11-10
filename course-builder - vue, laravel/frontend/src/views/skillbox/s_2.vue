<template>
<div>
	<longread
		:is_author="false"
		:structure="structure" />

	<div class="ld-container-main py-5 mb-3">
		На этом всё!
	</div>
	
</div>
</template>
<script>
import Longread from '@/components/view/longread'

export default {
	data() {
		return {
			structure: [
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"header",
									"component":"ld-header",
									"value": "Что сделаем на этом уроке?"
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"paragraph",
									"component":"ld-paragraph",
									"value": "Вы узнаете о селекторах CSS и о том, зачем они нужны."
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"header",
									"component":"ld-header",
									"value": "Что такое классы?"
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"paragraph",
									"component":"ld-paragraph",
									"value": "Это очень удобный способ написания стилей."
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/1_1.png",
									"desc":'Для начала добавьте в заголовок "h1" атрибут "class" со значением "main-title".',
									"highlights":[
										{
											x: 20,
											y: 40,
											size: 30,
										},
									],
									"loaded":false
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/1_2.png",
									"desc":'Откройте "style.css" и вместо тега напишите название класса. Добавьте точку перед именем, чтобы CSS понимал, что используется класс, а не тег.',
									"highlights":[
										{
											x: 17,
											y: 25,
											size: 25,
										}
									],
									"loaded":false
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"code",
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/wvMGjVv",
									"desc":'Задайте этот же класс тегу "h2". Поэкспериментируйте с другими цветами и классами.',
									"options": {
										"tabs": "html,result",
									},
									"triple": true,
									"highlights":[],
									"loaded":false,
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"header",
									"component":"ld-header",
									"value": "А как задать класс только определенным тегам?"
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/2_1.png",
									"desc":'Допишите слитно тег к названию класса.',
									"highlights":[
										{
											x: 15,
											y: 22,
											size: 20,
										}
									],
									"loaded":false,
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"code",
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/bGEebpd",
									"desc":'Измените CSS так, чтобы было выделено  только "Программа курса".',
									"highlights":[],
									"options": {
										"tabs": "html,result",
									},
									
									"triple": true,
									"loaded":false,
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"header",
									"component":"ld-header",
									"value": "Как ещё можно задавать стиль?"
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"paragraph",
									"component":"ld-paragraph",
									"value": 'Можно использовать атрибут "id". Но "id" на странице может быть только один. Поэтому лучше использовать классы, а не "id".'
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/3_1.png",
									"desc":'Поменяйте атрибут "class" на "id".',
									"highlights":[
										{
											x: 24,
											y: 40,
											size: 30,
										},
									],
									"loaded":false
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/3_2.png",
									"desc":'В css поменяйте точку перед названием класса на #.',
									"highlights":[
										{
											x: 15,
											y: 23,
											size: 18,
										},
									],
									"loaded":false
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"code",
									"component":"ld-iframe",
									"url":"https://codepen.io/illarionov_school/embed/pogbzpw",
									"desc":'Поменяйте класс на "id" (в css и в html).',
									"highlights":[],
									"options": {
										"tabs": "html,result",
									},
									"triple": true,
									"loaded":false
								}
							],
						},
					],
				},

				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"header",
									"component":"ld-header",
									"value": "Вес селектора"
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"paragraph",
									"component":"ld-paragraph",
									"value": "Когда вы задаете одинаковые стили, то используются те, у которых сильнее вес."
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/4_1.png",
									"desc":'"id" всегда имеет наибольший вес, потом  идет class и самый слабый вес у тега.',
									"loaded":false,
									"highlights":[],
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/4_2.png",
									"desc":'Если селекторы одинаковые, то больший вес у того, что снизу.',
									"highlights":[],
									"loaded":false
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"code",
									"component":"ld-iframe",
									"url":"https://codepen.io/illarionov_school/embed/qBbNWJg",
									"desc":'Попробуйте перемещать селекторы местами, использовать другие селекторы.',
									"options": {
										"tabs": "html,result",
									},
									"triple": true,
									"highlights":[],
									"loaded":false
								}
							],
						},
					],
				},

				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"header",
									"component":"ld-header",
									"value": "А как временно отключить свойство?"
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"paragraph",
									"component":"ld-paragraph",
									"value": "Можно использовать комментарии."
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/5_1.png",
									
									"highlights":[
										{
											x: 25,
											y: 65,
											size: 40,
										}
									],
									"loaded":false
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"code",
									"component":"ld-iframe",
									"url":"https://codepen.io/illarionov_school/embed/WNrxNLg",
									"desc":'Отключите комментирование кода, посмотрите на изменения. Включите обратно.',
									"options": {
										"tabs": "html,result",
									},
									"triple": true,
									"highlights":[],
									"loaded":false
								}
							],
						},
					],
				},{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"header",
									"component":"ld-header",
									"value": "Что еще влияет на приоритет?"
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"paragraph",
									"component":"ld-paragraph",
									"value": "Порядок подключения файлов и специальное слово !important."
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"current_index" : 0,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/6_1.png",
									"desc":"Создайте второй файл css с таким же классом, как в основном файле, но с другими стилями. Подключите его после первого файла. Вы увидите, что второй файл будет иметь больший вес.",
									"highlights":[],
									"loaded":false
								}
							],
						},
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/2/6_2.png",
									"desc":"Если дописать в стиль !important, то он будет иметь наивысший приоритет",
									"highlights":[],
									"loaded":false
								}
							],
						},
					],
				},
			]
		}
	},
	components: {
		Longread
	},
}
</script>