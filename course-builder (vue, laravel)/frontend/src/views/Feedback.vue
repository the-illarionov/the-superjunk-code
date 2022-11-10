<template>
	<div class="parent">
		<h1>
			Обратная связь
		</h1>
		<p>
			Здесь вы можете сообщить об ошибке или внести предложение о новых возможностях. 
		</p>
		<textarea placeholder="Введите сообщение" v-model="message">
		</textarea>
		<p>Или можете написать в <a href="https://t.me/interactor_chat">наш Telegram чат</a> </p>
		<p>
			Можете оставить контактные данные, чтобы получить сообщение когда мы обработаем ваше сообщение
		</p>
		<input class="text-field" v-model="email" placeholder="Email">
		<p>
			или
		</p>
		<input class="text-field" v-model="phone" placeholder="Телефон">
		<span @click="submit" class="button">
			Отправить
		</span>
	</div>
</template>

<style scoped>
a{
	text-decoration: underline;
}
.parent {
	width: 80vw;
	margin: 10vh auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
}
.text-field {
	padding: 20px;
	max-width: 550px;
	width: 80%;
	margin-bottom: 20px;
}
textarea {
	margin-bottom: 20px;
	min-height: 200px;
	width: 80%;
	padding: 20px;
	max-width: 550px;
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
			phone: '',
			message: '',
		}
	},
	methods: {
		submit: function() {
			let self = this
			axios.post(self.$store.state.api_url + 'feedback', {
				email: self.email,
				phone: self.phone,
				message: self.message,
			})
			.then(function () {
				self.$modal.methods.open('info','Отправлено!')
				self.phone = ''
				self.email = ''
				self.message = ''
			})
			.catch(function () {
				
				self.$modal.methods.open('error','Что-то пошло не так, удостоверьтесь что сообщение не пустое или попробуйте позже')
			});
		}
	}
}
</script>
