<template>
	<div>
		я - лонгрид, получаю structure и просто рисую его. выбор языка, статьи,
		урока и тд - где-то снаружи. я просто получаю жсон и по нему бегу и
		рисую<br />
		{{ structure }}<br />
		ещё у меня могут быть слоты, типа "под шапкой", чтобы туда передавать
		номер урока и т.д.
		<div v-if="isEditor" style="background: yellow">я в режиме эдитора</div>
	</div>
</template>
<script>
export default {
	setup() {},
	props: {
		structure: {
			required: true
		},
		isEditor: {
			default: () => false
		}
	}
}
</script>
