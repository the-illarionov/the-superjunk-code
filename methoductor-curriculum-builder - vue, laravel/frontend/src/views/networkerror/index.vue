<template>
	<div class="center">
		<span style="white-space: nowrap">{{translate("networkerror")}}</span>
		<div v-html='translate("describe")'>
		</div>
	</div>
</template>

<script>
import localization from "@/composables/localization"
import messages from '@/localization/views/networkerror'

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