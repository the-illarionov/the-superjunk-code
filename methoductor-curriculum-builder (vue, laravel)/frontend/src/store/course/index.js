import { reactive, watch } from 'vue'
import { debounce } from "lodash"

import devices from './devices'
import topics from './topics'
import lessons from './lessons'
import lesson from './lesson'
import states from './states'
import lesson_templates from './lesson_templates'
import section from './section'

//import translate_lesson from '@/views/course/workspace/lesson/translate'

import router from '@/router/index'
//import application from '@/store/application'
import api from '@/api'

import { createTopic } from '@/store/classes/nodes/Topic'
import { createSkill } from '@/store/classes/nodes/Skill'
import { createLesson } from '@/store/classes/nodes/Lesson'
import { createSprint } from '@/store/classes/nodes/Sprint'
import { createModule } from '@/store/classes/nodes/Module'

import append from '@/composables/append'



const state = reactive({
	can_be_saved: false,
	is_demo: true,
	loaded: false,

	reset() {
		state.can_be_saved = false
		state.is_demo = true
		state.loaded = false
		state.switcher.currentIndex = 0

		state.topics.reset()
		state.lessons.reset()
		state.lesson.reset()
		state.states.reset()
		state.lesson_templates.reset()
	},

	stringifyTopicsAndLessons() {
		return JSON.stringify({
			topics_items: state.topics.items, 
			//topics_headers: state.topics.headers,
			lessons_items: state.lessons.items,
		})
	},
	loadTopicsAndLessons(json) {
		let structure = JSON.parse(json)
	
		for(let key in structure.topics_items) {
			let data = structure.topics_items[key]
			createTopic(data)
		}

		for(let key in structure.lessons_items) {
			let data = structure.lessons_items[key]

			switch(data.type) {
				case 'lesson':
					createLesson(data)
				break;

				case 'skill':
					createSkill(data)
				break;

				case 'sprint':
					createSprint(data)
				break;

				case 'module':
					createModule(data)
				break;
			}
			
		}

		/*
		// #REFACTORE ваще хз страная тема откуда появился этот child
		for(let key in structure.lessons_items) {
			const childs = state.lessons.items[key].childs

			for(let i=0; i < childs.length; i++) {
				if(!state.lessons.items[childs[i]]) {
					state.lessons.items[key].childs.splice(i, 1)
				}
			}
		}
		*/
	},
	expandController(to, routeType, expanded = null) {
		if(typeof expanded === "boolean") state[to].expanded = expanded
		
		let wrapper = document.getElementById("workspace-mover")
		let step

		switch(to) {
			case 'topics':
				step = 1
				state.lessons.expanded = false
				// if(typeof expanded !== "boolean") state.topics.expanded = true
			break;
			case 'lessons':
				step = 3
				// step = routeType == 'lessons' && !state[to].expanded && !application.is_mobile ? 1 : 2
			break;
			case 'lesson':
				step = 5
				//state.lessons.expanded = false
				// step = routeType == 'lesson' && !state[to].expanded && !application.is_mobile ? 2 : 3
			break;
			case 'section':
				step = 5
				//step = routeType == 'lesson' && !state[to].expanded && !application.is_mobile ? 3 : 4
			break;
		}

		wrapper.classList.remove("step-1", "step-2", "step-3", "step-4", "step-5")
		wrapper.classList.add("step-" + step)

		// console.log(state.lessons.expanded, expanded)

		// console.log('expandcontroller')
	},

	switcher: {
		animating: false,
		routes: [
			"workspace/topics",
			"workspace/lessons",
			"workspace/lesson",
			"workspace/section"
		],
		currentIndex: 0,
		changeCurrentIndex(route) {
			for(let i = 0; i < state.switcher.routes.length; i++) {
				if(route.path.indexOf(state.switcher.routes[i]) > - 1) {
					state.switcher.currentIndex = i
					break
				}
			}
		},
		navigate(route, index) {
			if(!state.switcher.animating) {
				state.switcher.animating = true
				setTimeout(() => {
					state.switcher.animating = false
				}, 1000)

				state.switcher.currentIndex = index

				/*
				if(direction == 'prev') state.switcher.currentIndex--
				else state.switcher.currentIndex++
				*/

				router.push(append(route, state.switcher.routes[state.switcher.currentIndex]))
			}
		}
	},
	topics,
	lessons,
	lesson,
	states,
	lesson_templates,
	devices,
	section,
})

const saveTopicsAndLessons = debounce(() => {
	if(state.can_be_saved && !state.is_demo) {
		api.put('courses/' + router.currentRoute.value.params.course_id,
		{
			id: router.currentRoute.value.params.course_id,
			structure: state.stringifyTopicsAndLessons()
		})
		console.log('save topics and lesson from api')
	}
}, 500)

const saveLessonPlan = debounce(() => {
	if(state.can_be_saved && !state.is_demo && state.lesson.selected_id) {
		api.put('lesson-plans/' + state.lesson.selected_id.replace("lesson_plan_",""),
		{
			structure: JSON.stringify( state.lesson.items )
		})
		console.log('save lesson plan from api')
	}
}, 500)

watch(() => state.topics.items, saveTopicsAndLessons, { deep: true })

watch(() => state.lessons.items, saveTopicsAndLessons, { deep: true })

watch(() => state.lesson.items, saveLessonPlan, { deep: true })

export default state