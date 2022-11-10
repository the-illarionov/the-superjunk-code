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
									"value": "Вы научитесь менять внешний вид элементов, или, как говорят, их стили."
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
									"value": "Как выглядят стили?"
								}
							],
						},
					],
				},
				{
					"type":"container",
					"subtype":"wrapper",
					"component":"ld-container",
					"is_big": true,
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
									"src":"/images/s/1/1_1.jpg",
									"desc":"Откройте наш любимый DevTools и кликните по заголовку h1.",
									"highlights":[
										{
											x: 50,
											y: 26,
											size: 12,
											target: 1,
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
									"src":"/images/s/1/1_1.jpg",
									"desc":"В фигурных скобках указаны свойства и их значения.<br /> Например, свойство display имеет значение block.<br />Хоть мы и не задавали эти свойства, они уже есть в браузере по умолчанию (user agent stylesheet).",
									"highlights":[
										{
											x: 85,
											y: 35,
											size: 20,
										}
									],
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
									"value": "Как поменять стили?"
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
									"subtype":"code",
									"triple": false,
									"options": {
										"tabs": "html,result",
									},
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/WNrrZRj?theme-id=38970&default-tab=html,result",
									"desc":'Допишите в заголовок &lt;h1 style="color: red"&gt; (можно прямо в нижнем окне).',
									"highlights":[],
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
									"triple": false,
									"options": {
										"tabs": "html,result",
									},
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/qBbbVdO",
									"desc":'Свойство "color" отвечает за текст шрифта, и мы его изменили!<br />А теперь попробуйте поэкспериментировать с другими цветами.',
									"highlights":[],
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
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/1/3_1.jpg",
									"desc":"Добавьте этот код в свой сайт и посмотрите DevTools.",
									"highlights":[
										{
											x: 15,
											y: 35,
											size: 30,
										},
										{
											x: 67,
											y: 30,
											size: 20,
										}
									],
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
									"value": "Можно ли ускорить работу?"
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
									"value": "Да, если установить расширение для редактора, обновляющего сайт на ходу."
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
									"src":"/images/s/1/4_1.jpg",
									"desc":"Откройте папку проекта <br /> Нажмите на иконку расширений.",
									"highlights":[
										{
											x: 3,
											y: 67,
											size: 15,
											target: 1,
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
									"src":"/images/s/1/4_2.jpg",
									"desc":'Напишите "liveserver" в поле и нажмите Install.',
									"highlights":[
										{
											x: 40,
											y: 40,
											size: 20,
											target: 2,
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
									"src":"/images/s/1/4_3.jpg",
									"desc":'После установки в правом нижнем углу появится кнопка "Go Live", нажмите на неё.',
									"highlights":[
										{
											x: 87,
											y: 100,
											size: 15,
											target: 3,
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
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/1/4_4.jpg",
									"desc":"Теперь на вашем компьютере запущен сервер (посмотрите на адрес страницы) и он будет отслеживать все изменения в файлах при сохранении.<br />Вам больше не нужно обновлять страницу.",
									"highlights":[
										{
											x: 30,
											y: 15,
											size: 25,
										}
									],
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
									"value": "Как еще можно задавать стили?"
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
									"value": "Удобнее задавать все стили в одном месте, а не в атрибутах тегов."
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
					"is_big": true,
					"elements":[
						{
							"type":"container",
							"subtype":"element",
							"component":"ld-container",
							"elements": [
								{
									"type":"element",
									"subtype":"code",
									"triple": false,
									"options": {
										"tabs": "html,result",
									},
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/LYGGQbv",
									"desc":"Добавьте тег &lt;style&gt; внутри тега &lt;head&gt;.",
									"highlights":[
										{
											x: 11,
											y: 36,
											size: 18,
											target: 1,
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
									"options": {
										"tabs": "html,result",
									},
									"triple": false,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/rNxxgvZ",
									"desc":"Впишите туда имя тега и перенесите свойства.<br />Можете добавить еще свойств или поэкспериментировать с другими тегами.",
									"highlights": [],
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
									"value": "А какой способ самый правильный?"
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
									"value": "Если все стили хранить в одном файле, он получится слишком большим и вам будет неудобно. Поэтому стили мы вынесем в отдельный файл."
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
									"src":"/images/s/1/5_1.jpg",
									"desc":"Мы уже это сделали на прошлом уроке &mdash; это значит, что все стили берутся из файла style.css.",
									"highlights":[
										{
											x: 30,
											y: 50,
											size: 40,
											target: 1,
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
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/1/5_2.jpg",
									"desc":"Попробуйте написать то же самое и убедитесь, что всё работает.",
									"highlights":[
										{
											x: 30,
											y: 30,
											size: 40,
										}
									],
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