interface RTCPeerConnection {
	channel: RTCDataChannel
}

type Routes = {
	[routeName: string]: Route
}

type Route = {
	url: string
	onInit?(): void
	onEnter?(previousRoute: Route): void
	onLeave?(nextRoute: Route): void
	subscriptions?: array
}

type Message = {
	type: string
	payload?: object
}

/* interface PlayerConstructor {
	id: string
	type?: "host" | "client"
} */

interface GameConstructor {
	roomId: string
}
