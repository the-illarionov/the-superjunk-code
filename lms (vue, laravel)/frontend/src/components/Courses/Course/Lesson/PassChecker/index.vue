<template>
	<div ref="checkerElement" style="background: yellow; margin-top: 2000px">
		{{ lesson.student }}
		<div v-if="lesson.pass_conditions">
			<p>
				здесь ещё проверку на зареган нет. то есть может быть курс, он
				опен акцесс, но урокитолько с разблокировкой и есть кондиешны.
				тогдаему надо зарегаться и что-то сделать (мб даже вsync это
				вынести)
			</p>

			<p>
				на бэкэнд просто отправляется весь pass conditions, на бэке
				просто всегда пробегается по всем и смотрит, совпадает ли
				uservalue с correct value. если все совпадения correct, то
				ставит уроку passed true
			</p>
			<p>
				подсветка правильных неправильных вариантов уже на клиенте
				происходит, просто во время цикла смотрит есть ли correct
			</p>
			<p>если файл загружается - можно типа с проверкой или без делать</p>
		</div>
		<div
			v-if="
				(lesson.student && lesson.student.passed) ||
				!lesson.pass_conditions
			"
		>
			<div v-if="lesson.is_last">Курс закончен!</div>
			<div v-else>
				<router-link
					:to="{
						name: $route.name,
						params: { lesson_number: lesson.number + 1 }
					}"
					>Следующий урок</router-link
				>
			</div>
		</div>
	</div>
</template>
<script>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

import api from "@/common/Api"
import user from "@/stores/User"
import application from "@/stores/Application"

export default {
	setup(props) {
		const checkerElement = ref(null)
		const route = useRoute()

		//console.log(route)

		let observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						syncAnswers(props.lesson, route)
						observer.unobserve(entry.target)
					}
				})
			},
			{
				rootMargin: "500px",
				threshold: 0
			}
		)

		onMounted(() => {
			observer.observe(checkerElement.value)
		})

		return {
			checkerElement
		}
	},
	props: {
		lesson: {
			required: true,
			type: Object
		}
	}
}

function syncAnswers(lesson, route) {
	if (lesson.student && !lesson.student.passed) {
		//console.log("sync go", lesson)
		application.skeleton.showOnRequests = false
		api.put(
			`/users/${user.nickname}/student/courses/${route.params.course_url}/lessons/${route.params.lesson_number}`,
			{
				pass_conditions: lesson.student.pass_conditions
			}
		)
			.then((response) => {
				lesson.student = response.data
				//console.log("sync finish", lesson)
			})
			.finally(() => {
				application.skeleton.showOnRequests = true
			})
	}
}
</script>
