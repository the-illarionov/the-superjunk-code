<template>
<draggable 
	tag="transition-group"
	:component-data="{ 
		tag: 'div', 
		name: !drag ? 'flip-list' : null, 
		type: 'transition-group', 
		class: 'column' }"
	:list="course_state.topics.items[parentId].childs"
	animation="250"
	:item-key="itemKey"
	:group="{ name: 'group-topics', pull: pull }"
	handle=".drag"
	ghostClass="ghost"
	@start="dragStart"
    @end="dragEnd"
	@change="change"
	:move="move">
	<!--
	:clone="clone"
	-->
	<template #item="{ element, index }">
		<div class="row">
			<div class="item action-container" 
				@mouseenter="highlight(element, true)"
				@mouseleave="highlight(element, false)"
				@click="onClick"
				:id="element"
				:class="itemClass(element)">
				<div class="text">
					<div>
						<select class="select" v-model="course_state.topics.items[element].show_skill">
							<option :value="true">{{ translate('can') }}</option>
							<option :value="false">{{ translate('knows') }}</option>
						</select>
						<!--
						<transition name="top-to-bottom">
							<span class="mr-1 action-container" v-show="course_state.topics.items[element].show_skill">
								{{ translate('can') }}
								<span class="action_bottom" @click="hideSkill(element)">
									<i class="las la-times" />
								</span>
							</span>
						</transition>
						-->
						<content-editable
							lower-case
							class="inline"
							v-model="course_state.topics.items[element].value"
							:placeholder="course_state.topics.items[element].placeholder" />
					</div>
						
					<div class="lessons-count" v-if="course_state.topics.items[element].childs.length === 0">
						{{ translate('connected_lessons_begin')}} {{ course_state.topics.items[element].skills.length }}
						<template v-if="course_state.topics.items[element].skills.length == 1">
							{{ translate('connected_lessons_end_single')}}
						</template>
						<template v-else>
							{{ translate('connected_lessons_end')}}
						</template>
					</div>
				</div>

				<span class="drag action_left">
					<i class="las la-arrows-alt"></i>
				</span>
				
				<span class="action_top" @click="addItem('before', index)">
					<i class="las la-plus-circle" />
				</span>
				<span class="action_bottom" @click="addItem('after', index)">
					<i class="las la-plus-circle" />
				</span>

				<span class="action_left action_left_center_outside" @click="addColumn(element, 'before', index)">
					<i class="las la-plus-circle" />
				</span>
				<span class="action_right action_right_center_outside" @click="addColumn(element, 'after', index)">
					<i class="las la-plus-circle" />
				</span>
				
				<template v-if="course_state.topics.items[element].level === 1">
					<span class="action_right"
						@click="removeItem(element, index)"
						v-show="course_state.topics.items[element].parent.childs.length > 1">
						<i class="las la-trash-alt"></i>
					</span>
				</template>
				<template v-else>
					<span class="action_right"
						@click="removeItem(element, index)">
						<i class="las la-trash-alt"></i>
					</span>
				</template>

				<i class="item__arrow" />
				
				<!--
				<div>
					el: {{ element }}
					<br />
					parent: {{ course_state.topics.items[element].parentId }}
					<br />
					value: {{ course_state.topics.items[element].value }}<br />
					childs: {{ course_state.topics.items[element].childs }}<br />
					level: {{ course_state.topics.items[element].level }}<br />
					skills: {{ course_state.topics.items[element].skills }}
				</div>
				-->
			</div>
			
			<topic-items 
				v-if="course_state.topics.items[element].childs.length > 0"
				:parentId="element"
				/>
			
			<!--
			<div 
				v-if="course_state.topics.items[element].childs.length === 0"
				class="add-item-solo-container" 
				@click="addColumn(element, 'after', 0)" 
				:key="generateKey">
				<i class="las la-plus-circle scale-on-hover mr-1" />
				{{ translate('add_microskill') }}
			</div>
			-->
		</div>
	</template>
	<!--
	<template #footer v-if="isLastColumn">
		<div
			class="add-last-column"
			@click="addColumn(element, 'after', 0)" 
			:key="generateKey">
			<i class="las la-plus-circle scale-on-hover mr-1" />
			Добавить колонку
		</div>
	</template>
	-->
</draggable>
</template>

<script>
import { ref } from "vue"
import course_state from "@/store/course"
import draggable from 'vuedraggable'

//import useLoader from "@/store/loader"
import { createTopic } from '@/store/classes/nodes/Topic'
import translate from './translate'

import generateKey from '@/composables/generateKey'
import ContentEditable from '@/components/content-editable'

