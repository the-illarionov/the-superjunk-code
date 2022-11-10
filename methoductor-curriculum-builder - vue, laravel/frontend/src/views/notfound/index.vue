<template>
	<div class="center">
		<div v-html='translate("unluck")'>
		</div>
		<span style="font-size: 3em; white-space: nowrap">(ಥ﹏ಥ)</span>
	</div>
</template>

<script>
import localization from "@/composables/localization"
import messages from '@/localization/views/notfound'



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