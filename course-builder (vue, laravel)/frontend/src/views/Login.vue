<template>
	<div class="parent">
		<h1>
			Что поведаем миру сегодня?
		</h1>
		<div class="text-field" @keyup.enter="submit">
			<input v-model="email" placeholder="Email">
			<input v-model="password" type="password" placeholder="Пароль">
			<span @click="submit" class="button mb-3">
				Войти
			</span>
		</div>
		<div class="icons">
			<a :href="$store.state.api_url + 'login_facebook'">
				<i class="lab la-facebook-f mr-5"></i>
			</a>
			<a :href="$store.state.api_url + 'login_google'">
				<i class="lab la-google-plus"></i>
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

i {
	font-size: 40px;
	border: 1px solid $color_white;
	padding: 5px;
}
.parent {
	width: 80vw;
	margin: 20vh auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
}
.text-field input {
	padding: 20px 0;
	max-width: 550px;
	width: 100%;
	margin-bottom: 20px;
}
.text-field {
	max-width: 550px;
	width: 80%;
	margin-bottom: 20px;
	text-align: center;
}
@media screen and (max-width: 991px) {
	.parent {
		width: 90vw;
	}
}
</style>

<script>
import axios from 'axios'
export default {
	beforeDestroy() {
		this.$store.commit("setLoadedPage", false)
	},
	mounted() {
        this.$store.commit("setLoadedPage", true)
	},
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		submit: function() {
			this.$store.commit("setLoadedPage", false)
			let self = this
			axios.post(self.$store.state.api_url + 'login', {
				email: self.email,
				password: self.password,
			})
			.then(function (response) {
				console.log(response.data)
				if(response.data.status) {
					if(response.data.is_admin) {
						self.$store.state.admin = true
						localStorage.setItem('admin',true)
						console.log("you're in admin mode now")
					} else {
						localStorage.setItem('admin',false)
					}
					localStorage.setItem('token', response.data.token)
					self.$store.state.logged = true
					localStorage.setItem('user_slug', response.data.user.slug)
					self.$store.dispatch("setUserSlug", response.data.user.slug)
					self.$router.push(response.data.user.slug)
					
					self.$modal.methods.open('info','Готово!')
				} else {
					self.$modal.methods.open('error','Что-то пошло не так')
				}
			})
			.catch(function (error) {
				self.$store.commit("setLoadedPage", true)
				console.log(error.response)
				self.$modal.methods.open('error',error.response.data.message)
			});
		},
	}
}
</script>
