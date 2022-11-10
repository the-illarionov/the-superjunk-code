<template>
	<div>
		<user-checker v-if="course" :course="course" />
		<course :course="course">
			<template v-slot:lesson="slotProps">
				<router-link
					v-if="slotProps.lesson.sales === 'open_access'"
					:to="$route.path + '/' + slotProps.lesson.number"
				>
					{{ slotProps.lesson.number }}.
					{{ slotProps.lesson.name }}
					(бесплатно)
				</router-link>
				<template v-else>
					{{ slotProps.lesson.number }}. {{ slotProps.lesson.name }}
				</template>
			</template>
		</course>
		<attendance-checker v-if="course" :course="course" />
	</div>
</template>
<script>
import { ref } from "vue"

import user from "@/stores/User"

import initView from "@/common/InitView"

import Course from "@/components/Courses/Course"
import UserChecker from "@/components/Courses/Course/UserChecker"
import AttendanceChecker from "@/components/Courses/Course/AttendanceChecker"

const course = ref(null)

export default {
	...initView({
		url: `/courses/:course_url`,
		item: course
	}),
	setup() {
		return {
			course,
			user
		}
	},
	components: {
		Course,
		UserChecker,
		AttendanceChecker
	}
}
</script>
<!--
						<template v-if="is_student">
							<router-link
								:to="{
									name: 'StudentOfCoursesLesson',
									params: {
										course_url: course.url,
										nickname: $route.params.nickname,
										lesson_number: lesson.number
									}
								}"
							>
								{{ lesson.number }}. {{ lesson.name }}
								<template v-if="lesson.student?.passed">
									(выполнен)
								</template>
							</router-link>
						</template>
						<template v-else-if="is_author">
							<router-link
								:to="{
									name: 'EditorOfCoursesLesson',
									params: {
										course_url: course.url,
										nickname: $route.params.nickname,
										lesson_number: lesson.number
									}
								}"
							>
								{{ lesson.number }}. {{ lesson.name }}
							</router-link>
						</template>
						<div v-else>{{ lesson.number }}. {{ lesson.name }}</div>
						-->
