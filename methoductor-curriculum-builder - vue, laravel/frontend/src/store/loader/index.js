import { reactive } from 'vue'

const loader = reactive({
	main: false,
	workspace: {
		lessons: false,
		lesson_plan: false,
		section: false,
	}
})

export default loader