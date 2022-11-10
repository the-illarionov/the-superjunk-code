let common = {
	type: "container",
	subtype: null,
	name: null,
	component: null,
	
	elements: [],
	
	is_editing: false,
	highlights: [],
	current_index: 0,
	is_big: false,
	show_slider_controls: true,
}

export const containers_types = [
	{
		...common,
		subtype: "wrapper",
		name: "Коробка",
		component: "ld-container",
	},
	{
		...common,
		subtype: "element",
		name: "Элемент",
		component: "ld-container",
	},
]