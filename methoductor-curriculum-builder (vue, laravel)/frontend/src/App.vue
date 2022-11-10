<template>
	<navbar />
	<div class="main-wrapper" id="main-wrapper">
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
	<preloader :show_loader="loader.main"/>
	<div id="mobile-checker" />

	<messenger/>
</template>
<style lang="scss" src="@/assets/scss/app.scss">
</style>
<script>
import { onMounted } from "vue"
import loader from "@/store/loader"
import preloader from "@/components/preloader"

import Navbar from "@/components/navbar"
import global from '@/store/application'
import Messenger from "@/components/messenger"

export default {
	setup() {
		onMounted(() => {
			if(document.getElementById('mobile-checker').getBoundingClientRect().width > 0) {
				global.is_mobile = true
			}
			//console.dir(global.is_mobile)
		})
		
		return { loader }
	},
	components: {
		preloader,
		Navbar,
		Messenger
	}
}
</script>