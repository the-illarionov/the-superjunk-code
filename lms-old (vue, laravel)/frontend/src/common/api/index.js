import axios from "axios"
//import router from "@/router"
import application from "@/stores/Application"
import getLocale from "@/common/Locales/Get"

const axiosInstance = axios.create({
	baseURL: process.env.VUE_APP_API
})

let requestsAmount = 0

axiosInstance._custom = {
	initAuthHeader(token) {
		axiosInstance.defaults.headers["Authorization"] = "Bearer " + token
		localStorage.setItem("token", token)
	}
}

const preloaderRequestInterceptor = (config) => {
	application.error = undefined
	if (application.skeleton.showOnRequests) application.skeleton.visible = true
	requestsAmount++

	if (!config.params) config.params = {}
	config.params.locale = getLocale()

	return config
}

axiosInstance.interceptors.request.use(preloaderRequestInterceptor)

const errorInterceptor = (error) => {
	requestAmountChecker()

	if (!error.response) return Promise.reject(error)

	application.error = error.response

	return Promise.reject(error)
}

const responseInterceptor = (response) => {
	requestAmountChecker()
	return response
}

axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor)

const requestAmountChecker = () => {
	requestsAmount--
	if (requestsAmount === 0) application.skeleton.visible = false
	/*
	setTimeout(() => {
		requestsAmount--

		if (requestsAmount === 0) {
			setTimeout(() => {
				application.skeleton.visible = false
			}, 100) // задержка чтоб там на странице отрендерилось всё
		}
	}, 100) // задержка перед следующим запросом
	*/
}

export default axiosInstance
