import LocalStorageService from '@/utils/localStorageService';
import picker from '@/utils/picker';
import axios from 'axios'

export default {
	namespaced: true,
	state: () => ({
		is_editing: false,
		is_author: false,
		is_locked: false,
		is_demo: false,
		structure: [],
		options: {},
		longread: {},
		loaded: false,
		save_code: -1,
		save_code_local: -2,
	}),
	getters: {
		element: state => map => {
			let element;
			let source = state.structure;

			for(let i =0; i < map.length; i++) {
				element = source[ map[i] ];
				source = element.elements;
			}
			
			return element;
		},
	},
	mutations: {
		setIsEditing(state, is_editing) {
			state.is_editing = is_editing;
			//if(state.is_author) LocalStorageService.set("longread_is_editing", is_editing);
		},
		setIsAuthor(state, is_author) {
			state.is_author = is_author;
		},
		setSaveCode(state, save_code) {
			state.save_code = save_code;
		},
		setSaveCodeLocal(state, save_code_local) {
			state.save_code_local = save_code_local;
		},
		setIsDemo(state, is_demo) {
			state.is_demo = is_demo;
		},
		setIsLocked(state, is_locked) {
			state.is_locked = is_locked;
		},
		setStructure(state, structure) {
			state.structure = structure;
		},
		setOptions(state, options) {
			state.options = options;
		},
		setLongread(state, longread) {
			state.longread = longread;
		},
		setLoaded(state, is_loaded) {
			state.loaded = is_loaded;
		},

		addElement(state, payload) {
			payload.destination.splice(payload.index, 0, payload.element);

			LocalStorageService.set("longread_structure", state.structure);
			state.save_code_local = 1
		},
		removeElement(state, payload) {
			payload.source.splice(payload.index, 1);

			LocalStorageService.set("longread_structure", state.structure);
			state.save_code_local = 1
		},
		changeElement(state, payload) {

			for(let key in payload.changes) {
				payload.source[payload.index][key] = payload.changes[key];
			}
			LocalStorageService.set("longread_structure", state.structure);
			state.save_code_local = 1
		},
	},
	actions: {
		setIsEditing({commit}, is_editing) {
			commit("setIsEditing", is_editing);
		},
		setIsAuthor({commit}, is_author) {
			commit("setIsAuthor", is_author);
		},
		getLockedStructure({ commit }, payload) {
			localStorage.removeItem("longread_structure")
			// проверять router, если там достаточно данных для запроса, то шлется запрос, мб тут же показывается прелоадер, mode просто для теста
			
			let structure
			let options
			let longread
			
			let self = this
			axios({ 
				method: 'POST', 
				url: self.state.api_url + 'view',
				data: {
					user: payload.router.currentRoute.params.user,
					slug: payload.router.currentRoute.params.slug,
					pass: payload.pass,
					stage: 1
				}
			})
			.then(function (response) {
				if(response.data.status) {

					longread = response.data.longread
					structure = JSON.parse(longread.longread_structure)
					options = JSON.parse(longread.longread_options)							
					let styles = options.style_options.value
					let css = document.createElement('style')
					css.type = 'text/css'
					css.appendChild(document.createTextNode(styles));
					
					/* Append style to the tag name */ 
					document.getElementsByTagName("head")[0].appendChild(css)

					commit("setStructure", structure)
					commit("setOptions", options)
					commit("setLongread", longread)
					commit("setLoaded", true)
					commit("setIsLocked", false)
					self.commit("setLoadedPage", true)
				} else {
					self.commit("setLoadedPage", true)
					self.$modal.methods.open('error','Неправильный пароль')
				}
				console.log(response.data)
				
			})
			.catch(function (error) {
				console.log(error.response);
			});
			
		},

		getStructure({ commit }, router) {
			if(router.currentRoute.name != "demo") {
				localStorage.removeItem("longread_structure")
				// проверять router, если там достаточно данных для запроса, то шлется запрос, мб тут же показывается прелоадер, mode просто для теста
				
				let structure
				let options
				let longread
				
				let self = this

				let token = null
				if(localStorage.getItem('token')) {
					token = localStorage.getItem('token')
				}
				axios({ 
					method: 'POST', 
					url: self.state.api_url + 'view',
					data: {
						user: router.currentRoute.params.user,
						slug: router.currentRoute.params.slug,
						token: token,
						stage: 0
					}
				})
				.then(function (response) {
					if(response.data.status) {

						longread = response.data.longread
						structure = JSON.parse(longread.longread_structure)
						options = JSON.parse(longread.longread_options)							
						let styles = options.style_options.value
						let css = document.createElement('style')
						css.type = 'text/css'
						css.appendChild(document.createTextNode(styles));
						
						/* Append style to the tag name */ 
						document.getElementsByTagName("head")[0].appendChild(css)

						commit("setStructure", structure)
						commit("setOptions", options)
						commit("setLongread", longread)
						commit("setLoaded", true)
						self.commit("setLoadedPage", true)

					} else {
						self.commit("setLoadedPage", true)
						commit("setIsLocked", true)
					}

					console.log(response.data)
					
				})
				.catch(function (error) {
					console.log(error.response);
				});
			} else {
				let structure = picker(LocalStorageService.get("longread_structure"), []);
				commit("setStructure", structure);
			}
		},
		pushStructure() { 
			// если были изменения в state, шлется запрос на сервак с содержимым локалстораджа
		},



		addElement({ commit }, payload) {
			commit("addElement", payload);
		},
		removeElement( {commit }, payload) {
			commit("removeElement", payload);
		},
		changeElement( {commit}, payload) {
			commit('changeElement', payload);
		}
	},
}