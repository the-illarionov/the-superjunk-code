import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
// @ts-ignore
import router from "./router"

window.addEventListener("beforeunload", () => {
	document.cookie = "page_mode=spa;max-age=-1"
})

router.beforeEach(() => {
	document.cookie = "page_mode=spa"
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")

// if you want to add something, that changes layout, don't forget to add it to server.js, cuz ssg uses its own implementation of app
