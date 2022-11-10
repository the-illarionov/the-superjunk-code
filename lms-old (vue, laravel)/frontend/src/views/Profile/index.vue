<template>
	<div>
		<p>
			<span class="skeleton-container inline"
				>{{ viewedUser?.name }}&nbsp;</span
			>
		</p>
		<p v-if="viewedUser?.isOwner">
			<span @click="user.logout">logout</span>
		</p>

		<div v-if="viewedUser?.isOwner">
			<p>
				<input type="text" v-model="user.name" />
			</p>
			<p>
				<input type="text" v-model="user.nickname" />
			</p>

			<router-link
				:to="{
					name: 'Profile',
					params: { nickname: '111' }
				}"
				>switch</router-link
			>

			<router-link
				:to="{
					name: 'EditorOfCourses'
				}"
				>Редактируемые курсы</router-link
			>
			<router-link
				:to="{
					name: 'StudentOfCourses'
				}"
				>Изучаемые курсы</router-link
			>
		</div>
	</div>
</template>
<script>
import { ref } from "vue"

import user from "@/stores/User"
import initView from "@/common/InitView"
import watchAndSaveInput from "@/common/WatchAndSaveInput"

const viewedUser = ref(null)

export default {
	...initView({
		url: `/users/:nickname`,
		item: viewedUser
	}),
	setup() {
		watchAndSaveInput({
			object: user,
			url: "/users/:nickname",
			property: "name"
		})

		watchAndSaveInput({
			object: user,
			url: "/users/:nickname",
			property: "nickname",
			forceReload: true
		})

		return {
			user,
			viewedUser
		}
	},
	components: {}
}
</script>
