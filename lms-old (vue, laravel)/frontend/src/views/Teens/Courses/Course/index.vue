<template>
	<div>
		<user-checker v-if="course" :course="course" />
		<course :course="course"> </course>
		<attendance-checker v-if="course" :course="course" />
	</div>
</template>
<script>
import { ref } from "vue"

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
			course
		}
	},
	components: {
		Course,
		UserChecker,
		AttendanceChecker
	}
}
</script>
