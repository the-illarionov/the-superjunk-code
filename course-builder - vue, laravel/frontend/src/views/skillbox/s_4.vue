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
									"value": "Что мы узнаем сегодня?"
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
									"value": "Более подробно познакомимся с оформлением текста, цвета, фона и другими интересными штуками."
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
									"value": "Как узнать все CSS-свойства?"
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
									"src":"/images/s/4/1_1.png",
									"desc":'В css существует огромное множество свойств и их сложно выучить, но это и не нужно. Можно и нужно пользоваться справочниками, например <a href="http://htmlbook.ru/" target="_blank">htmlbook</a>.',
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
									"value": "Как настроить стиль текста?"
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
									"subtype":"code",
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/VweKByw",
									"desc":'Стили, используемые для всего сайта, можно объявить тегу body.<br />Настройте текст на свой вкус и цвет.<br />Познакомьтесь со свойствами и их возможными значениями подробнее в <a href="http://htmlbook.ru/" target="_blank"> справочнике</a>.',
									"options": {
										"tabs": "html,result",
									},
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
									"value": "А как задавать цвета?"
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
									"subtype":"code",
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/xxZEazO",
									"desc":'Можно словом, в hex-формате и в rgba. Попробуйте изменить цвета (найти коды цветов можно <a target="_blank" href="https://htmlcolorcodes.com/">здесь</a>).',
									"options": {
										"tabs": "html,result",
									},
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
									"value": "А если я хочу картинку на фон?"
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
									"subtype":"code",
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/mdVrGox",
									"desc":'Пропишите в background-image путь до картинки. Попробуйте изменить картинку на другую.',
									"options": {
										"tabs": "html,result",
									},
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
									"value": "Еще пара интересных свойств"
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
									"subtype":"code",
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/BajLqoM",
									"desc":'Свойство opacity отвечает за прозрачность. Оно принимает значения от 0 до 1. А visibility отвечает за отображение элемента. Например, visibility:hidden, это то же самое, что opacity: 0.',
									"options": {
										"tabs": "html,result",
									},
									"highlights":[],
									"loaded":false,
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