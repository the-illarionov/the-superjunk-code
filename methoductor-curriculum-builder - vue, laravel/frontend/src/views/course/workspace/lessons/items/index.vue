<template>
<draggable 
	tag="transition-group"
	:component-data="{ 
		tag: 'div', 
		name: !drag ? 'flip-list' : null, 
		type: 'transition-group',
		class: computedContainerClass }"
	:list="list"
	animation="250"
	:item-key="itemKey"
	:group="{ name: type, put: put }"
	handle=".drag"
	ghostClass="ghost"
	@start="drag = true"
    @end="drag = false"
	@change="change($event, parentId)"
	:move="move">
	<template #item="{ element, index }">
		<div :class="'lessons__module'" v-if="type == 'modules'" :id="element">
			<!--
			МОДУЛЬ:
			<div>
				el: {{ element }}
				<br />
				parent: {{ course_state.lessons.items[element].parentId }}
				<br />
				name: {{ course_state.lessons.items[element].name }}<br />
				childs: {{ course_state.lessons.items[element].childs }}<br />
				level: {{ course_state.lessons.items[element].level }}
			</div>
			-->
			<h3 class="header header-3 action-container" v-if="course_state.lessons.items[element].parent.childs.length > 1">
				<!--
				<div class="mr-1">
					{{ index + 1 }}&nbsp;{{ translate('module') }}.
				</div>
				-->
				{{ index + 1 }}.
				<content-editable
					class="inline"
					v-model="course_state.lessons.items[element].name"
					:placeholder="translate('module_placeholder')" />
				
				<div class="count">
					{{  translate('lessons') }}
					{{ course_state.lessons.items[element].getLowestChilds(3).length }}
				</div>

				<span 
					class="drag action_left action_left_center">
					<i class="las la-arrows-alt"></i>
				</span>

				<span 
					class="action_right action_right_center"
					@click="removeItem(element)">
					<i class="las la-trash-alt"></i>
				</span>
			</h3>

			<lessons-items
				type="sprints"
				:parentId="element"
				/>

			<!--
			<div style="margin-left: 2rem">
				<v-button
					@click="addSprint(element)">
					<i class="las la-plus"></i>
					{{ translate('add_sprint') }}
				</v-button>
				<div class="mt-3" v-html="translate('sprint_hint')" />
			</div>
			-->
			
		</div>

		<div class="lessons__sprint" v-else-if="type == 'sprints'" :id="element" :class="index === 0 ? 'messenger-highlight messenger-highlight-combine-lessons' : ''">
			<!--
			СПРИНТ:
			<div>
				el: {{ element }}
				<br />
				parent: {{ course_state.lessons.items[element].parentId }}
				<br />
				name: {{ course_state.lessons.items[element].name }}<br />
				childs: {{ course_state.lessons.items[element].childs }}<br />
				level: {{ course_state.lessons.items[element].level }}
			</div>
			-->
			<div class="header action-container">
				<div class="mr-1 ws-nowrap">
					{{ index + 1 }} {{ translate('series') }}.
				</div>
				<content-editable
					v-model="course_state.lessons.items[element].name"
					:placeholder="translate('sprint_placeholder')" />

				<span 
					class="drag action_left action_left_center"
					v-if="course_state.lessons.items[element].parent.childs.length > 1">
					<i class="las la-arrows-alt"></i>
				</span>

				<span 
					class="action_right action_right_center"
					@click="removeItem(element)">
					<i class="las la-trash-alt"></i>
				</span>
			</div>

			<lessons-items
				type="lessons"
				container-class="row row_lessons"
				:parentId="element" />

			<transition name="fade">
				<div class="add-lesson"
					v-if="course_state.lessons.items[element].childs.length == 0"
					@click="addLesson(element, 'before', 0)">
					<i class="las la-plus-circle" />
				</div>
			</transition>
			
		</div>

		<div class="lessons__lesson-wrapper mb-3" v-else-if="type == 'lessons'">
			<!--
			УРОК:
			<div>
				el: {{ element }}
				<br />
				parent: {{ course_state.lessons.items[element].parentId }}
				<br />
				name: {{ course_state.lessons.items[element].name }}<br />
				childs: {{ course_state.lessons.items[element].childs }}<br />
				level: {{ course_state.lessons.items[element].level }}<br />
				plan_id: {{ course_state.lessons.items[element].plan_id }}<br />
				state_id: {{ course_state.lessons.items[element].state_id }}
			</div>
			-->

			<div class="lessons__lesson action-container" :id="element" :class="index === 0 ? 'messenger-highlight  messenger-highlight-drag-skills-to-lessons messenger-highlight-add-states messenger-highlight-open-lesson' : ''">
				<div class="header">
					<span class="ws-nowrap">
						{{ course_state.lessons.items[element].indexInModule + 1 }}
						{{ translate('lesson') }}.</span>
					
					<content-editable
						class="inline"
						v-model="course_state.lessons.items[element].name"
						:placeholder="translate('lesson_placeholder')" />
				</div>

				<div class="d-flex messenger-highlight messenger-highlight-add-states select-state">
					<p class="mt-1 mr-1 ws-nowrap">{{ translate('student_state')}}</p>
					<v-select
						class="mb-3"
						v-model="course_state.lessons.items[element].state_id"
						:options="course_state.states.orderedItems"
						option-group
						valueKey="id"
						textKey="name"
						/>
				</div>

				<template v-if="course_state.lessons.items[parentId].childs.length < 6">
					<span class="action_left action_left_center_outside" @click="addLesson(parentId, 'before', index)">
						<i class="las la-plus-circle" />
					</span>

					<span class="action_right action_right_center_outside" @click="addLesson(parentId, 'after', index)">
						<i class="las la-plus-circle" />
					</span>
				</template>

				<span class="action_right"
					@click="removeItem(element)">
					<i class="las la-trash-alt"></i>
				</span>

				<span class="drag action_left">
					<i class="las la-arrows-alt"></i>
				</span>

				<span class="edit action_right action_right_top" @click="editLesson(element)">
					<i class="las la-pen"></i>
				</span>
				Умения в этом уроке:
				<lessons-items
					type="skills"
					:parentId="element"
					/>
				
			</div>
		</div>

		<div 
			class="lesson__skill action-container" 
			v-else-if="type == 'skills'"
			:id="element"
			@mouseenter="highlight(element, true)"
			@mouseleave="highlight(element, false)">
			
			<!--
			СКИЛЛ:
			<div>
				el: {{ element }}
				<br />
				parent: {{ course_state.lessons.items[element].parentId }}
				<br />
				name: {{ course_state.lessons.items[element].name }}<br />
				childs: {{ course_state.lessons.items[element].childs }}<br />
				level: {{ course_state.lessons.items[element].level }}<br />
				topic_id: {{ course_state.lessons.items[element].topic_id }}
				steps: {{ course_state.lessons.items[element].steps }}
			</div>
			-->
			<span v-if="course_state.lessons.items[element].topic.show_skill">
				{{ translate('c_can') }}
			</span>
			<span v-else>
				{{ translate('c_knows') }}
			</span>

			<span class="ml-1">{{ course_state.lessons.items[element].topic.value }}</span>
			
			<div class="steps-count">
				{{ translate('connected_steps_begin') }}
				{{ course_state.lessons.items[element].steps.length }}
				<template v-if="course_state.lessons.items[element].steps.length == 1">
					{{ translate('connected_steps_end_single') }}
				</template>
				<template v-else>
					{{ translate('connected_steps_end') }}
				</template>
				
			</div>

			<span class="drag action_left action_left_center_outside">
				<i class="las la-arrows-alt"></i>
			</span>

			<span class="action_right action_right_center_outside"
				@click="removeItem(element)">
				<i class="las la-trash-alt"></i>
			</span>
		</div>
	</template>
	<template #footer v-if="type == 'skills'">
		<div class="lesson__skill_blank-text" :key="generateKey()">
			{{ translate('lesson_blank') }}
		</div>
	</template>
