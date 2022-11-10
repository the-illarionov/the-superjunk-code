<template>
	<transition name="fade">
		<modal v-show="application.modal.visible" />
	</transition>

	<sidenav :class="{ 'skeleton-hidden': !application.skeleton.visible }" />

	<div
		class="main"
		:class="{ 'skeleton-hidden': !application.skeleton.visible }"
	>
		<router-view v-slot="{ Component }">
			<error-handler
				v-if="application.error"
				:error="application.error"
			/>
			<div class="main__content">
				<transition name="fade" mode="out-in">
					<component :is="Component" v-if="!application.error" />
				</transition>
			</div>
		</router-view>

		<custom-footer />
	</div>

	<preloader :controller="application.preloaders.main" />
</template>
<style lang="scss" src="@/assets/scss/app.scss"></style>
<style scoped>
.main {
	position: relative;
	height: 100%;
}

.sidenav + .main {
	margin-left: 240px;
}

.main__content {
	min-height: 100%;
}
</style>
<script>
import Preloader from "@/components/Preloader"
import Sidenav from "@/components/Sidenav"
import Footer from "@/components/Footer"
import Modal from "@/components/Modal"
import ErrorHandler from "@/components/ErrorHandler"

import application from "@/stores/Application"

export default {
	setup() {
		return {
			application
		}
	},
	components: {
		Preloader,
		Sidenav,
		CustomFooter: Footer,
		Modal,
		ErrorHandler
	}
}
</script>
<style scoped>
.main {
	min-height: 100%;
}
</style>
