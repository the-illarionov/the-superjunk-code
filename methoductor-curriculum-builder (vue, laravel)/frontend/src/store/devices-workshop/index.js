import { reactive } from "vue"

const state = reactive({
	reset() {
		state.displayed_device_map = []
		state.show_trash = false
		state.crafting_mode = false

		state.devices = {
			ingredients: [],
			crafted: [],
		}
	}
})

state.reset()

export default function() {
	return {
		state,
	}
}