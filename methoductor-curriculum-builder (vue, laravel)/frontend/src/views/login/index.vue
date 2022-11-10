<template>
	<div class="parent">
		<h1 class="mb-3 header-3">
			{{ translate("login.hello") }}
		</h1>
		<div class="text-field" @keyup.enter="login">
			<transition name="top-to-bottom">
				<modal v-if="state.unauthorized" type="tooltiptime" @hide="state.unauthorized = false">
					<div class="ws-preline">{{ translate("login.unauthorized") }}</div>
				</modal>
			</transition>
			<transition name="top-to-bottom">
				<modal v-if="state.mail_required_login" type="tooltiptime" @hide="state.mail_required_login = false">
					<div class="ws-preline">{{ translate("login.mail_required_login") }}</div>
				</modal>
			</transition>
			<v-input
				block
				placeholder="Email"
				v-model="state.email" />
			<transition name="top-to-bottom">
				<modal v-if="state.pass_required_login" type="tooltiptime" @hide="state.pass_required_login = false">
					<div class="ws-preline">{{ translate("login.pass_required_login") }}</div>
				</modal>
			</transition>
			<v-input
				block
				type="password" 
				:placeholder="translate('password')"
				v-model="state.password" />
			<v-button
				class="my-3"
				@click="login">
				{{ translate("login.enter") }}
			</v-button>
		</div>
		<div class="icons">
			<a href="https://methoductor.com/api/login_facebook">
				<i class="lab la-facebook-f mr-5"></i>
			</a>
			<a href="https://methoductor.com/api/login_google">
				<i class="lab la-google-plus"></i>
			</a>
		</div>
	</div>
</template>

<script>
import useLogin from '@/composables/login'
import localization from "@/composables/localization"
import messages from '@/localization/views/auth'
import VInput from '@/components/form/v-input'
import VButton from "@/components/form/v-button"
import modal from "@/components/modal"

const translate = localization(messages)

export default {
	components: {
		VInput,
		VButton,
		modal
	},
    setup() {
		const { state, login } = useLogin()
        return { state, login, translate }
    },
	beforeRouteEnter(to, from, next) {
        if(localStorage.getItem("token")) next({ name: 'profile' })
        else next()
    }
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
