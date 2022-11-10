import { log } from "./Utils"
import { EventBus } from "./Events"
import { SIGNALS } from "../../../common/constants/SIGNALS"
import { Player } from "./Player"

const socket = new WebSocket(
	(import.meta.env.DEV ? "ws://" : "wss://") +
		import.meta.env.GAME_WEBSOCKET_SERVER +
		":" +
		import.meta.env.GAME_WEBSOCKET_PORT
)

socket.onopen = () => {
	socket.send(
		JSON.stringify({
			type: SIGNALS.HANDSHAKE,
			payload: { id: localStorage.getItem("id") },
		})
	)
}

socket.onclose = (e) => {
	log("socket.close", e)
}

socket.onerror = (e) => {
	log("socket.error", e)
}

export const connect = new Promise((resolve) => {
	socket.onmessage = ({ data }) => {
		const jsonData = JSON.parse(data)
		const type = jsonData.type
		const message = jsonData.payload
		if (type === SIGNALS.SERVER.CREATED_PLAYER) {
			const text =
				'Сыграй со мной в "Мас-Рестлинг: Слова"! https://illarionov.school/game%23join-game%26id='
			const { id } = message
			localStorage.setItem("id", id)
			document.querySelector("#game-id")!.innerHTML = id
			document.querySelector(".copy-invitation.mobile").href =
				"whatsapp://send?text=" + text + id
			Player.instances.me.id = id
			log(SIGNALS.SERVER.CREATED_PLAYER, id)
			resolve(true)
			return
		} else if (type === SIGNALS.ERROR) {
			log(SIGNALS.ERROR, message)
		}
		EventBus.emit(type, message)
	}
})

export function sendSignal(type: string, payload: object = {}) {
	connect.then(() => {
		socket.send(JSON.stringify({ type, payload }))
	})
}
