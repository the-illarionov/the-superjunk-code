<template>
	<div v-html="translate('hint')" />
    <examples
        :source="example"
    />
</template>

<script>
import translate from './translate'
import Examples from "@/components/example"

export default {
	setup() {
        const example = 
            {
                good: [
                    {
                        text: translate('good.text'),
                    }
                ],
                bad: [
                    {
                        text: translate('bad.text'),
                        explain: translate('bad.explain'),
                    }
                ],
            }
		return {
            translate,
            example
		}
	},
	components: {
		Examples,
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>