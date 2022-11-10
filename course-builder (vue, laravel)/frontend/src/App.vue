<template>
	<div id="app">
		
		<navbar v-if="show_navbar"/>
		
		<transition name="left-to-right">
			<router-view/>
		</transition>
		<div class="loader-background" v-if="!$store.state.loaded_page">
			<transition name="fade" v-if="!$store.state.loaded_page">
				<div class="loader-wrapper">
					<div class="loader">
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
/*
	Changes to test github ssh key
*/
import navbar from '@/components/view/navbar';

export default {
	mounted() {
		if(localStorage.getItem('token')) {
			let slug = localStorage.getItem('user_slug')
			if(localStorage.getItem('admin') == 'true') {
				this.$store.state.admin = true
			} else {
				this.$store.state.admin = false
			}
			this.$store.state.logged = true
			this.$store.dispatch("setUserSlug", slug)
			//this.$store.state.user_slug = slug
		}
		this.check_show_navbar()
	},
	methods: {
		check_show_navbar() {
			if(
				this.$router.currentRoute.path !== '/s/3/1' && 
				this.$router.currentRoute.path !== '/s/3/2' &&
				this.$router.currentRoute.path !== '/s/3/3' &&
				this.$router.currentRoute.path !== '/s/3/4' &&
				this.$router.currentRoute.path !== '/s/3/5' &&
				this.$router.currentRoute.path !== '/s/3/6' &&
				this.$router.currentRoute.path !== '/s/3/7' &&
				this.$router.currentRoute.path !== '/s/3/8'&&
				this.$router.currentRoute.name !== 'embed') {
				this.show_navbar = true
			} else {
				this.show_navbar = false
			}
		}
		/*
			#REFACTOR
			Нужно удалить все views со skillbox и 
			переместить их на прод, выпилить их 
			условия из navbar и routes
		*/
	},
	data() {
		return {
			show_navbar: true,
		}
	},
	components: {
		navbar,
	}
}
</script>