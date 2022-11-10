<template>
	<div>
		На курс нельзя записаться, записывайте через
		<router-link
			:to="{
				name: 'School',
				params: {
					school_url: school_url
					// тут ещё какие-то параметры можно передавать например чтоб сразу понимал, ученик или учитель хочет заявку подать
					// ну или сразу в роут подачи заявки учеником переходить - подумать хорошенько над урлами с точки зрения реста и тд
				}
			}"
			>школу</router-link
		>
	</div>
</template>
<script>
export default {
	setup() {},
	props: {
		school_url: {
			required: true,
			type: String
		}
	}
}
</script>
