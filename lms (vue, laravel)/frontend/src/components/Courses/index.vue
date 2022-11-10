<template>
	<div>
		<div v-if="courses">
			<!--
				Где-то тут получается окно с фильтрами, поиском и тд
				-->
			<course-promo-button
				v-for="(course, i) in courses"
				:key="`course-${i}`"
				:course="course"
			/>
		</div>
		<div v-else>
			<div class="skeleton-container">&nbsp;</div>
		</div>
	</div>
</template>
<script>
import CoursePromoButton from "@/components/Courses/Course/PromoButton"

export default {
	setup() {},
	components: {
		CoursePromoButton
	},
	props: {
		courses: {
			required: true
		}
	}
}
</script>
