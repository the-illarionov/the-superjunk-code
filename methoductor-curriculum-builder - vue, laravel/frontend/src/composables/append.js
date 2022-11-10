export default function(route, pathToAppend, step = 2) {
	let path = ""

	if(route.matched.length > 1) {
		path = route.matched[route.matched.length - step].path
	} else {
		path = route.matched[0].path
	}

	if(typeof route.params.course_id !== 'undefined') {
		path = path.replace(":course_id", route.params.course_id)
	}

	return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}