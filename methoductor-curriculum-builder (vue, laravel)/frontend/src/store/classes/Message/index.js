import { reactive } from 'vue'
import generateKey from '@/composables/generateKey'
import messengerStore from '@/store/messenger'

class Message {
	constructor(data = {}) {
		this.component = data.component
		this.type = data.type
		this.id = data.id ?? generateKey()
	}

	get time() {
		return new Date().getHours() + ':' + new Date().getMinutes()
	}

	get domElement() {
		return document.getElementById('message-' + this.id)
	}

	delete() {
		messengerStore.messages.items.splice( messengerStore.messages.items.indexOf(this), 1 )
	}
}

const createMessage = data => reactive(new Message(data))

export { createMessage }