let common = {
	type: "element",
	subtype: null,
	name: null,
	component: null,

	src: null,
	desc: null,
	fileName: null,
	size: null,
	highlights: [],
	highlights_bg: "rgba(0,0,0,0.65)",

	is_editing: false,
	is_editing_highlights: false,
	//loaded: false,
}

export default [
	{
		...common,
		subtype: "image",
		name: "Картинка",
		component: "ld-image",
	},
	{
		...common,
		subtype: "video",
		name: "Видео",
		component: "ld-video",
	},
]