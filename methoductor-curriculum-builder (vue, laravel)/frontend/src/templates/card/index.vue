<template>
<transition name="top-to-bottom">
	<div class="card" :class="css" v-if="show">
		<slot name="default"></slot>
		<span class="close" @click="show = false" v-if="closeable">
			<i class="las la-times"></i>
		</span>
	</div>
</transition>
</template>

<script>
import mixin from "@/mixins/button-and-card"
import { ref } from "vue"

export default {
	mixins: [ mixin ],
	props: {
		closeable: {
			default: false,
			type: Boolean,
		},
	},
	setup() {
		const show = ref(true)

		return {
			show
		}
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>