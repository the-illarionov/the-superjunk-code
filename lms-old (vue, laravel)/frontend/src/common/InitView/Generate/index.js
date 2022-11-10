export default function (url, route) {
	if (url.charAt(0) === "/") url = url.substring(1)

	let urlArray = url.split("/")

	let lastParam

	urlArray.forEach((slug, i) => {
		if (slug.indexOf(":") > -1) {
			lastParam = slug.replace(":", "")
			urlArray[i] = route.params[lastParam]
		}
	})

	return {
		url: "/" + urlArray.join("/"),
		lastParam
	}
}
