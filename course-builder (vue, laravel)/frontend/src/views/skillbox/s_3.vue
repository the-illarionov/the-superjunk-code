<template>
<div>   
	<longread
		:is_author="false"
		:structure="structure" />
		
	<div class="ld-container-main py-5 mb-3">
		На этом всё!
	</div>

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
									"value": "Узнаем про единицы измерения в css: пиксели, проценты, em и rem."
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
									"value": "Что такое пиксели?"
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
									"options": {
										"tabs": "css,result",
									},
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/jOWrZeB",
									"desc":'Это абсолютная единица измерения. Это значит, что они не зависят ни от чего.<br /> Обратите на появление горизонтального скролла, если элемент не помещается в экран. <br /> Поиграйтесь со свойствами "font-size" и "width".',
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
									"value": "Как работают проценты?"
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
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/yLeJKNv",
									"options": {
										"tabs": "html,result",
									},
									"desc":'Это относительная единица измерения. Это значит, что она зависит от значения родителя.<br /> Посмотрите как parent занимает 50% от размера окна, а child в свою очередь 50% от размера parent <br /> Кстати, CSS-селекторы можно писать через запятую.',
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
									"value": "А как задать размер относительно окна?"
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
									"value": 'Для этого есть единицы "vw" (viewport width) и "vh" (viewport height).'
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
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/yLeJKNv",
									"options": {
										"tabs": "html,result",
									},
									"desc":'Поменяйте "%" на "vw" или "vh" и посмотрите: размеры элемента теперь зависят от размеров окна.',
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
									"value": "Что такое rem и em?"
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
									"value": "Это тоже относительные единицы измерения, но они зависят от размера шрифта."
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
									"triple": true,
									"options": {
										"tabs": "html,result",
									},
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/QWyEmga",
									"desc":'em зависит от размера шрифта родителя.',
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
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/jOWrzyY",
									"options": {
										"tabs": "html,result",
									},
									"desc":'rem зависит только от размера шрифта  html, он не меняется от родителя.',
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