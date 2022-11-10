<template>
	<template v-if="!course.student">
		<div v-if="course.open_applications">
			<div v-if="course.sales === 'open_access'">
				<router-link
					v-if="user.logged"
					:to="{
						name: 'StudentOfCoursesLesson',
						params: {
							course_url: course.url,
							nickname: user.nickname,
							lesson_number: 1
						}
					}"
					>Начать курс</router-link
				>
				<router-link
					v-else
					:to="{
						name: 'MarketplaceLesson',
						params: {
							lesson_number: 1
						}
					}"
					>Начать курс (регистрация не требуется)</router-link
				>
			</div>

			<div v-else>
				<!-- здесь разные переключатели на разные стоимости -->
				<p>Стоимость курса: 10 000 рублей.</p>
				<a href="payment">Купить курс</a>
			</div>
		</div>
		<closed-applications v-else :school_url="course.school.url" />
	</template>
</template>
<script>
import user from "@/stores/User"

import ClosedApplications from "@/components/Courses/Course/ClosedApplications"

export default {
	setup() {
		return {
			user
		}
	},
	props: {
		course: {
			required: true
		}
	},
	components: {
		ClosedApplications
	}
}
</script>
