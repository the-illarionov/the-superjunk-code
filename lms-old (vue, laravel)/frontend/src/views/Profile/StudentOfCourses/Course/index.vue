<template>
	<div>
		<div v-if="course">
			<p>Прогресс: {{ course.student.progress }}</p>
		</div>

		<course :course="course">
			<template v-slot:lesson="slotProps">
				<!-- именно здесь проверка на доступные/недоступные уроки и т.д. -->
				<router-link
					:to="{
						name: 'StudentOfCoursesLesson',
						params: {
							lesson_number: slotProps.lesson.number
						}
					}"
				>
					{{ slotProps.lesson.number }}.
					{{ slotProps.lesson.name }}
					<template v-if="slotProps.lesson.student?.passed">
						(пройден)
					</template>
				</router-link>
			</template>
		</course>
	</div>
</template>
<script>
import { ref } from "vue"

import initView from "@/common/InitView"

import Course from "@/components/Courses/Course"

const course = ref(null)

export default {
	...initView({
		url: `/users/:nickname/student/courses/:course_url`,
		item: course
	}),
	setup() {
		return {
			course
		}
	},
	components: {
		Course
	}
}
</script>
