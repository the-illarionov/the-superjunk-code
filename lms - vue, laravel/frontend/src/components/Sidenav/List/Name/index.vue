<template>
	<div>
		<template v-if="!name"> &nbsp; </template>
		<template v-else>
			{{ name }}
		</template>
	</div>
</template>
<script>
import { ref, toRef, watch } from "vue"
import { useRoute } from "vue-router"

import api from "@/common/Api"

export default {
	setup(props) {
		const name = ref("")

		const route = toRef(props, "route")

		const currentRoute = useRoute()

		function getName() {
			if (
				(route.value.name === "MarketplaceCourse" ||
					route.value.name === "EditorOfCoursesCourse" ||
					route.value.name === "StudentOfCoursesCourse") &&
				currentRoute.params.course_url
			) {
				api.get(
					"/names/courses/" + currentRoute.params.course_url
				).then((response) => {
					name.value = response.data
				})
			} else if (
				(route.value.name === "MarketplaceLesson" ||
					route.value.name === "EditorOfCoursesLesson" ||
					route.value.name === "StudentOfCoursesLesson") &&
				currentRoute.params.lesson_number
			) {
				api.get(
					"/names/courses/" +
						currentRoute.params.course_url +
						"/lessons/" +
						currentRoute.params.lesson_number
				).then((response) => {
					name.value = response.data
				})
			} else if (
				route.value.name === "School" &&
				currentRoute.params.school_url
			) {
				api.get(
					"/names/schools/" + currentRoute.params.school_url
				).then((response) => {
					name.value = response.data
				})
			}
		}

		if (route.value.dynamic) {
			getName()

			watch(() => [currentRoute.params], getName)
		} else {
			name.value = route.value.text_ru
		}

		return {
			name
		}
	},
	props: {
		route: {
			required: true
		}
	}
}
</script>
