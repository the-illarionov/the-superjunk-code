<template>
	<div class="parent">
        К сожалению, вы не можете авторизоваться через Facebook. <br/>
		Попробуйте другой способ
		<router-link to="/login">Перейти к странице авторизации</router-link>
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
	beforeDestroy() {
		this.$store.commit("setLoadedPage", false)
	},
	mounted() {
        this.$store.commit("setLoadedPage", true)
	},
}
</script>
