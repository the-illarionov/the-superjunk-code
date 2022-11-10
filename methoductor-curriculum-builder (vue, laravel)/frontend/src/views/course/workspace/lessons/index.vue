<template>
<div class="workspace__lessons" id="workspace__lessons">
	<!--
	{{ course_state.states.items }}<br />
	{{ course_state.states.orderedItems }}
	-->
	<!--
	{{ course_state.lessons.items }}
	-->
	<!--
	<h2 class="header-2 mb-3">
		2. {{ translate('c_navigation.lessons')}}
		<hint
			state-key="lessons"
			:step=0 />
	</h2>
	-->

	<!--
	<div class="row mb-3">
		<div class="col-lg-6">
			<v-button
				class="mb-3 messenger-highlight messenger-highlight-auto-generation"
				block
				@click="generateLessons">
				{{ translate('auto_make_lessons') }}
			</v-button>
		</div>
		<div class="col-lg-6">
			<v-button
				block
				class="mb-3 messenger-highlight messenger-highlight-auto-generation"
				@click="bindStates">
				{{ translate('auto_make_states') }}
			</v-button>
		</div>
		
		
		<div class="ml-3">
			<div v-html="translate('auto_make_lessons_desc')" />
		</div>
		
	</div>
	-->
	<!--
	<hints
		state-key="lessons" />
	-->
	<p>Уроки генерируются яавтоматически.И про серии сказать.</p>
	
	<lessons-items
		type="modules"
		parentId="supernode-lessons" />

	<!--

	<div class="py-5">
		<v-button
			class="mr-3 mb-3"
			@click="addModule">
			<i class="las la-plus"></i>
			{{ translate('add_module') }}
		</v-button>
		<div v-html="translate('module_hint')"></div>
	</div>

	-->

	<div class="mb-5">
		<div>
		Включён автоматический режим создания уроков.<br />Мы сами привязали умения к урокам и определили состояния и шаблоны для каждого урока.
		</div>
		<v-button small>
			Отключить автоматический режим
		</v-button>
	</div>

	<preloader :show_loader="loader.workspace.lessons"/>
</div>
<!--
<div style="flex: none; margin-left: 100px">
	<under-development 
		type="lessons" />

	<h2 class="header-2 mt-5">
		{{ translate('path')}}
	</h2>

	<div v-html='translate("path_desc")' />
	
	<p class="mb-5">
		<img  class="w-100" :src="require('@/assets/images/' + translate('subtopics_path'))" />
	</p>
	
</div>
-->
</template>

<script>
import translate from './translate'
import course_state from '@/store/course'
//import { clone, flatten } from "lodash"
//import { groupBy } from "lodash"
import { find, flatten } from 'lodash'

import { Node } from '@/store/classes/nodes/Node'
import { createModule } from '@/store/classes/nodes/Module'
import { createSprint } from '@/store/classes/nodes/Sprint'
import { createLesson } from '@/store/classes/nodes/Lesson'
import { createSkill } from '@/store/classes/nodes/Skill'

import Items from './items'
import VButton from '@/components/form/v-button'
import loader from "@/store/loader"
import Preloader from "@/components/preloader"
//import UnderDevelopment from '../under-development'

//import Hints from '@/components/hints'
//import Hint from '@/components/hint'

