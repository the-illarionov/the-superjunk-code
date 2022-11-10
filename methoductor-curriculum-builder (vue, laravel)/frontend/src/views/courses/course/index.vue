<template>
<v-card class="action-container">
	<content-editable
		v-model="course.name"
		:placeholder="translate('enter_name')" />
	
	<router-link class="action_top" :to="'/course/' + course.id">
		<i class="las la-pen"></i>
	</router-link>

	<i class="action_bottom las la-trash-alt scale-on-hover" @click="deleteCourse"></i>
</v-card>
</template>

<script>
import { watch } from "vue"
import { debounce } from "lodash"

import api from '@/api'
import userStore from '@/store/user'

import VCard from "@/templates/card"
import ContentEditable from '@/components/content-editable'

import translate from './translate'

export default {
	setup(props) {
		const debouncedSave = debounce((name) => {
			api.put('courses/' + props.course.id,
			{
				name: name
			})
			.then(function (response) {
				console.log(response.data)
			})
			.catch(function (error) {
				console.log(error.response)
				console.log(error.response.data.errors)
			})
		}, 500)

		watch(() => props.course.name, (name) => {
			debouncedSave(name)
		})



		const { getCourses } = userStore()

		function deleteCourse() {
			if(confirm(translate('c_delete'))) {
				api.delete('courses/' + props.course.id,
				{
					id: props.course.id,
				})
				.then(function () {
					getCourses()
				})
				.catch(function (error) {
					console.log(error.response)
					console.log(error.response.data.errors)
				})
			}
		}



		return {
			translate,
			deleteCourse
		}
	},
	props: {
		course: {
			required: true,
			type: Object,
		}
	},
	components: {
		VCard,
		ContentEditable,
	}
}
</script>

<style scoped lang="scss">
@import './index';
</style>