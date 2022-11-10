let common = {
	type: "element",
	subtype: null,
	name: null,
	component: null,

	url: null,
	highlights: [],
	highlights_bg: "rgba(0,0,0,0.5)",
	triple: false,

	options: {},
}

export default [
	{
		...common,
		subtype: "code",
		name: "Codepen",
		component: "ld-iframe",
	},
	{
		...common,
		subtype: "youtube",
		name: "YouTube",
		component: "ld-iframe",
	},
	{
		...common,
		subtype: "figma",
		name: "Figma",
		component: "ld-iframe",
	},
	{
		...common,
		subtype: "miro",
		name: "Miro",
		component: "ld-iframe",
	},
	{
		...common,
		subtype: "sketchfab",
		name: "Sketchfab",
		component: "ld-iframe",
	},
]