export default {
	setup() {
		function addModule() {
			const module = createModule({
				parentId: 'supernode-lessons',
			})
			
			const sprint = createSprint({
				parentId: module.id,
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

		function skillGatherer(lessons, lessonIndex) {
			let firstLesson = lessons[ lessonIndex - 2]
			let secondLesson = lessons[ lessonIndex - 1]
			let skills = []

			if(firstLesson.type !== 'blank' ) {
				skills[0] = firstLesson.skills
			}

			if(secondLesson.type !== 'blank' ) {
				skills[1] = secondLesson.skills
			}

			skills = flatten(skills)

			return skills
		}

		function generateLessons() {
			//if(confirm(translate('confirm_auto_make_lessons'))) {
				loader.workspace.lessons = true
				setTimeout(() => {
					loader.workspace.lessons = false
				}, 1250)

				//let start = performance.now()
				const modules = Node.getNodesByLevel( 1, course_state.lessons.items )

				modules.forEach( moduleId => {
					course_state.lessons.items[moduleId].delete()
				})



				const skills = course_state.topics.items['supernode-topics'].getLowestChilds(null, true)
				let lessons = []
				
				skills.forEach( skill => {
					let lesson = find(lessons, ['id', skill.parentId])
					if(!lesson) {
						lessons.push({
							id: skill.parentId,
							skills: [ skill ],
							type: 'lesson',
						})
					} else {
						lesson.skills.push(skill)
					}
				})

				let lessonIndex = 0

				while(lessonIndex < lessons.length) {
					//console.log(lessonIndex)
					if( (lessonIndex + 1) % 3 === 0) {
						lessons.splice(lessonIndex, 0, { 
							type: 'practice',
							skills: skillGatherer(lessons, lessonIndex) })
					}
					lessonIndex++
				}

				

				const diff =  3 - (lessons.length % 3)

				for(let i = 1; i <= diff; i++) {
					if(i === diff) lessons.push({ 
						type: "practice",
						skills: skillGatherer(lessons, lessons.length) })
					else lessons.push({ type: "blank" })
				}



				let sprints = []
				let sprintsCount = 0

				lessons.forEach( (lesson, index) => {
					if(index % 3 === 0) {
						sprints[sprintsCount] = []
						sprintsCount++
					}
					sprints[sprintsCount - 1].push(lesson)
				})

				const module = createModule({
					parentId: 'supernode-lessons',
				})

				sprints.forEach( sprint => {
					const sprintNode = createSprint({
						parentId: module.id,
					})

					//console.log('sprintLessons', sprintLessons)

					sprint.forEach( (lesson) => {
						let name
						switch(lesson.type) {
							case 'practice':
								name = translate('practice_lesson')
							break;

							case 'blank':
								name = ''
							break;

							default:
								name = course_state.topics.items[lesson.id].value
							break;
						}

						const lessonNode = createLesson({
							parentId: sprintNode.id,
							name: name,
						})

						if(lesson.skills) {
							//console.log(lesson.skills)
							lesson.skills.forEach( skill => {
								const skillNode = createSkill({
									parentId: lessonNode.id,
								})

								skillNode.linkToTopic(skill.id)
							})
						}

						//console.log(lesson, lessonId)
					})
				})
				//console.log(sprints, module)
			//}
		}

		function bindStates() {
			loader.workspace.lessons = true
			setTimeout( () => {
				loader.workspace.lessons = false
			}, 500)

			for(let key in course_state.lessons.items) {
				if(course_state.lessons.items[key].type === 'module') {
					const lessons = course_state.lessons.items[key].getLowestChilds(3, true)

					const totalSprintsInModule = course_state.lessons.items[key].childs.length

					lessons.forEach( lesson => {
						const sprintNumber = lesson.parent.index + 1
						const numberInSprint = lesson.index + 1

						const totalLessonsInSprint = lesson.parent.childs.length

						let state_id

						switch(sprintNumber) {
							case 1:
								switch(numberInSprint) {
									case 1:
										state_id = 1
									break

									case totalLessonsInSprint:
										state_id = totalLessonsInSprint < 3 ? 2 : 3
									break

									default:
										state_id = 2
									break
								}
							break

							case totalSprintsInModule:
								switch(numberInSprint) {
									case 1:
										state_id = totalSprintsInModule < 3 ? 4 : 7
									break

									case totalLessonsInSprint:
										state_id = totalLessonsInSprint < 3 ? 8 : 9
										if(totalSprintsInModule < 3) {
											state_id = totalLessonsInSprint < 3 ? 5 : 6
										}
									break

									default:
										state_id = totalSprintsInModule < 3 ? 5 : 8
									break
								}
							break

							default:
								switch(numberInSprint) {
									case 1:
										state_id = 4
									break

									case totalLessonsInSprint:
										state_id = totalLessonsInSprint < 3 ? 5 : 6
									break

									default:
										state_id = 5
									break
								}
							break
						}

						/*
						console.log('spintNumber ' + sprintNumber)
						console.log('numberInSprint ' + numberInSprint)
						console.log('totalSprintsInModule ' + totalSprintsInModule)
						console.log('totalLessonsInSprint ' + totalLessonsInSprint)
						console.log('---')
						*/
						lesson.state_id = state_id
					})
				}
			}
		}

		return {
			translate,
			course_state,
			addModule,
			generateLessons,
			loader,
			bindStates
		}
	},
	components: {
		LessonsItems: Items,
		VButton,
		Preloader,
		//UnderDevelopment,
		//Hints,
		//Hint
	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>