import { RouteGame } from "../routes/RouteGame"
import { Game } from "./Game"
import { MESSAGES } from "./Messages"
import { Notifier } from "./Notifier"
import { changeRouteTo } from "./Router"
import { sendMessage } from "./WebRTC"

export class Player {
	id: string | undefined
	type: "host" | "client" | undefined
	readyToGame = false
	readyToRematch = false
	currentWord = ""
	guessedWords: Array<string> = []
	stamina = 100

	reset() {
		this.clearCurrentWord()
		this.guessedWords = []
		this.refreshGuessedWordsDOM()

		this.stamina = 100
		this.refreshStaminaDOM()
	}

	refreshCurrentWordDOM() {
		document.querySelector(".user-word").innerHTML = this.currentWord
	}

	clearCurrentWord() {
		this.currentWord = ""
		this.refreshCurrentWordDOM()
	}

	refreshGuessedWordsDOM() {
		const list = document.querySelector(
			".player[data-type='" + this.type + "'] .word-list"
		)

		let newHTML = ""

		this.guessedWords.forEach((word) => {
			newHTML += `<li>${word} </li>`
		})

		list.innerHTML = newHTML
	}

	decreaseStamina(enemyWord: string) {
		this.stamina -= enemyWord.length * 30
		if (this.stamina < 0) this.stamina = 0
		this.refreshStaminaDOM()
	}

	refreshStaminaDOM() {
		document.querySelector(
			".player[data-type='" + this.type + "'] .stamina__indicator"
		)!.style.width = this.stamina + "%"
	}

	guessWord() {
		this.guessedWords.push(this.currentWord)
		this.refreshGuessedWordsDOM()

		Player.instances.enemy.decreaseStamina(this.currentWord)

		sendMessage({
			type: MESSAGES.ENEMY_GUESSED_WORD,
			payload: {
				word: this.currentWord,
			},
		})

		if (Player.instances.enemy.stamina <= 0) {
			Game.stop()
			sendMessage({
				type: MESSAGES.GAME_STOP,
			})
		}
	}

	static instances = {
		me: new Player(),
		enemy: new Player(),
	}

	static checkReadyToGame() {
		if (
			Player.instances.me?.readyToGame &&
			Player.instances.enemy?.readyToGame
		) {
			Player.instances.me.readyToGame = false
			changeRouteTo(RouteGame.url)
		}
	}

	static checkReadyToRematch() {
		if (
			Player.instances.me?.readyToRematch &&
			Player.instances.enemy?.readyToRematch
		) {
			Player.instances.me.readyToRematch = false
			Player.instances.enemy.readyToRematch = false

			Notifier.close()
			Game.start()
		}
	}

	static checkWordExistence(word: string) {
		return (
			Player.instances.me.guessedWords.indexOf(word) < 0 &&
			Player.instances.enemy.guessedWords.indexOf(word) < 0 &&
			word !== Game.mainWord
		)
	}
}
// @ts-ignore
window.Player = Player
