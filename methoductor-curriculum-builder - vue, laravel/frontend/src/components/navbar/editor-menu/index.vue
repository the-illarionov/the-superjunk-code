<template>
<ol class="menu-list nested-ol">
	<!--
	<li>
		<v-link
			path="audience"
			:text="translate('c_navigation.set_audience')"
			/>
	</li>
	<li>
		<v-link
			path="questions"
			:text="translate('c_navigation.questions')"
			/>
	</li>
	-->
	<li>
		<v-link
			path="goal"
			:text="translate('c_navigation.goal')"
			/>
	</li>
	<li>
		<v-link
			path="workspace/topics"
			:text="translate('c_navigation.topics')"
			/>
	</li>
	<!--
	<li>
		<v-link
			path="workspace/lessons"
			:text="translate('c_navigation.lessons')"
			/>
	</li>
	-->

	<li>
		<v-link
			path="workspace/lessons"
			:text="translate('c_navigation.lessons')"
			/>
	</li>

	<li>
		<v-link
			path="workspace/lesson"
			:text="translate('c_navigation.lesson')"
			/>
	</li>

	<li>
		<v-link
			path="workspace/section"
			:text="translate('c_navigation.section')"
			/>
	</li>

	<li>
		<v-link
			path="export"
			:text="translate('c_navigation.export')"
			/>
	</li>
</ol>
<!--
<div class="arrows">
	<transition name="top-to-bottom">
		<i class="las scale-on-hover la-arrow-circle-left"
			@click="course_state.switcher.navigate($route, 'prev')"
			v-if='course_state.switcher.currentIndex > 0'></i>
	</transition>
	<transition name="top-to-bottom">
		<i class="las scale-on-hover la-arrow-circle-right"
			@click="course_state.switcher.navigate($route, 'next')"
			v-if='course_state.switcher.currentIndex < course_state.switcher.routes.length - 1'></i>
	</transition>
</div>
-->
<!--
<h3 class="header-2 header"
	:style="'display: none; opacity: ' + opacity">
	{{ translate("c_navigation.topics") }}
</h3>
-->
</template>

<script>
import { onMounted, watch } from "vue"
//import dragscroll from '@/directives/dragscroll'
import VLink from './link'
import translate from './translate'
//import useOpacity from '@/views/course/workspace/composables/opacity'
import { useRoute } from "vue-router"
//import append from '@/composables/append'
import course_state from '@/store/course'

export default {
	setup() {
		//const opacity = useOpacity(1)

		// const currentRouteIndex = ref(0)
		const route = useRoute()
		// const router = useRouter()
		
		/*
		const routes = [
			"workspace/topics",
			"workspace/lessons",
			"workspace/lesson"
		]

		function routeTypeWatcher() {
			for(let i = 0; i < routes.length; i++) {
				if(route.path.indexOf(routes[i]) > - 1) {
					currentRouteIndex.value = i
					//console.log(i)
					break
				}
			}
		}

		function navigate(direction) {
			if(direction == 'prev') currentRouteIndex.value--
			else currentRouteIndex.value++

			router.push(append(route, routes[currentRouteIndex.value]))
			//console.log(direction, routes)
		}
		*/

		watch(() => route.params.type, () => {
			course_state.switcher.changeCurrentIndex(route)
		})

		onMounted(() => {
			course_state.switcher.changeCurrentIndex(route)
		})

		return {
			translate,
			//navigate,
			//currentRouteIndex,
			//routes,
			course_state
			//opacity
		}
	},
	components: {
		VLink
	},
	directives: {
		//dragscroll
	},
}
</script>

<style scoped lang="scss">
@import './index';
</style>