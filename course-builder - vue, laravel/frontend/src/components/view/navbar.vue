<template>
<div class="navbar" :class="{ 'collapsed' : $store.state.sidenav_collapsed }">
	
	<div class="links">
		<div class="logo">interactor</div>
		<router-link class="button button-without-border link" to="/">Главная</router-link>
		
		<template v-if="!$store.state.logged">
			<router-link class="link button button-without-border" to="/demo">Опробовать</router-link>
			<router-link class="link button button-without-border" to="/login">Войти</router-link>
			<router-link class="link button button-without-border" to="/register">Зарегистрироваться</router-link>
		</template>
		<template v-else>
			<router-link class="link button button-without-border" :to="'/'+$store.state.user_slug" replace>Уроки</router-link>
			<router-link class="link button button-without-border" v-if="$store.state.admin" to="/admin" replace>Админ</router-link>
			<a v-if="$store.state.logged" @click="logoff" href="#" class="link button button-without-border">Выйти</a>
		</template>
		
		<router-link class="link button button-without-border mt-5" to="/feedback">Обратная связь</router-link>
	</div>
	<div class="menu">
		<img src="~@/assets/images/menu.svg" @click="panel=!panel"/>
	</div>
	<div class="button toggle" @click="toggle_sidenav">
		<template v-if="$store.state.sidenav_collapsed">
			Покажу меню
		</template>
		<template v-else>
			Скрою меню
		</template>
	</div>
	<!--
	<div class="panel" v-show="panel">
		<div class="section">
			<router-link to="/" @click.native="panel=!panel">
			Главная
			</router-link>
			
			<router-link to="/demo" @click.native="panel=!panel">
			Опробовать
			</router-link>
			<router-link v-if="!$store.state.logged" to="/login" @click.native="panel=!panel">
			Войти
			</router-link>
			<router-link v-if="!$store.state.logged" to="/register" @click.native="panel=!panel">
			Зарегистрироваться
			</router-link>
			<router-link v-if="$store.state.logged" :to="'/'+$store.state.user_slug" replace  @click.native="panel=!panel">
			Профиль
			</router-link>
			<router-link to="/feedback" @click.native="panel=!panel">
			Обратная связь
			</router-link>
			<a v-if="$store.state.logged" @click="logoff" href="#">Выйти</a>
			<div class="reminder">
				На данный момент сервис не оптимизирован для работы на смартфонах
			</div>
		</div>
	</div>
	-->
</div>
</template>
<script>
export default {
	data() {
		return {
			panel: false
		}
	},
	methods: {
		logoff() {
			localStorage.removeItem('token')
			localStorage.removeItem('user_slug')
			this.$store.state.logged = false
			this.panel = false
			this.$router.push('/')
		},
		toggle_sidenav() {
			this.$store.commit("setSidenavCollapsed", !this.$store.state.sidenav_collapsed);
		}
	}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
.menu {
	display: none;
}
.navbar {
	width: 220px;
	position: fixed;
	top: 0; left: 0; bottom: 0;
	z-index: 2000;
	background: $color_level2;
	transition: transform .3s;

	.links {

		.link {
			display: block;
		}

		.logo {
			padding: 50px 20px;
		}

	}

	.toggle {
		position: absolute;
		bottom: 0;
		left: 100%;
		background: $color_level1;

		&:hover {
			background: $color_white;
		}
	}

	&.collapsed {
		transform: translate3d(-100%,0,0)
	}
	/*
	.panel {
		height: 100vh;
		display: block;

		.section {
			display: flex;
			flex-flow: column;
			padding: 0 1rem;

			a {
				margin-bottom: 1em;
				color: #000;
			}
			
			.reminder {
				font-size: 12px;
			}
		}
	}
	*/
}
/*
@media screen and (max-width:991px) {
	.links {
		display: none!important;
	}
	.menu {
		display: flex;
		justify-content: flex-end;
		img {
			width: 40px;
		}
	}
}
*/
</style>
