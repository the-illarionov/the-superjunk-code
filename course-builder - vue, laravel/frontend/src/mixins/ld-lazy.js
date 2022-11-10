export let mixin_ld_lazy = {
	mounted() {
		if(this.$store.state.observer) this.$store.state.observer.observe( this.$refs.lazy_element );
	},
	data() {
		return {
			m_loaded: false,
		}
	},
	methods: {
		m_hasLoaded() {
			/*
			this.m_changeElement({
				loaded: true,
			});
			*/
			this.m_loaded = true;
			//console.log('has loaded')
		},
		m_changeSrc(src) {
			this.$refs.lazy_element.src = src;
		}
	},
}