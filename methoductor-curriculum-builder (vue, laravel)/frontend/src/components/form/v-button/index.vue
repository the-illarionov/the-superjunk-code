<template>
	<span
		class="button" 
		:class="css"
		@click="hover = !hover"
		@mouseleave="hover = false">
		<span>
			<slot name="default"></slot>
		</span>
		<transition name="top-to-bottom">
			<modal v-if="hover && disabled" type="tooltip">
				<div class="ws-preline">{{ disabledText }}</div>
				<!--
				Это доступно только по подписке, ознакомьтесь с 
				<router-link to="/qqqq">
					тарифами
				</router-link>
				-->
			</modal>
		</transition>
		<span class="cover"></span>
	</span>
</template>

<script>
import mixin from "@/mixins/button-and-card"
import modal from "@/components/modal"

import localization from "@/composables/localization"
import messages from '@/localization/components/form'



const translate = localization(messages)

export default {
	mixins: [ mixin ],
	props: {
		bottom: {
			default() {
				return false
			},
			type: Boolean
		},
		disabledText: {
			default() {
				return translate("in_dev")
			}
		}
	},
	components: {
		modal
	},
	data() {
		return {
			hover: false
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
@import "./index";
</style>