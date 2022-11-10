<template>
	<div class="parent">
        {{ translate("oauthland.done") }}
	</div>
</template>

<style scoped lang="scss">
@import "./index";
</style>

<script>
import router from '@/router/index'
import useUser from '@/store/user'
import { useRoute } from 'vue-router'
import { onMounted } from "vue"

import localization from "@/composables/localization"
import messages from '@/localization/views/auth'
import api from '@/api'


const translate = localization(messages)

export default {
    setup() {
		const route = useRoute()
        const { state_user } = useUser()
        onMounted(() => {
            let token = route.query.token
			localStorage.setItem('token', token)
            api.defaults.headers['Authorization'] = "Bearer " + token

            let user = JSON.parse(route.query.user)
            state_user.user = user
            state_user.getInfo = new Promise((resolve) => {
                resolve()
            })

			router.replace({ name: 'profile' })
        })
        return {
            translate,
        }
    }
}
</script>
