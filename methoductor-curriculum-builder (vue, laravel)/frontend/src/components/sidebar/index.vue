<template>
<div class="sidebar" :class="global.sidebar_active ? 'sidebar_active' : ''">
	<slot name="default"></slot>
</div>
<div class="sidebar-cover" @click="global.sidebar_active = false"></div>
</template>

<script>
import global from "@/store/application"

export default {
	setup() {
		return {
			global
		}
	}
}
</script>

<style lang="scss">
@import './index';
</style>