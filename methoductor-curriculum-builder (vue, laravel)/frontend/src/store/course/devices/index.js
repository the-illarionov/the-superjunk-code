import { createDevice } from '@/store/classes/Device'

export default {
	items: {},
	fill() {
		createDevice({
			id: "xz",
			name: "begin device",
			description: "device description",
			section_subtypes: ['begin'],
		})

		createDevice({
			id: "task_together",
			name: "Performed with teacher",
			description: "device description",
			section_subtypes: ['task'],
		})

			createDevice({
				id: "task_together_xz",
				name: "Приём из С преподавателем",
				description: "device description",
				section_subtypes: ['task_together'],
			})

		createDevice({
			id: "task_independence",
			name: "Performed independently",
			description: "device description",
			section_subtypes: ['task'],
		})

			createDevice({
				id: "task_independence_xz",
				name: "Приём из Самостоятельно",
				description: "device description",
				section_subtypes: ['task_independence'],
			})

		createDevice({
			id: "xz2",
			name: "end device",
			description: "device description",
			section_subtypes: ['end'],
		})
	}
}