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
									"value": 'Мы познакомимся с основными значениями свойства "display".'
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
									"value": 'Что такое "блочный" и "строчный" элемент?'
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
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/jOWMQwL",
									"desc":'Блочные элементы ("display: block") занимают всю доступную ширину.<br />Строчные же ("display: inline") расширяются только от содержания.',
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
									"value": "А есть другие значения?"
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
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/jOWBzvr",
									"desc":'Строчные элементы не реагируют на отступы и не могут иметь высоты. А inline-block позволяет их использовать, при этом элементы остаются строчными.',
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
			]
		}
	},
	components: {
		Longread
	},
}
</script>