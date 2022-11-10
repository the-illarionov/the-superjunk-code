<template>
	<div></div>
</template>
<script>
import { useRouter, useRoute } from "vue-router"
import { onMounted } from "vue"

import user from "@/stores/User"

export default {
	setup() {
		const route = useRoute()
		const router = useRouter()

		onMounted(() => {
			localStorage.setItem("token", route.query.special3)

			user.login().then(() => {
				let path = localStorage.getItem("path")

				if (path) {
					router.replace(path)
				} else {
					router.replace({
						name: "Profile",
						params: { nickname: user.nickname }
					})
				}
			})
		})
	}
}
</script>
