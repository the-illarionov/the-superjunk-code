import { MESSAGES } from "../engine/Messages"
import { Player } from "../engine/Player"
import { sendMessage } from "../engine/WebRTC"

export const RouteLobby: Route = {
	url: "lobby",
	onInit() {
		const readyButtons = document.querySelectorAll(".lobby-ready-button")

		readyButtons.forEach((button) => {
			button.onpointerdown = () => {
				if (
					button.dataset.type === Player.instances.me?.type &&
					!button.classList.contains("activated")
				) {
					button.classList.add("activated")

					Player.instances.me!.readyToGame = true

					sendMessage({
						type: MESSAGES.READY_TO_GAME,
					})

					Player.checkReadyToGame()
				}
			}
		})
	},
	onEnter() {
		//Player.instances.me.type = "host"
		document.querySelector(".section_lobby")?.classList.add("active")

		document
			.querySelector(
				".lobby-ready-button[data-type='" +
					Player.instances.me.type +
					"'] .button"
			)
			?.classList.add("active")
	},
	onLeave() {
		document
			.querySelector(".lobby-ready-button.activated")
			?.classList.remove("activated")
	},
	subscriptions: [],
}
