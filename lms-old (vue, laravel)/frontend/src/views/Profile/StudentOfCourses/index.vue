<template>
	<div>
		Изучаемые курсы:
		<courses :courses="courses" />
	</div>
</template>
<script>
import { ref } from "vue"

import initView from "@/common/InitView"

import Courses from "@/components/Courses"

const courses = ref(null)

export default {
	...initView({
		url: `/users/:nickname/student/courses`,
		item: courses
	}),
	setup() {
		return {
			courses
		}
	},
	components: {
		Courses
	}
}
</script>
