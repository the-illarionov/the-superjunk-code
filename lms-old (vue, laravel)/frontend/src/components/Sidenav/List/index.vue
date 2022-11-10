<template>
	<ul class="list">
		<template v-if="routes.length > 0">
			<router-link
				v-for="(route, index) in routes"
				:key="`sidenav-${index}`"
				:to="{
					name: route.name,
					params: getParams(route)
				}"
				custom
				v-slot="{ isActive, isExactActive, href, navigate }"
			>
				<li class="list-item" :class="{ active: isActive }">
					<div class="list-link-container">
						<span
							v-if="route.children"
							@click="toggleExpand"
							class="expander"
						/>
						<a
							:href="href"
							@click="navigate"
							class="list-link"
							:class="{ active: isExactActive }"
						>
							<div
								:class="{ 'skeleton-container': route.dynamic }"
							>
								<item-name :route="route" />
							</div>
						</a>
					</div>
					<list v-if="route.children" :routes="route.children" />
				</li>
			</router-link>
		</template>
		<template v-else>
			<li class="list-item">Выберите элемент</li>
		</template>
	</ul>
</template>
<script>
import { useRoute } from "vue-router"
import ItemName from "./Name"

export default {
	setup() {
		const currentRoute = useRoute()

		function toggleExpand(e) {
			e.target.parentNode.parentNode.classList.toggle("active")
		}

		function getParams(route) {
			if (route.dynamic) {
				let params = {}
				route.dynamic.params.forEach((param) => {
					params[param] = currentRoute.params[param]
				})
				return params
			}
			return route.params
		}

		return {
			toggleExpand,
			getParams
		}
	},
	props: {
		routes: {
			required: true,
			type: Array
		}
	},
	components: {
		ItemName
	},
	name: "list"
}
</script>
<style scoped lang="scss" src="./index.scss" />
