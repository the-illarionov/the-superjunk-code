<template>
	<div class="center">
		<span style="white-space: nowrap">500 error</span>
		<div v-html='translate("servererror")'>
		</div>
	</div>
</template>

<script>
import localization from "@/composables/localization"
import messages from '@/localization/views/servererror'



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