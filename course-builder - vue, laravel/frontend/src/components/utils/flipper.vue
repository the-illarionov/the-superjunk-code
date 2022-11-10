<template>
	<div class="flipper-container">
		<transition name="top-to-bottom" mode="out-in" appear>
			<div v-if="tracked" key="front">
				<template v-if="button">
					<button>
						<slot name="front"></slot>
					</button>
				</template>
				<template v-else>
					<slot name="front"></slot>
				</template>
			</div>
			<div v-else key="back">
				<template v-if="button">
					<button>
						<slot name="back"></slot>
					</button>
				</template>
				<template v-else>
					<slot name="back"></slot>
				</template>
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	mounted() {
		//console.log(this.tracked)
	},
	computed: {
		
	},
	props: {
		duration: {
			default() {
				return 500;
			}
		},
		tracked: {
			required: true,
		},
		button: {
			default() {
				return true;
			}
		}
	},
}
</script>