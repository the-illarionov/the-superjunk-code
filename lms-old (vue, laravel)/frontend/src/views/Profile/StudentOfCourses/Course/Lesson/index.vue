<template>
	<div>
		<lesson :lesson="lesson">
			<pass-checker :lesson="lesson" />
		</lesson>
	</div>
</template>
<script>
import { ref } from "vue"

import initView from "@/common/InitView"

import Lesson from "@/components/Courses/Course/Lesson"
import PassChecker from "@/components/Courses/Course/Lesson/PassChecker"

const lesson = ref(null)

export default {
	...initView({
		url: `/users/:nickname/student/courses/:course_url/lessons/:lesson_number`,
		item: lesson
	}),
	setup() {
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
