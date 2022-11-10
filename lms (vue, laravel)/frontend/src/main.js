import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import i18n from "./i18n"

import user from "@/stores/User"
import application from "@/stores/Application"

function initApp() {
	const app = createApp(App)
	app.use(router).use(i18n).mount("#app")
	setTimeout(() => {
		let preloader = document.querySelector("#public-preloader")
		preloader.classList.add("hide")
		setTimeout(() => {
			preloader.parentNode.removeChild(preloader)
		}, 500)
	}, 100)
}

user.login()
	.then(initApp)
	.catch(() => {
		user.clear()
		initApp()
	})

router.beforeEach((to) => {
	if (to.name !== "Login") localStorage.setItem("path", to.path)
	application.error = false
})
