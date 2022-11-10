<template>
	<div class="parent">
		<h1>
			Добро пожаловать в команду
		</h1>
		<div class="text-field" @keyup.enter="submit">
			<input v-model="name" placeholder="Название организации">
			<input v-model="email" placeholder="Email">
			<input v-model="password" type="password" placeholder="Пароль">
			<input v-model="password_confirmation" type="password" placeholder="Подтверждение пароля">
			<div class="agreement">
				Нажимая кнопку «Зарегистрироваться», я подтверждаю, что ознакомился с положениями, указанными в статьях <a href="/privacy">Политика обработки персональных данных</a> и <a href="/agreement">Пользовательское соглашение</a>.
			</div>
			<span @click="submit" class="button mb-3">
				Зарегистрироваться
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
.agreement {
	text-align: left;
	padding: 15px 0;
}
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
			name: '',
			email: '',
			password: '',
			password_confirmation: '',
		}
	},
	methods: {
		submit: function() {
			this.$store.commit("setLoadedPage", false)
			let self = this
			axios.post(self.$store.state.api_url + 'register', {
				name: self.name,
				email: self.email,
				password: self.password,
				password_confirmation: self.password_confirmation,
			})
			.then(function (response) {
				console.log(response.data)
				
				self.$modal.methods.open('info','Готово!')
				self.$router.push('login')
			})
			.catch(function (error) {
				self.$store.commit("setLoadedPage", true)
				console.log(error.response);
				let errorText = '';
				for(let key in error.response.data.errors) {
					errorText = errorText + ' ' + error.response.data.errors[key]
				}
				self.$modal.methods.open('error',errorText)
			});
		}
	}
}
</script>
