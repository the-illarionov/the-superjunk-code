<template>
<div style="position: relative">
	<transition name="fade" mode="out-in">
		<course-type
			v-if="lesson_state.current_part == 'course-type'"
			from="lesson"
			@typeSelected="lesson_state.current_part = 'questions'" />

		<questions
			from="lesson"
			v-else-if="lesson_state.current_part == 'questions'" />

		<lesson-map
			v-else-if="lesson_state.current_part == 'map'" />

		<skills
			v-else-if="lesson_state.current_part == 'skills'" />
	</transition>

	<template
		v-for="(section, section_index) in lesson_state.structure"
		:key="section_index">
		<transition name="fade" mode="out-in">
			<div class="l-content" v-if="lesson_state.current_part == section.id">
				<div class="mb-5">
					<h3 class="header-2">
						{{ section.title_page }}
					</h3>
					<device
						v-if="section.device"
						:map="section.device"
						no-title />
				</div>
				<draggable
					type="steps"
					:list="section.steps"
					:add-text="translate('add_text')"
					:non-editable="section.non_editable" />

				<div class="col-lg-4 pt-5 pl-0">
					<div class="pr-5">
						<v-button
							block
							@click="goNext(section_index)">
							{{ translate("c_go") }}
							<i class="las la-arrow-right"></i>
						</v-button>
					</div>
				</div>
			</div>
		</transition>
	</template>
</div>
	
</template>

<script>
import { ref } from "vue"

import useStore from '@/store/lesson'

import VButton from "@/components/form/v-button"
import Skills from './skills'
import LessonMap from './map'
import Questions from '@/views/course/questions'
import Draggable from '@/components/draggable'
import CourseType from '@/views/course/type'
import Device from '@/components/device'

import localization from "@/composables/localization"
import messages from '@/localization/views/lesson/index'



const translate = localization(messages)

export default {
	setup() {
		const { state: lesson_state } = useStore()
		const show_result = ref(false)

		function goNext(fromIndex) {
			let new_part = "result"

			if(fromIndex < lesson_state.structure.length - 1) {
				new_part = lesson_state.structure[fromIndex + 1].id
			}
			lesson_state.current_part = new_part
		}

		return {
			lesson_state,
			show_result,
			goNext,
			translate
		}
	},
	components: {
		VButton,
		Skills,
		Draggable,
		CourseType,
		Device,
		Questions,
		LessonMap,
	},
	props: {

	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>