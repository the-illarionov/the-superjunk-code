export default function myScroll(params) {
	const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style

	if(typeof params.behavior === "undefined") params.behavior = "smooth"

	if(supportsNativeSmoothScroll) {
		let options = {
			behavior: params.behavior
		}

		if(typeof params.left === "number") options.left = params.left
		
		if(typeof params.top === "number") options.top = params.top

		params.element.scrollTo(options)
		
	} else {
		if(typeof params.left === "number") params.element.scrollLeft = params.left
		if(typeof params.top === "number") params.element.scrollTop = params.top
	}
}