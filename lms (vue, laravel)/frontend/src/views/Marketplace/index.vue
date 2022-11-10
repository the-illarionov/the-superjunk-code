<template>
	<div>
		Маркетплейс
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
		url: "/market/courses",
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
<style lang="scss" scoped>
@import "./index";
</style>
