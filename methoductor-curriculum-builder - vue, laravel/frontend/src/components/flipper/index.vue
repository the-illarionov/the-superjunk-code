<template>
	<div class="flipper" ref="flipper">
		<div class="flipper__container" :class="flipper_class">
			<div class="flipper__front" ref="front">
				<slot name="front"></slot>
				<div class="flipper__button" @click="flipped = !flipped">
					<slot name="front-button"></slot>
				</div>
			</div>

			<div class="flipper__back" ref="back">
				<slot name="back"></slot>
				<div class="flipper__button" @click="flipped = !flipped">
					<slot name="back-button"></slot>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	mounted() {
		this.$refs.flipper.style.height = this.flipped ? this.$refs.back.clientHeight + "px" : this.$refs.front.clientHeight + "px"
	},
	updated() {
		this.$refs.flipper.style.height = this.flipped ? this.$refs.back.clientHeight + "px" : this.$refs.front.clientHeight + "px"
	},
	computed: {
		flipper_class() {
			return {
				"flipped" : this.flipped
			}
		}
	},
	watch: {
		flipped: {
			handler(newValue) {
				setTimeout(() => {
					if(newValue) {
						this.$refs.flipper.style.height = this.$refs.back.clientHeight + "px"
					} else {
						this.$refs.flipper.style.height = this.$refs.front.clientHeight + "px"
					}
				}, 300)
				
			}
		} 
	},
	props: {
		flipped: {
			default() {
				return false
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>