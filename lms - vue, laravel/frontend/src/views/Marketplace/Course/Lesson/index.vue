<template>
	<div>
		<lesson :lesson="lesson">
			<pass-checker :lesson="lesson" />
		</lesson>
	</div>
</template>
<script>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

import user from "@/stores/User"
import initView from "@/common/InitView"

import Lesson from "@/components/Courses/Course/Lesson"
import PassChecker from "@/components/Courses/Course/Lesson/PassChecker"

const lesson = ref(null)

export default {
	...initView({
		url: `/courses/:course_url/lessons/:lesson_number`,
		item: lesson,
		cancel: () => user.logged
	}),
	setup() {
		const route = useRoute()
		const router = useRouter()

		if (user.logged) {
			router.replace({
				name: "StudentOfCoursesLesson",
				params: {
					nickname: user.nickname,
					course_url: route.params.course_url,
					lesson_number: route.params.lesson_number
				}
			})
		}

		return {
			lesson
		}
	},
	components: {
		Lesson,
		PassChecker
	}
}
</script>
