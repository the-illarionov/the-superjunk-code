import { reactive } from "vue"

const application = reactive({
	preloaders: {
		main: false
	},

	skeleton: {
		visible: false,
		showOnRequests: true
	},

	//showPreloaderOnRequests: true,
	//dontHidePreloader: false,

	modal: {
		type: null,
		visible: false,
		show(type) {
			application.modal.type = type
			application.modal.visible = true
		},
		hide() {
			application.modal.visible = false
			setTimeout(() => {
				application.modal.type = null
			}, 500)
		}
	},

	error: undefined
})

export default application
