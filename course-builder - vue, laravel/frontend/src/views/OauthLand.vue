<template>
	<div class="parent">
        Вход выполнен!
	</div>
</template>

<style scoped>
.parent {
	width: 80vw;
	margin: 20vh auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
}
</style>

<script>
export default {
	data() {
		return {
		}
	},
	beforeDestroy() {
		this.$store.commit("setLoadedPage", false)
	},
	mounted() {
		localStorage.setItem('token', this.$route.query.token)
        this.$store.state.logged = true
		let user = JSON.parse(this.$route.query.user)
		if(user.email == "amazing216man@gmail.com" || user.email == "lavrikanec@gmail.com") {
			this.$store.state.admin = true
			localStorage.setItem('admin',true)
			console.log("you're in admin mode now")
		} else {
			localStorage.setItem('admin',false)
		}
        localStorage.setItem('user_slug', user.slug)
        this.$store.dispatch("setUserSlug", user.slug)
        this.$router.push(user.slug)
        this.$store.commit("setLoadedPage", true)
	}
}
</script>
