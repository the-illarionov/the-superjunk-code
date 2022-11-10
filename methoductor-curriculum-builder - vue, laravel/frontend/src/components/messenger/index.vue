<template>
	<div class="messenger" ref="messagesContainer" :class="messengerStore.visible ? 'visible' : ''">
		<!--
		<div class="messages-container" >
		-->
			<!--
			<transition-group name="left-to-right">
			-->
				<div class="message" v-for="message in filteredMessages" :key="message.id" :id="'message-' + message.id">	
					<component :is="message.component">
					</component>
					<!--
					<span>{{ message.time }}</span>
					-->
					<div class="row mt-3" v-if="message.type == 'hints'">
						<div class="col-lg-6 mb-3">
							<v-button 
								block 
								@click="changeMessage(message, 'prev')" 
								v-if="messengerStore.types.hints.items.indexOf(message.component) > 0">
								<i class="las la-arrow-left"></i>
								{{ translate('c_back') }}
							</v-button>
						</div>
						<div class="col-lg-6">
							<v-button 
								block 
								@click="changeMessage(message, 'next')" 
								v-if="messengerStore.types.hints.items.indexOf(message.component) < messengerStore.types.hints.items.length - 1">
								{{ translate('c_next') }}
								<i class="las la-arrow-right"></i>
							</v-button>
							<v-button 
								block 
								@click="messengerStore.hide()"
								v-else>
								{{ translate('c_understood') }}
							</v-button>
						</div>
					</div>
					
				</div>
			<!--
			</transition-group>
			-->
		<!--
		</div>
		-->
		<i @click="messengerStore.hide()" class="close las la-times scale-on-hover"></i>
		<!--
		<div class="tags">
			<span v-for="(tag, index) in messengerStore.types" :key="index" :class="{ 'active': tag.active == true }" @click="tag.active = !tag.active">
				{{ tag.name }}
			</span>
		</div>
		-->
	</div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

import messengerStore from '@/store/messenger'
//import courseStore from '@/store/course'

import VButton from "@/components/form/v-button"
import translate from './translate'
import myScroll from '@/composables/myScroll'
import append from '@/composables/append'

import initialSkill from '@/components/messenger/components/hints/initial-skill'
import startSplitting from '@/components/messenger/components/hints/start-splitting'
import microSkills from '@/components/messenger/components/hints/micro-skills'
import dragSkillsToLessons from '@/components/messenger/components/hints/drag-skills-to-lessons'
import addStates from '@/components/messenger/components/hints/add-states'
import combineLessons from '@/components/messenger/components/hints/combine-lessons'
import autoGeneration from '@/components/messenger/components/hints/auto-generation'
import openLesson from '@/components/messenger/components/hints/open-lesson'

import { ref, computed, watch, nextTick } from "vue"

export default {
	setup() {
		const messagesContainer = ref(null)
		const router = useRouter()
		const route = useRoute()

		function scrollTopics() {
			myScroll({
				left: 9999,
				element: document.querySelector("#workspace__topics__section"),
			})
		}

		watch(() => messengerStore.types.hints.current, (newIndex) => {
			const type = messengerStore.types.hints.items[messengerStore.types.hints.current]
			// здесь надо будет более хитрую логику сделать когда варнинги появтяся
			messengerStore.messages.current = newIndex

			messengerStore.messages.add( type, 'hints' )

			messengerStore.showHighlights(type)

			if(newIndex >= 0 && newIndex < 3) {
				router.push(append(route, 'workspace/topics')).then(() => {
					// courseStore.expandController('topics', 'topics', true)
				})
				if(newIndex === 2) {
					scrollTopics()
				}
				// courseStore.expandController('lessons', route.params.type, true)
			} else if(newIndex >= 3 && newIndex < 7) {
				const currentType = route.params.type
				router.push(append(route, 'workspace/lessons')).then(() => {
					// courseStore.expandController('lessons', 'lessons', true)
					if(currentType === 'lessons') {
						scrollTopics()
					} else {
						setTimeout(scrollTopics, 800)
					}		
				})

				// console.log(courseStore.lessons.expanded)
			} else if(newIndex >= 7) {
				router.push(append(route, 'workspace/lesson'))
			}
			// если кончились - пускаем по кругу, еще тут отсечка на начало подсказок по урокам
			/*
			if(store.messages.current == 4) {
				console.log('lessons')
				store.messages.current = 0
			}
			*/
		})

		// console.log(courseStore)

		const filteredMessages = computed(() => {
			let list = []
			
			messengerStore.messages.items.forEach(message => {
				if(messengerStore.types[message.type].active) list.push(message)
			})
			return list
		})

		watch(() => filteredMessages, () => {
			nextTick(() => {
				let lastMessage = filteredMessages.value[ filteredMessages.value.length - 1 ]

				myScroll({
					element: messagesContainer.value,
					top: lastMessage.domElement().offsetTop - 18,
				})
			})
		}, { deep: true })

		function changeMessage(message, direction) {
			let amount = 1
			if(direction == 'prev') amount = -1
			messengerStore.types.hints.current = messengerStore.types.hints.items.indexOf( message.component ) + amount
		}

		return {
			messengerStore,
			translate,
			filteredMessages,
			messagesContainer,
			changeMessage,
			/*
			tags,
			messagesList,
			sendNextMessage,
			translate,
			messages
			*/
		}
	},
	components: {
		initialSkill,
		startSplitting,
		microSkills,
		combineLessons,
		dragSkillsToLessons,
		addStates,
		autoGeneration,
		openLesson,

		VButton
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>