export default {
	setup(props) {
		//const clonedNodeId = ref(null)

		function findUpTag(el) {
			while (el.parentNode) {
				el = el.parentNode;
				if (el.classList.contains("item"))
					return el;
			}
			return null;
		}

		function onClick(e) {
			let item
			if(
				e.target.classList.contains("select") ||
				e.target.classList.contains("content-editable") ||
				e.target.classList.contains("las") || 
				e.target.classList.contains("lar")) return
			else if(e.target.classList.contains("item")) {
				item = e.target
			} else {
				item = findUpTag(e.target)
			}

			item.querySelector(".content-editable").focus()
		}

		function addItem(where, index) {
			if(where == 'after') index += 1
			
			const node = createTopic({
				container: course_state.topics.items,
			})
			
			node.moveTo(props.parentId, index)
		}

		function removeItem(element, index) {
			if(confirm(translate('c_delete'))) {
				console.log(index)
				const parentId = course_state.topics.items[element].parentId

				if(parentId !== 'supernode-topics') course_state.topics.items[element].moveChildsTo(parentId, index).delete(false)
				else course_state.topics.items[element].delete()
				
			}
		}

		function pull(to) {
			return to.options.group.name === 'skills' ? 'clone' :  true
		}

		function highlight(topicId, isHighlighting) {
			if(course_state.topics.items[topicId] && !drag.value) {
				let skillsIds = course_state.topics.items[topicId].skills

				if(isHighlighting) {

					document.getElementById("workspace__topics").classList.add("highlighted")
					if(skillsIds.length > 0) {
						document.getElementById("workspace__lessons").classList.add("highlighted")
					}
				}
				else {
					document.getElementById("workspace__lessons").classList.remove("highlighted")
					document.getElementById("workspace__topics").classList.remove("highlighted")
				}

				course_state.topics.items[topicId].highlight(isHighlighting)

				skillsIds.forEach( skillId => {
					course_state.lessons.items[skillId].highlight(isHighlighting)
				})
			}
		}



		const drag = ref(false)

		function dragStart() {
			drag.value = true
			course_state.lessons.dragFromTopics = true
		}

		function dragEnd() {
			drag.value = false
		}

		function itemKey(element) {
			return element
		}

		function itemClass(element) {
			let result

			if(course_state.topics.items[element].level === 1) result = "messenger-highlight  messenger-highlight-initial-skill"
			else if(course_state.topics.items[element].level === 2) result = "messenger-highlight  messenger-highlight-start-splitting"
			else if(course_state.topics.items[element].childs.length === 0) result = "item-last messenger-highlight messenger-highlight-micro-skills messenger-highlight-drag-skills-to-lessons"

			return result
		}
		

		function change(e) {
			if(e.added) course_state.topics.items[e.added.element].parentId = props.parentId
			//console.log(e, parentId)
		}

		

		function addColumn(elementId, where, index) {
			let newNode = createTopic({
				container: course_state.topics.items,
			})

			if(where == 'after') {
				course_state.topics.items[elementId].moveChildsTo(newNode.id)

				const skillsIds = course_state.topics.items[elementId].skills

				for(let i=0; i < skillsIds.length; i++) {
					course_state.lessons.items[skillsIds[i]].topic_id = newNode.id
					newNode.skills.push(skillsIds[i])
				}
				course_state.topics.items[elementId].skills = []

				newNode.moveTo(elementId)
			} else {
				let parentId = course_state.topics.items[elementId].parentId
				course_state.topics.items[elementId].moveTo(newNode.id)
				newNode.moveTo(parentId, index)
			}
			
		}

		/*
		function clone(id) {
			console.log('qqq')
			
			const node = new Node({
				container: course_state.lessons.items,
				type: 'skill',
				topic_id: id,
			})
			clonedNodeId.value = node.id
			return node.id
			
			return id
		}
		*/

		function move(e) {
			for(let i = 0; i < e.relatedContext.list.length; i++) {
				const id = e.relatedContext.list[i]
				if(course_state.lessons.items[id] && course_state.lessons.items[id].topic_id === e.draggedContext.element) {
					return false
				}
			}
		}

		return {
			onClick,
			addItem,
			removeItem,
			drag,
			pull,
			course_state,
			generateKey,
			dragStart,
			itemKey,
			//containerClass,
			//hideSkill,
			translate,
			change,
			highlight,
			dragEnd,
			addColumn,
			//rowClass,
			//clone,
			move,
			itemClass
			//isLastColumn
		}
	},
	props: {
		parentId: {
			required: true,
			type: String,
		},
	},
	components: {
		draggable,
		ContentEditable
	},
	name: "topic-items",
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
<!--
const move = (e) => {
	if(e.relatedContext.component._sortable.options.group.name.indexOf('group-topics') > -1) {
		if(e.relatedContext.list.length > 0) {
			course_state.topics.items[e.draggedContext.element].parentId = course_state.topics.items[e.relatedContext.element].parentId
		} else {
			return false
		}
	}
}

/*
		const isLastColumn = computed(() => {
			let childsCount = 0
			const childs = course_state.topics.items[props.parentId].childs
			for(let i = 0; i < childs.length; i++) {
				childsCount += course_state.topics.items[childs[i]].childs.length
			}

			if(childsCount === 0) return true
			return false
		})
		*/

		/*
		const containerClass = computed(() => {
			//console.log(course_state.topics.items[props.parentId])
			let returnClass = "column "
			if(course_state.topics.items[props.parentId].level === 0) returnClass += "column-main"
			//else if(isLastColumn.value) returnClass += "column-last"

			return returnClass
		})
		
		
		
		function rowClass(element) {
			return {
				'row-last' : course_state.topics.items[element].childs.length === 0,
			}
		}
		*/



/*
		const { loader } = useLoader()	
		
		function hider(callback) {
			loader.main = true
			setTimeout(() => {
				loader.main = false
			}, 1000)

			setTimeout(callback, 200)
			//callback()
		}
		*/
-->