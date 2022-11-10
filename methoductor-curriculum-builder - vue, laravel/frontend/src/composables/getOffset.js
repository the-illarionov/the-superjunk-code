export default function getOffset(el, stopper) {
	function _getOffset(el, left = 0, top = 0) {
		if(!el) return false
		if (el === stopper) {
			return { left, top }
		}
		return _getOffset(
			el.offsetParent,
			left + el.offsetLeft,
			top + el.offsetTop
		)
	}
	return _getOffset(el)
}