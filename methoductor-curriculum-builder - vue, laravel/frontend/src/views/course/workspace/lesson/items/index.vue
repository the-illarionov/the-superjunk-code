<template>
<draggable 
	tag="transition-group"
	:component-data="{ 
		tag: 'div', 
		name: !drag ? 'flip-list' : null, 
		type: 'transition-group' }"
	:list="parentId ? course_state.lesson.items[ parentId ].childs : course_state.lesson.items[ course_state.lesson.selected_id ].childs"
	animation="250"
	:item-key="itemKey"
	handle=".drag"
	ghostClass="ghost"
	@start="drag = true"
    @end="drag = false">
	<template #item="{ element, index }">
		<div class="lesson__section" v-if="type == 'sections'" :id="element">
			<h3 class="header header-3 action-container">
				{{ index + 1 }}.
				<content-editable
					class="inline"
					v-model="course_state.lesson.items[ element ].name"
					:placeholder="translate('section_placeholder')" />

				<span 
					v-if="course_state.lesson.items[ course_state.lesson.selected_id ].childs.length > 1"
					class="drag action_left action_left_center_outside">
					<i class="las la-arrows-alt"></i>
				</span>

				<span 
					class="action_right action_right_center"
					@click="removeItem(element)">
					<i class="las la-trash-alt"></i>
				</span>
			</h3>

			<lesson-items
				type="steps"
				:parentId="element"
				/>

			<v-button
				@click="addStep(element)">
				<i class="las la-plus"></i>
				{{ translate('add_step') }}
			</v-button>
		</div>

		<div class="lesson__step" v-else-if="type == 'steps'" :id="element">
			<!--
			<div>
				ШАГ:<br />
				id: {{ element }}<br />
				skills: {{ course_state.lesson.items[element].skills }}
			</div>
			-->

			<div class="header action-container" v-show="course_state.lesson.items[ parentId ].childs.length > 1">
				<span class="ws-nowrap">
					{{ index + 1 }} {{ translate('step') }}. 
				</span>
				<content-editable
					class="inline"
					v-model="course_state.lesson.items[ element ].name"
					:placeholder="translate('step_placeholder')" />

				<span
					class="drag action_left action_left_center_outside">
					<i class="las la-arrows-alt"></i>
				</span>

				<span 
					class="action_right action_right_center"
					@click="removeItem(element)">
					<i class="las la-trash-alt"></i>
				</span>
			</div>
			
			<v-textarea
				class="mb-3"
				v-model="course_state.lesson.items[ element ].value" />
			
			<div v-if="course_state.lesson.items[ course_state.lesson.selected_id ].getLesson().childs.length > 0">
				{{ translate('check_skills') }}<br />
				
				<v-button
					small
					class="lesson__skill mb-3"
					v-for="skillId in course_state.lesson.items[ course_state.lesson.selected_id ].getLesson().childs"
					:key="skillId"
					:active="course_state.lesson.items[ element ].skills.indexOf(skillId) > -1"
					:id="element + '___' + skillId"
					@click="toggleSkill(element, skillId)"
					@mouseenter="highlight(skillId, true)"
					@mouseleave="highlight(skillId, false)">
					<span v-if="course_state.topics.items[ course_state.lessons.items[skillId].topic_id ].show_skill">
						{{ translate('c_can') }}
					</span>
					<span v-else>
						{{ translate('c_knows') }}
					</span>
					{{ course_state.topics.items[ course_state.lessons.items[skillId].topic_id ].value }}
				</v-button>
			</div>
			<div v-else>
				{{ translate('add_skills') }}
			</div>
		</div>
	</template>
</draggable>
</template>

<script>
import { ref } from "vue"

import draggable from 'vuedraggable'
import course_state from '@/store/course'

import translate from './translate'
import VButton from '@/components/form/v-button'
import VTextarea from '@/components/form/v-textarea'
import ContentEditable from '@/components/content-editable'
import Node from '@/store/classes/nodes/Node'

export default {
	setup() {
		const drag = ref(false)

		function removeItem(id) {
			if(confirm(translate('c_delete'))) {
				course_state.lesson.items[ id ].delete()
			}
		}

		function addStep(sectionId) {
			new Node({
				type: 'lesson_step',
				parentId: sectionId,
				container: course_state.lesson.items,
			})
		}

		function toggleSkill(stepId, skillId) {
			// это можно было бы в Node вынести
			const index = course_state.lesson.items[stepId].skills.indexOf(skillId)
			if(index > -1) {
				course_state.lesson.items[stepId].skills.splice(index, 1)

				const stepIndex = course_state.lessons.items[skillId].steps.indexOf(stepId)

				course_state.lessons.items[skillId].steps.splice(stepIndex, 1)

				console.log('delete')
			} else {
				course_state.lesson.items[stepId].skills.push(skillId)

				course_state.lessons.items[skillId].steps.push(stepId)

				console.log('add')
			}
		}

		function highlight(skillId, isHighlighting) {
			if(isHighlighting) {
				document.getElementById(course_state.lesson.items[ course_state.lesson.selected_id ].lesson_id).classList.remove("highlighted_lesson")
				course_state.lessons.items[skillId].highlight(true)
			} else {
				course_state.lessons.items[skillId].highlight(false)
				document.getElementById(course_state.lesson.items[ course_state.lesson.selected_id ].lesson_id).classList.add("highlighted_lesson")
			}
		}

		function itemKey(element) {
			return element
		}

		return {
			drag,
			course_state,
			translate,
			removeItem,
			addStep,
			toggleSkill,
			itemKey,
			highlight
		}
	},
	props: {
		type: {
			required: true,
			validator: function(value) {
				return ['sections', 'steps'].indexOf(value) !== -1
			}
		},
		parentId: {
			type: String,
			default() {
				return null
			}
		},
	},
	components: {
		draggable,
		VButton,
		ContentEditable,
		VTextarea,
	},
	name: "lesson-items",
}
</script>

<style scoped lang="scss">
@import './index';
</style>