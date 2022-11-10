<template>
	<div class="navbar">
		<span class="sandwitch"
			@click="global.sidebar_active = !global.sidebar_active">
			<i class="las la-bars"></i>
		</span>

		<router-link :to="state_user.authorized ? { name: 'profile' } : '/'" class="ml-0">
			<img src="@/assets/images/logo.png" style="width: 60px; margin-right: 15px" />
		</router-link>
		
		<sidebar>
			<div class="sidebar__wrapper" @click="global.sidebar_active = false">
				<editor-menu v-if="
					$route.name == 'workspace-blank' ||
					$route.name == 'course-workspace-blank' ||

					$route.name == 'goal' ||
					$route.name == 'course-goal' ||

					$route.name == 'workspace' ||
					$route.name == 'course-workspace' || 

					$route.name == 'export' ||
					$route.name == 'course-export'
				" />
				
				<template v-else>
					&nbsp;

					<div v-if="$route.name == 'main'" class="mx-auto">
						<a href="/#functionality" class="sidebar-mobile-link">{{ translate("functionality") }}</a>
						<!--
						<a href="/#methodist">{{ translate("methodist") }}</a>
						-->
						<a href="/#about" class="sidebar-mobile-link">{{ translate("about") }}</a>
						<a href="/#pricing" class="sidebar-mobile-link">{{ translate("tariffs") }}</a>
						<span @click="loader.main = false">
							<router-link to="/demo" class="sidebar-mobile-link">{{ translate("demo") }}</router-link>
						</span>
					</div>
					
					<div v-if="!state_user.authorized">
						<router-link to="/login" class="sidebar-mobile-link">{{ translate("login") }}</router-link>
						<router-link to="/signup" class="sidebar-mobile-link">{{ translate("signin") }}</router-link>
						
						<router-link v-if="$route.name != 'main'" to="/" class="sidebar-mobile-link">{{ translate("main") }}</router-link>
						
					</div>
					<div v-else>
						<router-link :to="{ name: 'profile' }" class="sidebar-mobile-link" v-if="$route.name != 'profile'">{{ translate("create_course") }}</router-link>
						<a href="#" @click="logout">
							{{ translate('logout') }}
						</a>
					</div>

				</template>
			</div>
		</sidebar>
	</div>
</template>

<script>
import global from "@/store/application"
import loader from "@/store/loader"
import useLogin from "@/composables/login"
import useUser from '@/store/user'
import Sidebar from '@/components/sidebar'
import EditorMenu from './editor-menu'

import translate from './translate'

export default {
	setup() {
		const { state_user } = useUser()
		const { logout } = useLogin()

		return {
			state_user,
			translate,
			global,
			loader,
			logout
		}
	},
	components: {
		Sidebar,
		EditorMenu
	}

}
</script>

<style lang="scss">
@import "./index";
</style>