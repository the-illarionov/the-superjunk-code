import Vue from 'vue'
import Vuex from 'vuex'
import LongreadModule from './longread'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		navbar_collapsed: true,
		sidenav_collapsed: true,
		observer: null,
		media_loaded: false,
		logged: false,
		loaded_page: true,
		admin: false,
		user_slug: '',
		api_url: process.env.VUE_APP_API,
		files_url: process.env.VUE_APP_STORAGE,
		maxsymbols: 500,
		maxsymbols_header: 60,
		longread_update_interval: 1500,
	},
	mutations: {
		setNavbarCollapsed(state, collapsed) {
			state.navbar_collapsed = collapsed;
		},
		setSidenavCollapsed(state, collapsed) {
			state.sidenav_collapsed = collapsed;
		},
		setObserver(state, observer) {
			state.observer = observer;
		},
		setMediaLoaded(state) {
			state.media_loaded = true;
		},
		setLoadedPage(state,value) {
			state.loaded_page = value;
		},
		setUserSlug(state, slug) {
			state.user_slug = slug;
		},
		
	},
	actions: {
		setNavbarCollapsed({ commit }, collapsed) {
			commit("setNavbarCollapsed", collapsed);
		},
		setUserSlug({ commit }, slug) {
			commit("setUserSlug", slug);
		},
		initObserver({ commit, dispatch }) {
			let observer = null;

			if ("IntersectionObserver" in window) {
				observer = new IntersectionObserver( (entries) => {
					entries.forEach( entry => {
						if(entry.target.nodeName.toLowerCase() == "video") {
							entry.target.oncanplaythrough= () => {
								dispatch("entryLoaded", entry);
							};
						} else {
							entry.target.onload = () => {
								dispatch("entryLoaded", entry);
							};
						}
	
						if(entry.isIntersecting) {
							//console.log('intersec', entry)
							entry.target.src = entry.target.dataset.lazySrc;

							//if(entry.target.classList.contains("ld-lazy-load_loaded")) {
								observer.unobserve(entry.target);
							//}
						}
					});
				}, {
					root: null,
					threshold: 0.01,
					rootMargin: "0px",
				});
			}
			commit("setObserver", observer);
		},
		setMediaLoaded({ /*state,*/ commit }) {
			commit("setMediaLoaded");
			/*
			#REFACTOR:
			для скиллбокса, чтобы сразу прелоадер убирался главный. а так тут надо чекать есть ли обсерваблы сейчас в поле зрения и если есть то ждать загрузки а если нет то сразу убирать

			if(state.longread.is_author || state.longread.structure.length == 0) {
				commit("setMediaLoaded");
				console.log('qqqqqwwwwwwwww')
			}
			else {
				setTimeout( () => {
					
					commit("setMediaLoaded");
				}, 5000);
			}
			*/
		},
		entryLoaded({ commit }, entry = null) {
			if(entry) {
				entry.target.classList.add("ld-lazy-load_loaded");
			}
			commit("setMediaLoaded");
		},
		lazyForceLoad() {
			let lazys = document.querySelectorAll(".ld-lazy-load");

			lazys.forEach((lazy) => {
				lazy.src = lazy.dataset.lazySrc;
			});
		}
	},
	modules: {
		longread: LongreadModule,
	}
})