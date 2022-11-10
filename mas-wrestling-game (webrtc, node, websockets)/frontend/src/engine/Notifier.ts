import { Game } from "./Game"

const notifier = document.querySelector(".notifier")
const close = document.querySelector(".notifier__close")

close.onpointerdown = (e) => {
	Notifier.close()
}

export const NOTIFIER_TYPES = {
	GAME_OVER: "game-over",
	CREATE_GAME: "create-game",
	JOIN_GAME: "join-game",
}

export const Notifier = {
	open(type: string) {
		switch (type) {
			case NOTIFIER_TYPES.GAME_OVER:
				document
					.querySelector(
						".notifier .winner[data-type='" +
							Game.winner.type +
							"']"
					)
					?.classList.add("active")
				break
		}

		document
			.querySelector(".notifier__section[data-type='" + type + "']")
			?.classList.add("active")
		notifier?.classList.add("active")
	},
	close() {
		notifier?.classList.remove("active")
		document
			.querySelector(".notifier__section.active")
			?.classList.remove("active")

		document
			.querySelector(".notifier .winner.active")
			?.classList.remove("active")

		document.querySelector(".invitation-copied").style.display = "none"

		document.querySelector(".invitation-wait").style.display = "none"
	},
}
