<template>
	<template v-if="user.logged">
		<router-link
			v-if="course.student"
			:to="{
				name: 'StudentOfCoursesCourse',
				params: {
					course_url: course.url,
					nickname: user.nickname
				}
			}"
		>
			Вы уже изучаете этот курс, пеерйдите в режим ученика
		</router-link>

		<router-link
			v-if="course.editor"
			:to="{
				name: 'EditorOfCoursesCourse',
				params: {
					course_url: course.url,
					nickname: user.nickname
				}
			}"
		>
			Вы редактируете этот курс, перейти?
		</router-link>
	</template>
</template>
<script>
import user from "@/stores/User"

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
	}
}
</script>
