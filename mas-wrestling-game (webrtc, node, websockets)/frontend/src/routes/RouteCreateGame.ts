import { SIGNALS } from "../../../common/constants/SIGNALS"

import { sendSignal } from "../engine/Signaller"
import { log } from "../engine/Utils"
import { EventBus, EVENTS } from "../engine/Events"
import { RouteLobby } from "./RouteLobby"
import { Player } from "../engine/Player"
import { connect } from "../engine/Signaller"
import { Notifier, NOTIFIER_TYPES } from "../engine/Notifier"

export const RouteCreateGame: Route = {
	url: "create-game",
	onInit() {
		document.querySelector(".copy-invitation.desktop").onpointerdown =
			() => {
				const gameId = document.getElementById("game-id")?.textContent
				const text =
					'Сыграй со мной в "Мас-Рестлинг: Слова"! https://illarionov.school/game#join-game&id='

				navigator.clipboard.writeText(text + gameId).then(() => {
					document.querySelector(
						".invitation-copied"
					)!.style.display = "inline-block"
				})

				document.querySelector(".invitation-wait").style.display =
					"block"
			}

		document.querySelector(".copy-invitation.mobile").onpointerdown =
			() => {
				document.querySelector(".invitation-wait").style.display =
					"block"
			}
	},
	onEnter() {
		document.querySelector(".section_lobby")?.classList.add("active")
		Notifier.open(NOTIFIER_TYPES.CREATE_GAME)

		connect.then(() => {
			EventBus.emit(EVENTS.ROUTE_CREATE_GAME_ENTERED)

			Player.instances.me.type = "host"
		})
	},
	onLeave(nextRoute) {
		if (nextRoute.url !== RouteLobby.url)
			EventBus.emit(EVENTS.PEERCONNECTION_CLOSED)
		sendSignal(SIGNALS.PEER.STOPPED_ACCEPTING_CONNECTIONS)
		log(SIGNALS.PEER.STOPPED_ACCEPTING_CONNECTIONS)

		Notifier.close()
	},
	subscriptions: [],
}