</draggable>
</template>

<script>
/*
eslint-disable vue/no-unused-components
*/
import { ref, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import append from '@/composables/append'

import draggable from 'vuedraggable'
import course_state from '@/store/course'
import messengerStore from '@/store/messenger'
import generateKey from '@/composables/generateKey'
import loader from "@/store/loader"

import { createSprint } from '@/store/classes/nodes/Sprint'
import { createLesson } from '@/store/classes/nodes/Lesson'
import { createSkill } from '@/store/classes/nodes/Skill'

import ContentEditable from '@/components/content-editable'
//import ContentEditableHack from './content-editable-hack'
import translate from './translate'
import VButton from '@/components/form/v-button'
import VSelect from '@/components/form/v-select'
import myScroll from '@/composables/myScroll'

export default {
	setup(props) {
		const drag = ref(false)
		
		const route = useRoute()
		const router = useRouter()

		function editLesson(id) {
			loader.workspace.lesson = true

			myScroll({
				element: document.getElementById("workspace__lesson__section"),
				top: 0,
				behavior: "instant",
			})

			if(course_state.lessons.items[id].plan_id) {
				course_state.lesson.open(course_state.lessons.items[id].plan_id)
			} else {
				course_state.lesson.create(id)
			}

			router.push(append(route, "workspace/lesson"))

			messengerStore.hide()
		}
		
		function removeItem(element) {
			if(confirm(translate('c_delete'))) {
				course_state.lessons.items[element].delete()
			}
		}

		function addSprint(moduleId) {
			const sprint = createSprint({
				parentId: moduleId,
			})

			createLesson({
				parentId: sprint.id,
			})

			createLesson({
				parentId: sprint.id,
			})

			createLesson({
				parentId: sprint.id,
			})
		}

		function addLesson(sprintId, where, index) {
			if(where == 'after') index += 1

			const lesson = createLesson()

			lesson.moveTo(sprintId, index)
		}

		function put(to, from) {
			//console.log(props.type, from.options.group.name)
			if(props.type === 'skills') {
				//console.log('GROUP NAME ', from.options.group.name)
				if(from.options.group.name.indexOf("group-topics") > - 1 || 
					from.options.group.name == 'skills') {
						//console.log('PUT')
						//console.log(to, from)
						return true
					}
			}
			return props.type
		}

		function change(e, parentId) {
			function create(topicId, newIndex) {
				const node = createSkill()

				node.linkToTopic(topicId).moveTo(parentId, newIndex)
			}

			if(e.added) {
				console.log(e.added.element, course_state.lessons.items)

				if(props.type === 'skills' && course_state.lessons.dragFromTopics) {
					course_state.lessons.items[parentId].remove(e.added.element, "childs")
					
					if(course_state.topics.items[e.added.element].childs.length > 0) {
						let allMicroskills = course_state.topics.items[e.added.element].getLowestChilds()
						allMicroskills.forEach( microskillId => {
							create(microskillId, null)
						})
					} else {
						create(e.added.element, e.added.newIndex)
					}
					course_state.lessons.dragFromTopics = false
					/*
					// course_state.lessons.items[parentId].remove(e.added.element, "childs")

					const topic = course_state.topics.items[ course_state.lessons.items[e.added.element].topic_id ]
					
					if(topic.childs.length > 0) {
						course_state.lessons.items[parentId].remove(e.added.element, "childs")

						let allMicroskills = topic.getLowestChilds()
						allMicroskills.forEach( microskillId => {
							create(microskillId, null)
						})
					} else {
						course_state.lessons.items[e.added.element].parentId = parentId
						topic.skills.push(e.added.element)
						// create(e.added.element, e.added.newIndex)
						// node.linkToTopic(topicId).moveTo(parentId, newIndex)
					}
					course_state.lessons.dragFromTopics = false
					*/
				} else {
					course_state.lessons.items[e.added.element].moveTo(parentId)
					//course_state.lessons.items[e.added.element].parentId = parentId
				}
			}
			//console.log(e, parentId)
		}

		function itemKey(element) {
			return element
		}

		function highlight(skillId, isHighlighting) {
			//console.log('highlight topic')
			if(course_state.lessons.items[skillId] && !drag.value) {
				const topicId = course_state.lessons.items[skillId].topic_id

				const sameSkills = course_state.topics.items[topicId].skills

				const steps = course_state.lessons.items[skillId].steps

				if(isHighlighting) {
					document.getElementById("workspace__lessons").classList.add("highlighted")
					document.getElementById("workspace__topics").classList.add("highlighted")

					
					
					course_state.lessons.items[skillId].highlight(true)

					sameSkills.forEach( sameSkillId => {
						course_state.lessons.items[sameSkillId].highlight(true)
					})

					if(steps.length > 0 && course_state.lesson.loaded && course_state.lessons.items[skillId].parent.plan_id === course_state.lesson.selected_id ) {
						document.getElementById("workspace__lesson").classList.add("highlighted")

						steps.forEach( stepId => {
							course_state.lesson.items[stepId].highlight(true)
							document.getElementById(stepId+'___'+skillId).classList.add("highlighted")
						})
					}

					
				}
				else {
					document.getElementById("workspace__topics").classList.remove("highlighted")
					document.getElementById("workspace__lessons").classList.remove("highlighted")
					

					course_state.lessons.items[skillId].highlight(false)

					sameSkills.forEach( sameSkillId => {
						course_state.lessons.items[sameSkillId].highlight(false)
					})

					if(steps.length > 0 && course_state.lesson.loaded && course_state.lessons.items[skillId].parent.plan_id === course_state.lesson.selected_id ) {
						document.getElementById("workspace__lesson").classList.remove("highlighted")

						steps.forEach( stepId => {
							course_state.lesson.items[stepId].highlight(false)
							document.getElementById(stepId+'___'+skillId).classList.remove("highlighted")
						})
					}
				}

				course_state.topics.items[topicId].highlight(isHighlighting)
			}
			
			//console.log(skillId, isHighlighting)
		}

		const computedContainerClass = computed(() => {
			let result = ""
			if(props.containerClass) result = props.containerClass
			else if(props.type == 'skills') {
				result = 'lesson__skills-container messenger-highlight  messenger-highlight-drag-skills-to-lessons'
				if(course_state.lessons.items[props.parentId].childs.length == 0) result += " lesson__skills-blank"
			}

			return result
		})

		function move(e) {
			if(props.type === 'skills' && e.from != e.to) {
				for(let i = 0; i < e.relatedContext.list.length; i++) {
					const id = e.relatedContext.list[i]

					if(course_state.lessons.items[id].topic_id === course_state.lessons.items[e.draggedContext.element].topic_id) {
						return false
					}
				}
			}
		}

		const list = computed(() => {
			if(props.type == 'skills') {
				const childs = course_state.lessons.items[props.parentId].childs

				const filtered = childs.filter( item => {
					return course_state.lessons.items[ item ].type == 'skill'
				})

				return filtered
			} else {
				return course_state.lessons.items[props.parentId].childs
			}
		})

		return {
			drag,
			translate,
			removeItem,
			addSprint,
			course_state,
			addLesson,
			put,
			computedContainerClass,
			change,
			itemKey,
			generateKey,
			highlight,
			editLesson,
			move,
			list
		}
	},
	props: {
		type: {
			required: true,
			validator: function(value) {
				return ['modules', 'sprints', 'lessons', 'skills'].indexOf(value) !== -1
			}
		},
		parentId: {
			required: true,
			type: String,
		},
		containerClass: {
			default() {
				return false
			}
		},
	},
	components: {
		draggable,
		ContentEditable,
		VButton,
		//ContentEditableHack,
		VSelect
	},
	name: "lessons-items",
}
</script>

<style scoped lang="scss">
@import './index';
</style>
<style lang="scss">
.lesson__skills-container .row {
	padding: 0;
	height: auto;

	.item {
		background: none;
		border: 5px solid rgba(0,0,0,.05);
		padding: 0.5rem 0.75rem;
		border-radius: 20px;
		position: relative;
		margin: 0 .5rem .5rem 0;
		width: auto;
	}
}
</style>
<style>
.workspace__lessons .add-item-solo-container {
	display: none!important;
}
</style>
<!--
const move = (e) => {
			if(e.relatedContext.list.length > 0) {
				course_state.lessons.items[e.draggedContext.element].parentId = course_state.lessons.items[e.relatedContext.element].parentId
			} else {
				return false
			}
		}
-->