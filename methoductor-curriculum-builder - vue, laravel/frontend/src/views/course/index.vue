<template>
<div class="h-100">
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount } from "vue"
import { useRoute } from "vue-router"

import course_state from "@/store/course"
import api from '@/api'
import loader from '@/store/loader'

//import exportXlsx from '@/composables/export-xlsx'

export default {
	setup() {
		const route = useRoute()

		function loaded() {
			course_state.loaded = true
			
			//exportXlsx()

			setTimeout(() => {
				loader.main = false
				course_state.can_be_saved = true
			}, 700)
		}

		onBeforeMount(() => {
			loader.main = true

			course_state.states.fill()
			course_state.lesson_templates.fill()
			course_state.devices.fill()

			console.log('templates', course_state.lesson_templates.items)
			console.log('states', course_state.states.items)
			console.log('devices', course_state.devices.items)
			
			if(typeof route.params.course_id !== "undefined") {
				course_state.is_demo = false

				api.get('courses/' + route.params.course_id)
				.then(function (response) {
					if(response.data.structure) {
						course_state.loadTopicsAndLessons(response.data.structure)

						console.log('load from api success')
						console.log('topics: ', course_state.topics.items)
						console.log('lessons: ', course_state.lessons.items)
					}
					else {
						course_state.topics.fill()
						course_state.lessons.fill()

						console.log('load from api fill blank')
					}
					
					loaded()
				})

				
			} else {
				course_state.is_demo = true

				course_state.topics.fill()
				course_state.lessons.fill()

				/*
				if(localStorage.getItem("demo_course")) {
					fillJsonStructure(localStorage.getItem("demo_course"))
					console.log('load from ls success')
				} else {
					fillTopicsItems()
					fillLessonsItems()
					console.log('load from ls blank')
				}
				*/

				loaded()
			}

			//console.log(course_state.topics.items)
		})

		onBeforeUnmount(() => {
			course_state.reset()
		})

		

		return {
			course_state,
		}
	},
	/*
	beforeRouteEnter(to, from, next) {
        if(!localStorage.getItem("token")) next("/login")
        else next()
    },
	*/
	props: {

	},
    components: {
		
    }
}
</script>
<style scoped lang="scss">
@import "./index";
</style>


	<!--
	<div class="l-content">
		<v-card closeable class="mb-5 col-lg-6">
			<template v-if="locale == 'ru'">
				<p>Вы находитесь в демонстрационном режиме создания одного урока.</p>
				<p class="mb-0">
					Для создания всего курса нужно 
					<router-link to="/signup">
						зарегистрироваться.
					</router-link>
				</p>
			</template>
			<template v-else>
				<p>You are in the demo mode of creating a single lesson.</p>
				<p class="mb-0">
					To create the entire course, you need to
					<router-link to="/signup">
						sign up.
					</router-link>
				</p>
			</template>
		</v-card>
	</div>
	-->