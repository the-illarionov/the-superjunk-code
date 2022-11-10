<template>
	<div class="parent">
        <p v-html="translate('facebook.unfortunately')">
		</p>
		<router-link to="/login">{{ translate("facebook.to_auth") }}</router-link>
	</div>
</template>
<script>

import localization from "@/composables/localization"
import messages from '@/localization/views/auth'



const translate = localization(messages)

export default {
	setup() {
		return {
			translate,
		}
	}
	
}
</script>
<style scoped lang="scss">
@import "./index";
</style>