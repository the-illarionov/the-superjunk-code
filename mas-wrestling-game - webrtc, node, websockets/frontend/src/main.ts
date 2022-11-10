import "./css/main.css"
import "./engine/WebRTC"
/* import adapter from "webrtc-adapter"
import * as PIXI from "pixi.js" */
import { manageRoute } from "./engine/Router"
import { Game } from "./engine/Game"
import { Notifier } from "./engine/Notifier"
//import { getCurrentLocale } from "./engine/Utils"

manageRoute()

Game.loadDictionary
