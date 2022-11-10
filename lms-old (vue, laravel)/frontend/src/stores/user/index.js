import { computed, reactive, ref } from "vue"
import router from "@/router"

import api from "@/common/Api"
//import application from "@/stores/Application"

const updateUrl = ref(null)

const user = reactive({
	name: undefined,
	email: undefined,
	avatar: undefined,
	nickname: undefined,

	logged: computed(() => {
		return typeof user.email !== "undefined"
	}),
	login() {
		return new Promise((resolve, reject) => {
			let token = localStorage.getItem("token")
			if (token) {
				api._custom.initAuthHeader(token)

				api.get("/me")
					.then((response) => {
						user.fill(response.data)
						updateUrl.value = `/users/${user.nickname}`
						resolve(user)
					})
					.catch((error) => {
						user.clear()
						reject(error)
					})
			} else {
				resolve()
			}
		})
	},
	logout() {
		api.post("/logout").then(() => {
			user.clear()

			router.go()
		})
	},
	fill(data) {
		user.name = data.name
		user.email = data.email
		user.avatar = data.avatar
		user.nickname = data.nickname
	},
	clear() {
		user.name = undefined
		user.email = undefined
		user.avatar = undefined
		user.nickname = undefined

		localStorage.removeItem("token")

		delete api.defaults.headers["Authorization"]
	}
})

export default user
