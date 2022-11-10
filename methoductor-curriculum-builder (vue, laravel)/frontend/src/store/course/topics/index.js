import translate_topics from '@/views/course/workspace/topics/translate'
import { createTopic } from '@/store/classes/nodes/Topic'
import state from '@/store/course'

export default {
	expanded: true,
	items: {},

	reset() {
		state.topics.items = {}
		state.topics.expanded = true
	},

	fill() {
		createTopic({
			id: 'supernode-topics',
			childs: [
				createTopic({
					id: 'topics-initial-1',
					parentId: 'supernode-topics',
					placeholder: translate_topics('main'),
					childs: [
						createTopic({
							id: 'topics-initial-1-1',
							parentId: 'topics-initial-1',
							placeholder: translate_topics('module_1'),
							childs: [
								createTopic({
									id: 'topics-initial-1-1-1',
									parentId: 'topics-initial-1-1',
									placeholder: translate_topics('topic_1'),
									childs: [
										createTopic({
											id: 'topics-initial-1-1-1-1',
											placeholder:  translate_topics('subtopic_1'),
											parentId: 'topics-initial-1-1-1',
										}).id,
										createTopic({
											id: 'topics-initial-1-1-1-2',
											parentId: 'topics-initial-1-1-1',
											placeholder:  translate_topics('subtopic_2'),
										}).id,
									],
								}).id,
								createTopic({
									id: 'topics-initial-1-1-2',
									parentId: 'topics-initial-1-1',
									placeholder: translate_topics('topic_2'),
									childs: [
										createTopic({
											id: 'topics-initial-1-1-2-1',
											parentId: 'topics-initial-1-1-2',
										}).id,
										createTopic({
											id: 'topics-initial-1-1-2-2',
											parentId: 'topics-initial-1-1-2',
										}).id,
									],
								}).id,
							],
						}).id,
						createTopic({
							id: 'topics-initial-1-2',
							parentId: 'topics-initial-1',
							placeholder: translate_topics('module_2'),
							childs: [
								createTopic({
									id: 'topics-initial-1-2-1',
									parentId: 'topics-initial-1-2',
									childs: [
										createTopic({
											id: 'topics-initial-1-2-1-1',
											parentId: 'topics-initial-1-2-1',
										}).id,
										createTopic({
											id: 'topics-initial-1-2-1-2',
											parentId: 'topics-initial-1-2-1',
										}).id,
									],
								}).id,
								createTopic({
									id: 'topics-initial-1-2-2',
									parentId: 'topics-initial-1-2',
									childs: [
										createTopic({
											id: 'topics-initial-1-2-2-1',
											parentId: 'topics-initial-1-2-2',
										}).id,
										createTopic({
											id: 'topics-initial-1-2-2-2',
											parentId: 'topics-initial-1-2-2',
										}).id,
									],
								}).id,
							],
						}).id,
					],
				}).id,
			],
		})
	}
}