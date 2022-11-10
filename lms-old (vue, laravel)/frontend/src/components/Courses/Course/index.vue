<template>
	<div v-if="course">
		<h1>
			<span>{{ course.name }}</span>
		</h1>
		<p>{{ course.info }}</p>
		<p>
			Автор курса:
			<router-link
				to="/%course%/author (которая такая же как и /users)"
				>{{ course.author.name }}</router-link
			>
		</p>
		<div
			v-for="(module, i) in course.modules"
			:key="`module-${i}`"
			style="background: green; margin-bottom: 1rem"
		>
			<h1>{{ module.name }}</h1>
			<p>{{ module.description }}</p>
			<ol>
				<li v-for="(lesson, i) in module.lessons" :key="`lesson-${i}`">
					<slot name="lesson" :lesson="lesson"></slot>
				</li>
			</ol>
		</div>
		<div v-if="isEditor">добавить модуль</div>
	</div>
	<skeleton v-else />
</template>
<script>
import Skeleton from "./Skeleton"

export default {
	setup() {
		return {}
	},
	props: {
		course: {
			required: true
		},
		isEditor: {
			default: () => false
		}
	},
	components: {
		Skeleton
	}
}
</script>
