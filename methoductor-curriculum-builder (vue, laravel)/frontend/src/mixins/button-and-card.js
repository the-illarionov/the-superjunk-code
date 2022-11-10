const mixin = {
	props: {
		noBg: {
			default() {
				return false
			},
			type: Boolean,
		},
		disabled: {
			default() {
				return false
			},
			type: Boolean,
		},
		block: {
			default() {
				return false
			},
			type: Boolean,
		},
		active: {
			default() {
				return false
			}
		},
		
		icon: {
			default() {
				return false
			},
			type: Boolean
		},

		fillHeight: {
			default() {
				return false
			},
			type: Boolean
		},
		small:  {
			default() {
				return false
			},
			type: Boolean
		},
	},
	computed: {
		css() {
			return {
				"no-bg": this.noBg,
				"disabled": this.disabled,
				"block": this.block,
				"active": this.active,
				'icon': this.icon,
				"h-100": this.fillHeight,
				"small": this.small
			}
		}
	},
}

export default mixin