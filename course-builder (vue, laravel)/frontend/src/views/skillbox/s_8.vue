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
									"value": "Что такое поток, позиционирование и зачем они используются."
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
									"value": "Что такое поток?"
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
									"value": "Это то, как элементы размещаются на странице. Блочные элементы идут сверху вниз, строчные - слева направо."
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
									"value": "Что такое float?"
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
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/8/1_1.png",
									"desc":'Если элементы будут идти по стандартным осям, то текст не будет обтекать изображение и картинка с текстом будет выглядеть так:',
									"highlights":[
										{
											x: 20,
											y: 50,
											size: 60,
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
									"src":"/images/s/8/1_2.png",
									"desc":'Чтобы сделать обтекание текстом необходимо разорвать поток. Сделать это можно с помощью свойства float. Float считается устаревшим свойством и сейчас мало где используется.',
									"highlights":[
										{
											x: 67,
											y: 29,
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
									"subtype":"image",
									"component":"ld-image",
									"src":"/images/s/8/1_3.png",
									"desc":'И мы получим такой вот результат',
									"highlights":[
										{
											x: 30,
											y: 60,
											size: 60,
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
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/LYGWRwp",
									"desc":'Свойству float можно так же задать значение right. Важно обратить внимание на следующее: красным цветом обозначен фон родителя картинки и текста. При использовании float поток разрывается и родитель принимает размер текстового элемента, а высоту картинки игнорирует.',
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
									"value": "А можно без него?"
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
									"url": "https://codepen.io/illarionov_school/embed/oNbZYNx",
									"desc":'Для этого можно воспользоваться display: inline-block; <br/> В таком случае элементы могут не поместиться из-за наличия пустого пространства между ними. Есть лайфхак: задать родителю font-size: 0; Важно не забыть задать размер текста дочернему элементу.',
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
									"value": "Что делает position?"
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
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/bGEvymZ",
									"desc":'По умолчанию html элементы имеют значение position: static; Такие элементы ведут себя как обычно. А есть position: relative; Оба этих значения не выходят из потока и влияют на другие элементы',
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
									"value": "position: absolute"
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
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/pogLMoW",
									"desc":'absolute полностью вырывает элемент из потока. Элемент можно позиционировать с помощью top, left, right, bottom',
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
									"value": "position: fixed и добавим немного объема"
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
									"triple": true,
									"component":"ld-iframe",
									"url": "https://codepen.io/illarionov_school/embed/rNxdXLZ",
									"desc":'fixed элементы позиционируются относительно окна браузера. fixed элементы находятся вне потока, поэтому они могут перекрывать остальные элементы. Верстку страницы можно представить как 2d, а z-index добавляет третью ось.',
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
									"value": "Как скрыть то, что выходит за границы родителя?"
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
									"url": "https://codepen.io/illarionov_school/embed/abdYeXo",
									"desc":'overflow определяет, необходимо ли для переполненного блочного элемента содержимое обрезать, предоставить полосы прокрутки или просто отобразить',
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