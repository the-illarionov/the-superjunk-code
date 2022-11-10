<template>
	<div>
		<h1>Программирование</h1>

		<course-promo-button v-if="courses" :course="courses[2]" />

		<course-promo-button v-if="courses" :course="courses[3]" />

		<h1>Компьютерная графика</h1>

		<course-promo-button v-if="courses" :course="courses[0]" />

		<course-promo-button v-if="courses" :course="courses[1]" />
	</div>
</template>

<script>
import { ref } from "vue"

import initView from "@/common/InitView"

import CoursePromoButton from "@/components/Courses/Course/PromoButton"

const courses = ref(null)

export default {
	...initView({
		url: "/teens/courses",
		item: courses
	}),
	setup() {
		return {
			courses
		}
	},
	components: {
		CoursePromoButton
	}
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>
