export let mixin_ld_element = {
	data() {
		return {
			m_ld_element_edit_transition: "top-to-bottom",
		}
	},
	created() {
		let is_editing = false;
		if(this.m_longread.is_author) is_editing = true;
		
		this.m_changeElement({
			is_editing: is_editing,
			is_editing_highlights: false,
		});
	},
	methods: {
		m_changeElement(changes) {
			let payload = {
				source: this.m_source,
				index: this.m_index,
				changes: changes,
			}

			this.$store.dispatch("longread/changeElement", payload);
		},
		m_modifyMap(index) {
			let map = this.$_.cloneDeep(this.m_map);
			
			map.push(index);

			return map;
		},
		m_remove(source, index) {
			let payload = {
				source: source ?? this.m_source,
				index: index ?? this.m_index,
			}
			this.$store.dispatch("longread/removeElement", payload);

			this.$emit("removed_element", payload);
		},
		m_changeIsEditing(options) {
			let is_editing = options.value;

			if(options.toggle) is_editing = !this.m_element.is_editing;

			this.m_changeElement({
				is_editing: is_editing
			});

			if(this.m_element.elements) this.m_recurseEditingElements(this.m_element.elements, is_editing);
		},
		m_recurseEditingElements(elements, is_editing) {
			for(let i = 0; i < elements.length; i++) {
				let payload = {
					source: elements,
					index: i,
					changes: {
						is_editing: is_editing
					},
				}
	
				this.$store.dispatch("longread/changeElement", payload);

				if(elements[i].elements) {
					this.m_recurseEditingElements(elements[i].elements, is_editing);
				}
			}
		},

	},
	computed: {
		m_value: {
			get() {
				return this.m_element.value;
			},
			set(value) {
				this.m_changeElement({
					value: value
				});
			}
		},
		m_desc: {
			get() {
				return this.m_element.desc;
			},
			set(value) {
				this.m_changeElement({
					desc: value
				});
			}
		},

		m_duration() {
			let duration = 1 / (this.m_map.length / this.m_map[0]);

			//if(duration < 0.5) duration = 0.5;
			return duration;
		},
		m_longread() {
			return this.$store.state.longread;
		},
		m_longread_is_editing() {
			return this.$store.state.longread.is_editing;
		},


		m_element() {
			return this.$store.getters['longread/element'](this.m_map);
			//return this.m_element_finder(this.m_map);
		},
		m_index() {
			return this.m_map[ this.m_map.length - 1 ];
		},
		m_source() {
			if(this.m_map.length == 1) {
				return this.m_longread.structure;
			} else {
				// Я обрезаю map до предпоследнего элемента и натравливаю на ту же функцию, которая пробегается по map и отдает последний элемент в structure
				let map = this.m_map.slice(0, this.m_map.length - 1);
			
				return this.$store.getters['longread/element'](map).elements;
				//return this.m_element_finder(map).elements;
			}
		}
	},
	watch: {
		m_longread_is_editing(value) {
			this.m_changeElement({
				is_editing: value
			});

			if(!value) {
				this.m_changeElement({
					is_editing_highlights: false
				});
			}
		}
	},
	props: {
		m_map: {
			required: true,
		},
	},
}