<template>
	<div class="parent" v-html="translate('policy')">
		
	</div>
</template>

<script>
import localization from "@/composables/localization"
import messages from '@/localization/views/privacy'



const translate = localization(messages)

export default {
    setup() {
        return { translate }
    }
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
