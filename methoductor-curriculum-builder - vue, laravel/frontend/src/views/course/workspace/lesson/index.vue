<template>

<div class="workspace__lesson"
	id="workspace__lesson"
	@mouseenter="highlight(true)"
	@mouseleave="highlight(false)">
	<!--
	<p>items: {{ state.lesson.items }}</p>
	<p>selected_id: {{ state.lesson.selected_id }}</p>
	-->

	<div v-if="state.lesson.loaded">
		<p>Lesson temlplate is generated automatically.</p>

		<h2 class="header-3">1. Prepare tasks.</h2>
		<p>Description that you need yo start from task, not from theory.</p>
		<!--
		<p>Описашка, что задания вообще нужны и начинать с них надо, потому что это неочевидно для нуля. И что вообще теорию надо подавать именно в привязке к заданиям. И в описании надо же будет казать чтобы задание было сверху вниз.</p>
		-->

		<lesson-section
			v-for="(task_id, index) in getSectionId('task', true)" 
			:key="index"
			:section="state.lesson.items[task_id]"
			/>



		<h2 class="header-3 pt-5">2. Write down how you will conduct the lesson.</h2>
		<!--
		<p>Тожекакая-то описашка судя по всему.</p>
		-->
		<lesson-section
			:section="state.lesson.items[getSectionId('begin')]"
			/>

		<lesson-section
			v-for="(task_id, index) in getSectionId('task', true)" 
			:key="index"
			:section="state.lesson.items[task_id]"
			deep
			/>

		<lesson-section
			:section="state.lesson.items[getSectionId('end')]"
			/>
		<!--
		<p>здесь что-то связанное с автоматическим режимом и т.д.</p>
		-->
		<!--
		
		<div class="pb-5">
			<v-button
				@click="addSection">
				<i class="las la-plus"></i>
				{{ translate('add_section') }}
			</v-button>
		</div>
		-->
		<!--
		<v-card class="mb-5">
			<template v-if="state.lesson.items[ state.lesson.selected_id ].lesson.state_id">
				<p style="font-size: 1.5rem">{{ translate('student_state') }} "{{ state.lesson.items[ state.lesson.selected_id ].lesson.state.name }}".</p>
				<div v-html="state.lesson.items[ state.lesson.selected_id ].lesson.state.description" />
				<examples
					v-if="state.lesson.items[ state.lesson.selected_id ].lesson.state.examples"
					:source="state.lesson.items[ state.lesson.selected_id ].lesson.state.examples"
				/>
			</template>
			<div v-else>
				{{ translate('state_not_chosen') }}
			</div>
		</v-card>
		-->
	</div>
	<div v-else 
		v-html="translate('click_to_edit')" />

	<preloader :show_loader="loader.workspace.lesson"/>
</div>
</template>

<script>
/*
eslint-disable vue/no-unused-components
*/
//import { computed } from 'vue'
import translate from './translate'

import Node from '@/store/classes/nodes/Node'
import loader from "@/store/loader"
import state from '@/store/course'

import Preloader from "@/components/preloader"
import VButton from '@/components/form/v-button'
import VCard from '@/templates/card'
import Examples from "@/components/example"

import LessonItems from './items'
import LessonSection from './section'

export default {
	setup() {
		function addSection() {
			new Node({
				type: 'lesson_section',
				parentId: state.lesson.selected_id,
				container: state.lesson.items,
			})
		}

		function highlight(isHighlighting) {		
			if(state.lesson.loaded) {
				if(isHighlighting) {
					document.getElementById("workspace__lessons").classList.add("highlighted")
					document.getElementById( state.lesson.items[ state.lesson.selected_id ].lesson_id ).classList.add("highlighted_lesson")
				} else {
					document.getElementById("workspace__lessons").classList.remove("highlighted")
					document.getElementById(state.lesson.items[ state.lesson.selected_id ].lesson_id ).classList.remove("highlighted_lesson")
				}
			}
		}

		function getSectionId(subtype, multiple = false) {
			let result = multiple ? [] : undefined

			const items = state.lesson.items

			for(let key in items) {
				const item = items[key]
				if(item.type === 'section' && item.subtype === subtype && item.parent_id === state.lesson.selected_id) {
					if(multiple) result.push(key)
					else {
						result = key
						break
					}
				}
			}

			if(multiple) {
				result.sort( (a,b) => {
					return items[a].order - items[b].order
				})
			}

			return result
		}

		function getDevice(step_id) {
			return state.devices.items[ state.lesson.items[step_id].device_id ]
		}


		return {
			translate,
			loader,
			state,
			addSection,
			highlight,
			getSectionId,
			getDevice,
		}
	},
	components: {
		Preloader,
		VButton,
		LessonItems,
		VCard,
		Examples,
		LessonSection
	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>