import state from '@/store/course'
import messengerStore from '@/store/messenger'

function generate(state) {
	const key = (Math.random() * 1000).toString(36)
	if(
		state.topics.items[key] || 
		state.lessons.items[key] || 
		state.lesson.items[key] ||
		messengerStore.messages.items[key]) return generate()
	return key
}

export default function () {
	return generate(state)
}
