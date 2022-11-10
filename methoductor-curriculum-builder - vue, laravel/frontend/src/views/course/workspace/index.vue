<template>
<div class="workspace-container" id="workspace-container">
	<!--
	<div class="arrows">
		<transition name="top-to-bottom">
			<i class="las scale-on-hover la-arrow-circle-left mr-auto"
				@click="course_state.switcher.navigate($route, 'prev')"
				v-if='course_state.switcher.currentIndex > 0'></i>
		</transition>
		<transition name="top-to-bottom">
			<i class="las scale-on-hover la-arrow-circle-right ml-auto"
				@click="course_state.switcher.navigate($route, 'next')"
				v-if='course_state.switcher.currentIndex < course_state.switcher.routes.length - 1'></i>
		</transition>
	</div>
	-->
	<div class="workspace-wrapper">
		<div id="workspace-mover" class="workspace-mover">
		<template v-if="course_state.loaded">
			<div class="workspace-section" id="workspace__topics__section"  :class="course_state.topics.expanded ? 'expanded' : ''">
				<h2 class="header header-2 ml-3">
					<span>
						2. {{ translate('c_navigation.topics')}}
					</span>
					<span class="expander scale-on-hover"
						@click="course_state.expandController('topics', $route.params.type, !course_state.topics.expanded)">
						<i class="las la-arrows-alt-h"></i>
					</span>
					<span class="ml-auto">
						<i class="las scale-on-hover la-arrow-circle-right"
						@click="course_state.switcher.navigate($route, 1)"
						v-if="$route.params.type == 'topics'"></i>
					</span>

						<!--
						<i class="scale-on-hover las la-question-circle" @click="openHint(0)" />
						-->
						
						<!--
						<v-button
							class="expander"
							@click="course_state.expandController('topics', $route.params.type, !course_state.topics.expanded)">
							Свернуть
						</v-button>
						-->
					
				</h2>
				<topics />
			</div>

			<div class="workspace-section" id="workspace__lessons__section"  :class="course_state.lessons.expanded ? 'expanded' : ''">
				<h2 class="header-2 header">
					<span>
						3. {{ translate('c_navigation.lessons')}}
					</span>
					<span class="expander scale-on-hover"
						@click="course_state.expandController('lessons', $route.params.type, !course_state.lessons.expanded)">
						<i class="las la-arrows-alt-h"></i>
					</span>
					<span class="ml-auto" v-if="$route.params.type == 'lessons'">
						<i class="las scale-on-hover la-arrow-circle-left"
						@click="course_state.switcher.navigate($route, 0)"></i>

						<i class="las scale-on-hover la-arrow-circle-right"
						@click="course_state.switcher.navigate($route, 2)"></i>
					</span>
					<!--
					<span class="action-container active">
						3. {{ translate('c_navigation.lessons')}}
						<i class="scale-on-hover las la-question-circle" @click="openHint(3)" />
						<span class="expander action_right action_right_center"
							@click="course_state.expandController('lessons', $route.params.type, !course_state.lessons.expanded)">
							<i class="las la-arrows-alt-h"></i>
						</span>
					</span>
					<span>
						<i class="las scale-on-hover la-arrow-circle-left"
						@click="course_state.switcher.navigate($route, 0)"
						v-if="$route.params.type == 'lessons'"></i>

						<i class="las scale-on-hover la-arrow-circle-right"
						@click="course_state.switcher.navigate($route, 2)"
						v-if="$route.params.type == 'lessons'"></i>
					</span>
					-->
				</h2>
				<lessons />
			</div>
			
			
			<div class="workspace-section" id="workspace__lesson__section"  :class="course_state.lesson.expanded ? 'expanded' : ''">
				<h2 class="header-2 header">
					<span>
						4. {{ translate('c_navigation.lesson')}}
						<!--
						<i class="scale-on-hover las la-question-circle" @click="openHint(7)" />
						<span class="expander action_right action_right_center"
							@click="course_state.expandController('lesson', $route.params.type, !course_state.lesson.expanded)">
							<i class="las la-arrows-alt-h"></i>
						</span>
						-->
					</span>

					<span class="ml-auto" v-if="$route.params.type == 'lesson'">
						<i class="las scale-on-hover la-arrow-circle-left"
						@click="course_state.switcher.navigate($route, 1)"
						></i>

						<i class="las scale-on-hover la-arrow-circle-right"
						@click="course_state.switcher.navigate($route, 3)"></i>
					</span>

				</h2>
				<lesson />
			</div>

			<div class="workspace-section" id="workspace__step__section"  :class="course_state.lesson.expanded ? 'expanded' : ''">
				<h2 class="header-2 header">
					<span>
						5. {{ translate('c_navigation.section')}}
						<!--
						<span class="expander"
							@click="course_state.expandController('lesson', $route.params.type, !course_state.lesson.expanded)">
							<i class="las la-arrows-alt-h"></i>
						</span>
						-->
					</span>
					<router-link 
						:to="append($route, 'export')"
						custom
						v-slot="{ navigate }">
						<i class="las ml-auto scale-on-hover la-arrow-circle-right"
						@click="navigate"></i>
					</router-link>
				</h2>
				<fill-lesson-section />
			</div>
		</template>
		</div>
	</div>

	<!--
	<i class="hint scale-on-hover las la-question-circle" @click="messengerStore.show()"></i>
	-->
	
</div>
</template>

<script>
/*
eslint-disable vue/no-unused-components
*/
import { watch, onMounted, onBeforeUnmount } from "vue"
import { useRoute } from "vue-router"

import course_state from '@/store/course'

import messengerStore from '@/store/messenger'

import Topics from './topics'
import Lessons from './lessons'
import Lesson from './lesson'
import FillLessonSection from './section'

import translate from './translate'
//import VButton from '@/components/form/v-button'
// import dragscroll from '@/directives/dragscroll'

export default {
	setup() {
		const route = useRoute()

		function resetExpands() {
			course_state.topics.expanded = true
			course_state.lessons.expanded = true
		}

		function openHint(index) {
			messengerStore.show()
			messengerStore.types.hints.current = index
		}

		watch(() => route.params.type, to => {
			if(
				to == 'topics' ||
				to == 'lessons' || 
				to == 'lesson' || 
				to == 'section'
			) {
				resetExpands()

				// console.log('route watcher')

				course_state.expandController( to, to )
				// routeTypeWatcher(to)
			}
		})

		onMounted(() => {
			document.querySelector("#main-wrapper").classList.add("workspace")

			course_state.expandController( route.params.type, route.params.type )

			if(!localStorage.getItem("hideMessenger")) {
				messengerStore.types.hints.current = 0
				messengerStore.show()
			}
		})

		onBeforeUnmount(() => {
			document.querySelector("#main-wrapper").classList.remove("workspace")
			messengerStore.hide()
		})

		return {
			course_state,
			translate,
			messengerStore,
			openHint,
		}
	},
	props: {
		type: {},
	},
	components: {
		Topics,
		Lessons,
		Lesson,
		FillLessonSection,
		//VButton,
	},
	directives: {
		// dragscroll
	},
}
</script>

<style lang="scss" scoped>
@import './index';
</style>