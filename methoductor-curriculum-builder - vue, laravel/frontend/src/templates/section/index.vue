<template>
<div class="section-template row">
	<div :class="left" class="mb-3" v-if="$slots['header']">
		<h3 class="header-3"><slot name="header"></slot></h3>
	</div>
	<div :class="right">
		<div class="mb-3" v-if="collapsable">
			<v-button
				@click="collapsed = !collapsed"
				icon>
				<i class="las la-arrow-circle-down" v-if="collapsed"></i>
				<i class="las la-arrow-circle-up" v-else></i>
			</v-button>
		</div>
		<transition name="top-to-bottom">
			<div v-show="!collapsed">
				<slot name="content"></slot>
			</div>
		</transition>
	</div>
	<div class="px-2 w-100">
	<slot name="row"></slot>
	</div>
</div>
</template>

<script>
import VButton from '@/components/form/v-button'

export default {
	props: {
		left: {
			default() {
				return "col-lg-5"
			}
		},
		right: {
			default() {
				return "col-lg-7"
			}
		},
		collapsable: {
			default() {
				return false
			},
			type: Boolean
		},
		collapsed: {
			default() {
				return false
			},
			type: Boolean
		}
	},
	components: {
		VButton
	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>