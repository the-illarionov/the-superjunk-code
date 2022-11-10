import { MESSAGES } from "./Messages"
import { Notifier, NOTIFIER_TYPES } from "./Notifier"
import { Player } from "./Player"
import { getCurrentLocale } from "./Utils"
import { sendMessage } from "./WebRTC"

export const Game = {
	mainWord: "",
	winner: "",

	words: {
		ru: {
			length: 0,
			data: [],
		},
	},

	roundTime: 99,
	wordRefreshTime: 15,
	intervalId: 0,

	loadDictionary: new Promise<void>((resolve, reject) => {
		const locale = getCurrentLocale()
		fetch("/game-assets/dictionaries/" + locale + "-sorted.txt")
			.then((res) => res.json())
			.then((dict) => {
				//@ts-ignore
				Game.words[locale].length = dict.length
				//@ts-ignore
				Game.words[locale].data = dict

				resolve()
			})
	}),

	start() {
		Game.winner = ""
		Game.roundTime = 99
		Game.wordRefreshTime = 15

		Player.instances.me.reset()
		Player.instances.enemy.reset()

		if (Player.instances.me.type === "host") {
			Game.refreshMainWord()
			Game.intervalId = setInterval(Game.timerTick, 1000)
		}
	},

	stop() {
		clearInterval(Game.intervalId)

		const me = Player.instances.me
		const enemy = Player.instances.enemy
		let isDraw = false

		if (me.stamina < enemy.stamina) Game.winner = enemy
		else if (me.stamina > enemy.stamina) Game.winner = me
		else if (me.stamina === enemy.stamina) isDraw = true

		Notifier.open(NOTIFIER_TYPES.GAME_OVER)
	},

	refreshMainWord() {
		Game.loadDictionary.then(() => {
			Player.instances.me.clearCurrentWord()

			// @ts-ignore
			const length = Game.words[getCurrentLocale()].length
			const lowestIndex = length - ~~(length / 5)
			const randomIndex =
				~~(Math.random() * (length - lowestIndex)) + lowestIndex
			// @ts-ignore
			Game.mainWord = Game.words[getCurrentLocale()].data[randomIndex]
			sendMessage({
				type: MESSAGES.HOST_GENERATED_WORD,
				payload: {
					word: Game.mainWord,
				},
			})
			Game.refreshMainWordDOM()
		})
	},

	refreshMainWordDOM() {
		const letters = document.querySelector(".main-word__letters")
		const newWord = Array.from(Game.mainWord)
		let newLetters = ""
		newWord.forEach((letter) => {
			newLetters += `<span class="main-word__letter">${letter}</span>`
		})
		letters!.innerHTML = newLetters
	},

	timerTick() {
		Game.roundTime--
		Game.wordRefreshTime--

		/* if (Game.roundTime <= 0) {
			Game.stop()
			sendMessage({
				type: MESSAGES.GAME_STOP,
			})
			return
		} */

		if (Game.wordRefreshTime === 0) {
			Game.wordRefreshTime = 15
			Game.refreshMainWord()
		}

		sendMessage({
			type: MESSAGES.TIMER_TICK,
			payload: {
				roundTime: Game.roundTime,
				wordRefreshTime: Game.wordRefreshTime,
			},
		})
		Game.updateTimersHTML()
	},

	updateTimersHTML() {
		document.querySelector(".round-timer").innerHTML = Game.roundTime
		document.querySelector(".refresh-word-info__timer").innerHTML =
			Game.wordRefreshTime
	},
}

//@ts-ignore
window.Game = Game
