<template>
<div>
	<!--
    <iframe src="http://80.249.146.111/s/3/1"></iframe>
	-->
   
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
									"value": "Код-стайл - это стиль кода, его оформление. Мы узнаем, как использовать его в CSS."
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
									"value": "Где узнать как правильно оформлять код?"
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
									"src":"/images/s/5/1_1.png",
									"desc":'С правилами кодстайла для данного курса можно ознакомиться на сайте <a href="https://www.codeguide.maxgraph.ru/">https://www.codeguide.maxgraph.ru/</a>',
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
									"value": "Общий пример кодстайла"
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
									"src":"/images/s/5/2_1.png",
									"desc":'Всегда используется отсуп два пробела. Стили пишутся друг за другом по категориям - сначала позиционирование, затем блочная модель, типографика и далее',
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