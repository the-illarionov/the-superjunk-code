<template>
	<div>
		<div v-if="course">
			<div class="grid md:grid-cols-4 sm:grid-cols-1">
				<div>
					Запись на курс:
					<p>
						<input
							type="radio"
							name="applications"
							id="applications_1"
						/>
						<label for="applications_1">Открытая</label>
					</p>
					<p>
						<input
							type="radio"
							name="applications"
							id="applications_2"
						/>
						<label for="applications_2">Через заявку в школу</label>
					</p>
				</div>
				<div>2</div>
			</div>
			админка с настройками<br />
			посмотреть как будет выглядеть для пользователя (маркетплейс
			открывается с уведомлением что курс еще не опубликован)
			<course :course="course" :is-editor="true">
				<template v-slot:lesson="slotProps">
					<router-link
						:to="{
							name: 'EditorOfCoursesLesson',
							params: {
								lesson_number: slotProps.lesson.number
							}
						}"
					>
						{{ slotProps.lesson.number }}.
						{{ slotProps.lesson.name }}
					</router-link>
				</template>
			</course>
		</div>
		<div v-else>
			<div class="skeleton-container">&nbsp;</div>
			<skeleton />
		</div>
	</div>
</template>
<script>
import { ref } from "vue"

import initView from "@/common/InitView"

import Course from "@/components/Courses/Course"
import Skeleton from "@/components/Courses/Course/Skeleton"

import application from "@/stores/Application"

const course = ref(null)

export default {
	...initView({
		url: `/users/:nickname/editor/courses/:course_url`,
		item: course
	}),
	setup() {
		return {
			course,
			application
		}
	},
	components: {
		Course,
		Skeleton
	}
}
</script>
