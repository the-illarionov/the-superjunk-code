import api from "@/common/Api"
import generate from "./Generate"

function init(_url, options) {
	if (options.item) options.item.value = null
	if (options.before) options.before()

	return new Promise((resolve, reject) => {
		api.get(_url, options.additionals)
			.then((response) => {
				if (options.item) options.item.value = response.data
				if (options.success) options.success(response)

				resolve()
			})
			.catch((error) => {
				if (options.error) options.error(error)

				reject()
			})
	})
}

export default function (options) {
	if (!options.additionals) options.additionals = {}

	options.url = options.url.replaceAll(" ", "")

	return {
		beforeRouteEnter(to, from, next) {
			// console.log("route enter", to)
			if (!options.cancel || (options.cancel && !options.cancel())) {
				const { url } = generate(options.url, to)
				init(url, options)
					.then(() => {})
					.catch(() => {})
			}
			next()
		},
		beforeRouteUpdate(to, from) {
			// console.log("route update", to, from)
			const { url, lastParam } = generate(options.url, to)
			if (from.params[lastParam] !== to.params[lastParam]) {
				init(url, options)
					.then(() => {})
					.catch(() => {})
			}
		}
	}
}
