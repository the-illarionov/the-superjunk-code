<template>
	<div>
		админка с настройками урока
		<lesson :lesson="lesson" :is-editor="true" />
	</div>
</template>
<script>
import { ref } from "vue"

import initView from "@/common/InitView"

import Lesson from "@/components/Courses/Course/Lesson"

const lesson = ref(null)

export default {
	...initView({
		url: `/users/:nickname/editor/courses/:course_url/lessons/:lesson_number`,
		item: lesson
	}),
	setup() {
		return {
			lesson
		}
	},
	components: {
		Lesson
	}
}
</script>
