import { SIGNALS } from "../../../common/constants/SIGNALS"
import { sendSignal } from "./Signaller"
import { log } from "./Utils"
import { EventBus, EVENTS } from "./Events"
import { changeRouteTo } from "./Router"
import { RouteMainMenu } from "../routes/RouteMainMenu"
import { Player } from "./Player"
import { MESSAGES } from "./Messages"
import { Game } from "./Game"

let peerConnection: RTCPeerConnection | null = null

EventBus.on(EVENTS.ROUTE_CREATE_GAME_ENTERED, async () => {
	initPeerConnection()

	if (peerConnection) {
		initDataChannel(peerConnection.createDataChannel("game"))

		const offer = await peerConnection.createOffer()

		peerConnection.setLocalDescription(offer)

		sendSignal(SIGNALS.PEER.STARTED_ACCEPTING_CONNECTIONS, { offer })
		log(SIGNALS.PEER.STARTED_ACCEPTING_CONNECTIONS)
	}
})

EventBus.on(EVENTS.ROUTE_JOIN_GAME_ENTERED, async () => {
	initPeerConnection()
})

EventBus.on(EVENTS.PEERCONNECTION_CLOSED, () => {
	closePeerConnection()
})

EventBus.on(SIGNALS.REMOTE.GENERATED_ICE_CANDIDATE, ({ detail }) => {
	const { iceCandidate } = detail
	peerConnection!.addIceCandidate(iceCandidate)
	log(SIGNALS.REMOTE.GENERATED_ICE_CANDIDATE, iceCandidate)
})

EventBus.on(SIGNALS.REMOTE.SENDS_ANSWER, ({ detail }) => {
	const { answer } = detail
	peerConnection!.setRemoteDescription(answer)
	log(SIGNALS.REMOTE.SENDS_ANSWER)
})

EventBus.on(SIGNALS.PEER.WANTS_TO_JOIN, ({ detail }) => {
	sendSignal(SIGNALS.PEER.WANTS_TO_JOIN, detail)

	peerConnection!.ondatachannel = (e) => {
		initDataChannel(e.channel)
	}
})

EventBus.on(SIGNALS.REMOTE.SENDS_OFFER_AND_CANDIDATES, async ({ detail }) => {
	const { offer, iceCandidates } = detail
	if (peerConnection) {
		await peerConnection.setRemoteDescription(offer)

		iceCandidates.forEach((iceCandidate: RTCIceCandidate) => {
			peerConnection!.addIceCandidate(iceCandidate)
		})

		const answer = await peerConnection.createAnswer()
		peerConnection.setLocalDescription(answer)

		sendSignal(SIGNALS.PEER.GENERATED_ANSWER, { answer })
		log(SIGNALS.REMOTE.SENDS_OFFER_AND_CANDIDATES)
	}
})

EventBus.on(SIGNALS.REMOTE.SENDS_ID, ({ detail }) => {
	const { enemyId } = detail
	Player.instances.enemy.id = enemyId
	Player.instances.enemy.type = "client"
})

function initPeerConnection() {
	peerConnection = new RTCPeerConnection({
		iceServers: [
			{
				urls: [import.meta.env.GAME_STUN_SERVER],
			},
			{
				urls: [import.meta.env.GAME_TURN_SERVER],
				username: import.meta.env.GAME_TURN_USER,
				credential: import.meta.env.GAME_TURN_PASSWORD,
			},
		],
	})

	peerConnection.onicecandidate = ({ candidate: iceCandidate }) => {
		sendSignal(SIGNALS.PEER.GENERATED_ICE_CANDIDATE, { iceCandidate })
		log(SIGNALS.PEER.GENERATED_ICE_CANDIDATE, iceCandidate)
	}

	peerConnection.oniceconnectionstatechange = () => {
		if (
			peerConnection &&
			peerConnection.iceConnectionState === "disconnected"
		) {
			log("iceConnectionState", peerConnection!.iceConnectionState)
			sendSignal(SIGNALS.REMOTE.DISCONNECTED)
			closePeerConnection()
			changeRouteTo(RouteMainMenu.url)
		}
	}
}

function closePeerConnection() {
	if (peerConnection) {
		peerConnection.close()
		peerConnection = null
	}
}

function initDataChannel(channel: RTCDataChannel) {
	channel.onmessage = (e) => {
		const message = JSON.parse(e.data)
		const enemy = Player.instances.enemy
		const me = Player.instances.me

		switch (message.type) {
			case MESSAGES.READY_TO_GAME:
				const enemyButton = document.querySelector(
					".lobby-ready-button[data-player='" + enemy.type + "']"
				)
				enemy.readyToGame = true
				enemyButton?.classList.remove("lobby-ready-button-notready")
				enemyButton?.classList.add("lobby-ready-button-ready")

				Player.checkReadyToGame()
				break
			case MESSAGES.READY_TO_REMATCH:
				enemy.readyToRematch = true
				Player.checkReadyToRematch()
				break
			case MESSAGES.HOST_GENERATED_WORD:
				Game.mainWord = message.payload.word
				Game.refreshMainWordDOM()
				break
			case MESSAGES.TIMER_TICK:
				Game.roundTime = message.payload.roundTime
				Game.wordRefreshTime = message.payload.wordRefreshTime
				Game.updateTimersHTML()
				break
			case MESSAGES.ENEMY_GUESSED_WORD:
				enemy.guessedWords.push(message.payload.word)
				enemy.refreshGuessedWordsDOM()

				me.decreaseStamina(message.payload.word)

				break
			case MESSAGES.GAME_STOP:
				Game.stop()
				break
		}

		log("message", message)
	}

	channel.onopen = (e) => {
		EventBus.emit(EVENTS.P2P_CHANNEL_OPENED)
		log("channel.open", e)
	}
	channel.onclose = (e) => log("channel.close", e)
	peerConnection!.channel = channel
}

export function sendMessage(message: Message) {
	peerConnection!.channel.send(JSON.stringify(message))
}

// @ts-ignore
window.peerConnection = peerConnection
