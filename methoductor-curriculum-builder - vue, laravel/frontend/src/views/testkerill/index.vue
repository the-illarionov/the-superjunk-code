<template>
	<div>
		<div class="custom-container" v-dragscroll>
			<div class="content">
				some conent
			</div>
			<div class="content">
				some conent
			</div>
			<div class="content">
				some conent
			</div>
			<div class="content">
				some conent
			</div>
			<div class="content">
				some conent
			</div>
		</div>
		<div class="custom-container" v-dragscroll>
			<div class="content">
				some conent
			</div>
			<div class="content">
				some conent
			</div>
			<div class="content">
				some conent
			</div>
			<div class="content">
				some conent
			</div>
			<div class="content">
				some conent
			</div>
		</div>
	</div>
</template>

<script>
import dragscroll from '@/directives/dragscroll'

export default {
	setup() {
	},
	directives: {
		dragscroll
	},
}
</script>

<style>
/* blocls */
.custom-container {
	margin-bottom: 30px;
	width: 400px;
	height: 300px;
	background: #f00;
	overflow: hidden;
}
.content {
	margin: 10px;
	width: 700px;
	height: 100px;
	background: #0f0;
}

/* reveal */
.custom-container:hover {
	overflow: scroll;
}

/* width */
.custom-container::-webkit-scrollbar {
    width: 20px;
}

/* Track */
.custom-container::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */
.custom-container::-webkit-scrollbar-thumb {
	background: #000;
}

/* Handle on hover */
.custom-container::-webkit-scrollbar-thumb:hover {
	background: #555;
}

/* firefox */
.custom-container {
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin; /* none thin auto */
}
</style>
<!--
1. поменял ключ с объекта на key
2. убрал ref с elArrs, всё работает



parent по идее решается не у самого элемента а у родителя. то есть передаю не items а элемент, внутри которого уже есть els и parent




1. Можно отлавливать удаление референса
	2. Можно чтобы удаление посылало ивент (или стор меняло) а клон прослушивал
	3. Через Map связки создавать
	4. Или вообще рил через ключ искать как-то? Мб создать отдельный Map и там ключи это key как-то или хз



	какую-то реализацию map, в ней на одном уровне все элементы ссылки с ключами, внутри просто ключ прямого родителя

	в качестве знчения массив с ключами получается или даже прям ссылки на объекты

	загс такой

	мб вообще без ключей, чисто ссылки на обхъекты и внутри элемента уже ссылки на родителя
-->