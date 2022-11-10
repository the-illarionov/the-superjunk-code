<template>
<div class="workspace__topics" id="workspace__topics">
	<!--
	<div style="width: 80vw">
		<p>{{ course_state.topics.items }}</p>
		<p>{{ course_state.lessons.items }}</p>
	</div>
	-->

	<!--
	<hints
		state-key="topics" />
	-->

	

	<!--
	<div class="topics__headers" style="display: none">
		<div class="topics__header action-container" 
			v-for="(header, index) in course_state.topics.headers"
			:key="index">
			<content-editable
				v-model="header.value"
				:placeholder="header.placeholder" />

			<template v-if="index > 0">
				<span class="action_left action_left_center_outside" @click="addColumn('before', index)">
					<i class="las la-plus-circle" />
				</span>
			</template>

			<template v-if="index < course_state.topics.max_level - 1">
				<span class="action_right action_right_center_outside" @click="addColumn('after', index)">
					<i class="las la-plus-circle" />
				</span>

				<span class="action_top"
					v-if="index > 0"
					@click="removeColumn(index)">
					<i class="las la-trash-alt"></i>
				</span>
			</template>
		</div>
	</div>
	-->
	
	<topic-items
		parentId="supernode-topics" />

	<!--
	<div @click="openTopicsHints">
		send first message
	</div>
	<div @click="showMessenger">
		show
	</div>
	<div @click="hideMessenger">
		hide
	</div>
	-->

	<!--
	<div class="bottom">
		<div class="bottom__section" 
			v-for="(header, index) in course_state.topics.headers"
			:key="index">

			<hint
				v-if="index === 0"
				state-key="topics"
				:step=0 />

			<hint
				v-else-if="index === 1 && index < course_state.topics.max_level - 1"
				state-key="topics"
				:step=1 />

			<hint
				v-else-if="index === course_state.topics.max_level - 1"
				state-key="topics"
				:step=2 />
		</div>
	</div>
	-->
</div>	
</template>

<script>
/*
import useCourseStore from '@/store/course'
import useLoader from "@/store/loader"
*/
import Items from './items'

import translate from './translate'
// import Node from '@/store/classes/Node'

// import ContentEditable from '@/components/content-editable'

/*
import Hints from '@/components/hints'
import Hint from '@/components/hint'
*/

// import messengerStore from '@/store/messenger'

export default {
	setup() {
		/*
		const { state: course_state } = useCourseStore()
		const { loader } = useLoader()
		
		*/
		/*
		const { sendNextMessage, showMessenger, hideMessenger } = useMessengerStore()
		function openTopicsHints() {
			sendNextMessage()
		}
		*/
		/*
		function addColumn(where, index) {
			hider(() => {
				if(where == 'after') index += 1
			
				course_state.topics.headers.splice(index, 0, {
					placeholder: translate('header_placeholder'),
				})
				
				let nodesByLevel = Node.getNodesByLevel(index, course_state.topics.items)

				nodesByLevel.forEach(id => {
					let newNode = new Node({
						container: course_state.topics.items,
						type: 'topic',
					})

					course_state.topics.items[id].moveChildsTo(newNode.id)
					newNode.moveTo(id)
				})
			})
		}

		function removeColumn(index) {
			if(confirm(translate('c_delete'))) {
				hider(() => {
					course_state.topics.headers.splice(index, 1)
					index++
					let nodesByLevel = Node.getNodesByLevel(index, course_state.topics.items)
					
					nodesByLevel.forEach(id => {
						let newParentId = course_state.topics.items[id].parentId
						course_state.topics.items[id].moveChildsTo(newParentId).delete(false)
					})
				})
			}
		}
		*/
		/*
		const width = computed(() => {
			return 100 - ((course_state.scrolled < 1 ? course_state.scrolled : 1) * 30) + 'vw';
		})
		*/

		/*
		function hider(callback) {
			loader.main = true
			setTimeout(() => {
				loader.main = false
			}, 1000)

			setTimeout(callback, 200)
		}
		*/

		return {
			translate,
			// openTopicsHints,
			//messengerStore,
			/*
			course_state,
			loader,
			addColumn,
			removeColumn
			*/
		}
	},
	props: {

	},
	components: {
		TopicItems: Items,
		/*
		Hints,
		Hint,
		*/
		// ContentEditable,
	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>