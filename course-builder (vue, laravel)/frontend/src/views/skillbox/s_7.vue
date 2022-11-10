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
									"value": "Более подробно узнаем про блочную модель и свойства margin, padding и box-sizing."
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
									"value": "Что такое padding?"
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
									"url": "https://codepen.io/illarionov_school/embed/8357c84c879ff4d66d46c517e5b0f15d",
									"desc":'Это отступы внутри элемента (поля).<br />Можно указать один отступ для всех сторон, либо для каждой стороны отдельно.',
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
									"value": "А margin?"
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
									"url": "https://codepen.io/illarionov_school/embed/bce4578b2d1f9eccb74fead1d24130b2",
									"desc":'Это тоже отступы, но уже внешние.',
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
									"value": "И border?"
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
									"url": "https://codepen.io/illarionov_school/embed/9432c2740571472e056ff8c14b7f9b39",
									"desc":'Это рамка. Она так же может быть со всех сторон, либо только с какой-то одной.',
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
									"value": "Что такое box-sizing?"
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
									"url": "https://codepen.io/illarionov_school/embed/7c28b80f092fc12b4b66c94e8416d136",
									"desc":'Это то, как браузер рассчитывает размеры элементов.<br />"box-sizing": "content-box" прибавляет отступы к ширине.<br />"box-sizing": "border-box" уменьшает ширину на отступы и рамки.',
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