<template>
	<div class="mb-3" v-if="state_user.courses && state_user.courses.length > 0">
		<p>
			{{ translate("courses") }}
		</p>
		<div
			class="row">
			<div
				class="col-lg-4 col-12 mb-4" 
				v-for="course in state_user.courses" 
				:key="course.id">
				<course 
					:course="course" />
			</div>
		</div>
	</div>
	<v-button
		@click="createNew"
		class="my-3">
		{{ translate("create_header") }}
	</v-button>
</template>

<script>
import { onBeforeMount } from "vue"

import useUser from '@/store/user'

import VButton from "@/components/form/v-button"

import Course from './course'

import translate from './translate'

export default {
	setup() {
		const { 
			state_user, 
			getCourses,
			addCourse } = useUser()
		
		function createNew() {
            ym(71143837,'reachGoal','create_course')
            addCourse()
        }

		/*
		function modifyExisting() {
            ym(71143837,'reachGoal','modify_exist')
        }
		*/

		onBeforeMount(() => {
            getCourses()
        })

		return {
			translate,
			state_user,
			createNew,
		}
	},
	components: {
		VButton,
		Course
	}
}
</script>

<style scoped lang="scss">
@import './index';
</style>