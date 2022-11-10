<template>
	<div class="parent">
		<h1 class="mb-3 header-3">
			{{ translate("signin.welcome") }}
		</h1>
		<div class="text-field" @keyup.enter="reg">
			<transition name="top-to-bottom">
				<modal v-if="state.unique" type="tooltiptime" @hide="state.unique = false">
					<div class="ws-preline">{{ translate("signin.unique") }}</div>
				</modal>
			</transition>
			<transition name="top-to-bottom">
				<modal v-if="state.valid" type="tooltiptime" @hide="state.valid = false">
					<div class="ws-preline">{{ translate("signin.valid") }}</div>
				</modal>
			</transition>
			<transition name="top-to-bottom">
				<modal v-if="state.mail_required_signup" type="tooltiptime" @hide="state.mail_required_signup = false">
					<div class="ws-preline">{{ translate("signin.mail_required_signup") }}</div>
				</modal>
			</transition>
			<v-input
				block
				placeholder="Email"
				v-model="state.email"
				@keyup="validate" />
			<transition name="top-to-bottom">
				<modal v-if="state.mismatch" type="tooltiptime" @hide="state.mismatch = false">
					<div class="ws-preline">{{ translate("signin.mismatch") }}</div>
				</modal>
			</transition>
			<transition name="top-to-bottom">
				<modal v-if="state.pass_required_signup" type="tooltiptime" @hide="state.pass_required_signup = false">
					<div class="ws-preline">{{ translate("signin.pass_required_signup") }}</div>
				</modal>
			</transition>
			<v-input
				block
				type="password" 
				:placeholder="translate('password')"
				v-model="state.password"
				@keyup="validate"  />
			<transition name="top-to-bottom">
				<modal v-if="state.pass_confirm_required_signup" type="tooltiptime" @hide="state.pass_confirm_required_signup = false">
					<div class="ws-preline">{{ translate("signin.pass_confirm_required_signup") }}</div>
				</modal>
			</transition>
			<v-input
				block
				type="password" 
				:placeholder="translate('password_confirm')"
				v-model="state.password_confirmation"
				@keyup="validate"  />
			<v-button
				class="my-3"
				@click="reg">
				{{ translate("signin.reg") }}
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

import { onBeforeMount } from 'vue'

const translate = localization(messages)

export default {
	components: {
		VInput,
		VButton,
		modal,
	},
    setup() {
		onBeforeMount(() => {
			ym(71143837,'reachGoal','visit_reg')
		})
        const { state, reg, validate } = useLogin()
		return { state, reg, translate, validate }
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
