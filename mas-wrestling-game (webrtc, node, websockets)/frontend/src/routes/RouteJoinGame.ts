import { SIGNALS } from "../../../common/constants/SIGNALS"
import { EventBus, EVENTS } from "../engine/Events"
import { Player } from "../engine/Player"
import { RouteLobby } from "./RouteLobby"
import { connect } from "../engine/Signaller"
import { Notifier, NOTIFIER_TYPES } from "../engine/Notifier"

const hostIdInput = <HTMLInputElement>document.querySelector("#room-id-join")

function connectToHost(hostId: string) {
	EventBus.emit(SIGNALS.PEER.WANTS_TO_JOIN, {
		hostId,
	})
	Player.instances.enemy.id = hostId
	Player.instances.enemy.type = "host"
}

export const RouteJoinGame: Route = {
	url: "join-game",
	onInit() {
		;(<HTMLElement>document.querySelector("#join-room")!).onpointerdown =
			() => {
				const hostId = hostIdInput.value

				connectToHost(hostId)
			}
	},
	onEnter() {
		document.querySelector(".section_lobby")?.classList.add("active")
		Notifier.open(NOTIFIER_TYPES.JOIN_GAME)

		connect.then(() => {
			Player.instances.me!.type = "client"
			EventBus.emit(EVENTS.ROUTE_JOIN_GAME_ENTERED)

			if (location.hash.indexOf("&id") > -1) {
				const id = location.hash.split("&")[1].split("=")[1]
				hostIdInput.value = id
				connectToHost(id)
			}
		})
	},
	onLeave(nextRoute) {
		if (nextRoute.url !== RouteLobby.url)
			EventBus.emit(EVENTS.PEERCONNECTION_CLOSED)

		Notifier.close()
		hostIdInput.value = ""
	},
	subscriptions: [],
}
