import state from '@/store/course'
import { createLesson } from '@/store/classes/nodes/Lesson'
import { createSprint } from '@/store/classes/nodes/Sprint'
import { createModule } from '@/store/classes/nodes/Module'

export default {
	expanded: true,
	dragFromTopics: false,
	items: {},

	reset() {
		state.lessons.dragFromTopics = false
		state.lessons.items = {}
		state.lessons.expanded = true
	},

	fill() {
		createLesson({
			id: 'supernode-lessons',
			childs: [
				createModule({
					id: 'lessons-initial-1',
					parentId: 'supernode-lessons',
					childs: [
						createSprint({
							id: 'lessons-initial-1-1',
							parentId: 'lessons-initial-1',
							childs: [
								createLesson({
									id: 'lessons-initial-1-1-1',
									parentId: 'lessons-initial-1-1',
								}).id,
								createLesson({
									id: 'lessons-initial-1-1-2',
									parentId: 'lessons-initial-1-1',
								}).id,
								createLesson({
									id: 'lessons-initial-1-1-3',
									parentId: 'lessons-initial-1-1',
								}).id
							]
						}).id
					]
				}).id
			]
		})
	},
}