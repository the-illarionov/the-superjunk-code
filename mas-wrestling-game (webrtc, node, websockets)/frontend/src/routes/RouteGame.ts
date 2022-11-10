import { EventBus, EVENTS } from "../engine/Events"
import { Game } from "../engine/Game"
import { MESSAGES } from "../engine/Messages"
import { Player } from "../engine/Player"
import { getCurrentLocale } from "../engine/Utils"
import { sendMessage } from "../engine/WebRTC"

export const RouteGame: Route = {
	url: "game",
	onInit() {
		document.querySelector(".main-word__letters")!.onpointerdown = (e) => {
			if (e.target.classList.contains("main-word__letter")) {
				Player.instances.me.currentWord += e.target.textContent
				Player.instances.me.refreshCurrentWordDOM()
			}
		}

		document.querySelector(
			".main-word__action[data-type='delete']"
		)!.onpointerdown = () => {
			Player.instances.me.clearCurrentWord()
		}

		document.querySelector(
			".main-word__action[data-type='confirm']"
		)!.onpointerdown = () => {
			const me = Player.instances.me
			const myWord = me.currentWord

			if (Game.words[getCurrentLocale()].data.indexOf(myWord) > -1) {
				if (Player.checkWordExistence(myWord)) {
					me.guessWord()
				} else {
					console.log("слово уже угадано")
				}
				me.clearCurrentWord()
			} else {
				console.log("слова не существует")
				me.clearCurrentWord()
			}
		}

		document.querySelector(".confirm-rematch").onpointerdown = () => {
			Player.instances.me.readyToRematch = true

			sendMessage({
				type: MESSAGES.READY_TO_REMATCH,
			})

			Player.checkReadyToRematch()
		}
	},
	onEnter() {
		document.querySelector(".section_game")?.classList.add("active")

		Game.start()
	},
	subscriptions: [],
}
