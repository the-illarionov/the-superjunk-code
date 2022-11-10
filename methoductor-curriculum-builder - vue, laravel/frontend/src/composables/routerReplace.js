import { useRouter, useRoute } from "vue-router"
import append from '@/composables/append'

export default async function(redirect, router = null, route = null) {
	if(!router) router = useRouter()
	if(!route) route = useRoute()

	router.replace(append(route, redirect))
}