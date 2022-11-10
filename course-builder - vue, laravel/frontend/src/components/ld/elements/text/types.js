let common = {
	type: "element",
	subtype: null,
	name: null,
	component: null,

	value: '',
	
	is_editing: false,
}

export default [
	{
		...common,
		subtype: "paragraph",
		name: "Текст",
		component: "ld-paragraph",
	},
	{
		...common,
		subtype: "header",
		name: "Заголовок",
		component: "ld-header",
	},
]