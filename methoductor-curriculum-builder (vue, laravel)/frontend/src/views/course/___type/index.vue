<template>
<div class="l-content">
	<h3 class="header-2 mb-5" id="start">
		{{ translate("c_navigation.set_type") }}
	</h3>
	
	<section-template 
		v-for="(category, category_index) in course_type_values"
		:key="category_index">
		<template #header>
			{{ category.text }}
		</template>
		<template #content>
			<div class="pt-2" v-if="category.development">
				{{ translate("c_development") }}
			</div>
			<div class="row" v-else>
				<div class="col-6 col-lg-4 mb-4"
					v-for="(course, course_index) in category.values"
					:key="course_index">
					<v-button 
						fill-height
						block
						:active="course_state.course_type.current.path.check(category, course)"
						:disabled="course.disabled"
						@click="navigate(category, course)">
						{{ course.text }}
					</v-button>
				</div>
			</div>
		</template>
	</section-template>
</div>
</template>

<script>
import VButton from '@/components/form/v-button'
import course_state from '@/store/course'
import SectionTemplate from '@/templates/section'
import course_type_values from '@/values/course-type'

import translate from "./translate"

export default {
	emits: [ 'type-selected'],
	props: {
		from: {
			required: true,
		}
	},
	setup(props, { emit }) {

		function navigate(category, course) {
			if(!course.disabled) {
				course_state.course_type.current.path.map = [category.value, course.value]
				emit('type-selected')
			}
		}

		return { 
			course_state, 
			navigate,
			course_type_values,
			translate,
		}
	},
	components: {
		VButton,
		SectionTemplate
	},
}
</script>

<style>

</style>