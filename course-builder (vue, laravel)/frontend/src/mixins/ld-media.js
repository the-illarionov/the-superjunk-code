import dropzone from '@/components/utils/dropzone';
//import { elements_types } from '@/components/ld/elements/types';

export let mixin_ld_media = {
	mounted() {
		/*
		this.m_changeElement({
			loaded: false,
		});
		*/
		console.log(process.env.NODE_ENV)
	},
    computed: {
		m_file() {
			return {
				src: this.m_element.src,
				fileName: this.m_element.fileName,
				size: this.m_element.size,
				type: this.m_element.type,
			}
		},
		m_file_src() {
			return this.m_element.src;
		},
		m_wrapper_class() {
			return {
				"ld-media-wrapper-fixed-height" : !this.m_loaded,
			}
		},
		m_highlights_bg: {
			get() {
				if(this.m_element.highlights_bg == undefined) {
					return "rgba(0,0,0,0.65)"
				} else {
					return this.m_element.highlights_bg
				}
			},
			set(value) {
				this.m_changeElement({ 
					highlights_bg: value
				})
			}
		}
	},
	methods: {
		m_delete_highlights() {
			this.m_changeElement({ 
				highlights: []
			})
		}
	},
    watch: {
		m_file_src(newVal) {
			if(!newVal) {
				this.m_changeElement({
					loaded: false,
				});
				this.$refs.lazy_element.src = null;
				this.$refs.lazy_element.classList.remove("ld-lazy-load_loaded")
			}
		}
    },
    components: {
		dropzone,
	}
}