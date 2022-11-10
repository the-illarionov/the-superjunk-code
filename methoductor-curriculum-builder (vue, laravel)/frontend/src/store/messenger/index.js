import { reactive, watch } from 'vue'
import translate from './translate'
import { createMessage } from '@/store/classes/Message'



const store = reactive({
	visible: false,
	show() {
		store.visible = true
		
		if(store.types.hints.current > -1) {
			store.showHighlights(store.types.hints.items[ store.types.hints.current ])
		}
	},
	hide() {
		store.visible = false
		store.hideAllHighlights()
		localStorage.setItem("hideMessenger", true)
	},
	hideAllHighlights() {
		const wc = document.getElementById("workspace-container")

		const oldClasses = [...wc.classList]
		const newClasses = oldClasses.filter( className => {
			return className.indexOf('workspace-messenger') === -1
		})
		wc.className = newClasses.join(" ")
		/*
		console.log(wc.classList.length)
		for(let i = 0; i < wc.classList.length; i++) {
			if(wc.classList[0].indexOf('workspace-messenger') > -1) wc.classList.remove( wc.classList[0] )
		}
		*/

		document.querySelectorAll(".messenger-highlight").forEach( highlight => {
			highlight.classList.remove("messenger-highlight-active")
		})
	},
	showHighlights(type) {
		store.hideAllHighlights()

		document.getElementById("workspace-container").classList.add("workspace-messenger-highlighted", "workspace-messenger-highlighted-"+type)

		document.querySelectorAll(".messenger-highlight-" + type).forEach( highlight => {
			highlight.classList.add("messenger-highlight-active")
		})
	},

	types : {
		/*
		warning: {
			name: translate('warnings'),
			active: true
		},
		*/
		hints: {
			name: translate('hints'),
			current: -1,
			active: true,
			items: [
				'initial-skill',
				'start-splitting',
				'micro-skills',
				'drag-skills-to-lessons',
				'add-states',
				'combine-lessons',
				'auto-generation',
				'open-lesson',
			],
		},
	},
	messages: {
		current: -1,
		items: [],

		add(component, type) {
			const message = createMessage({
				component: component,
				type: type,
			})

			store.messages.items.push(message)

			store.show()
		},
	},
})

/*
const 

const showMessenger = () => {
	document.querySelector('#messenger').classList.add('show')
}

const hideMessenger = () => {
	document.querySelector('#messenger').classList.remove('show')
}


const sendNextMessage = () => {
	showMessenger()
	sendMessage(state.journey[state.currentIndex], 'hint')
	state.currentIndex += 1
}

const sendMessage = (component,tag) => {
	
}

const removeMessage = (id) => {
	state.messages.splice(id,1)
}		
*/
watch(() => store.messages.items, () => {
	// console.log(state.messages.length)
	if(store.messages.items.length > 1) {
		store.messages.items[0].delete()
		// removeMessage(0)
	}
}, { deep: true })



export default store