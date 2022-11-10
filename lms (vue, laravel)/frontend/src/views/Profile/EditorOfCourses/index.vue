<template>
	<div>
		<div v-if="courses">
			<course-skeleton v-if="creating_course" />
			<div v-else>
				<span @click="createCourse">Создать курс</span><br />
				<div v-if="courses.length > 0">
					Редактируемые курсы:
					<courses :courses="courses" />
				</div>
			</div>
		</div>
		<div v-else>
			<div class="skeleton-container">&nbsp;</div>
			<course-skeleton />
		</div>
	</div>
</template>
<script>
import { ref } from "vue"

import api from "@/common/Api"
import user from "@/stores/User"
import initView from "@/common/InitView"
import router from "@/router"

import Courses from "@/components/Courses"

import CourseSkeleton from "@/components/Courses/Course/Skeleton"

const courses = ref(null)

export default {
	...initView({
		url: `/users/:nickname/editor/courses`,
		item: courses
	}),
	setup() {
		const creating_course = ref(false)

		function createCourse() {
			creating_course.value = true
			api.post("/courses")
				.then((response) => {
					router.push({
						name: "EditorOfCoursesCourse",
						params: {
							course_url: response.data.url,
							nickname: user.nickname
						}
					})
					/*
					if (!courses.value) courses.value = []
					courses.value.push(response.data)
					console.log(response.data)
					*/
					// редиректится в EditorCoursesCourse с урлом
				})
				.catch(() => {})
				.finally(() => {
					creating_course.value = false
				})
			console.log("asdasd")
		}

		return {
			courses,
			createCourse,
			creating_course
		}
	},
	components: {
		Courses,
		CourseSkeleton
	}
}
</script>
