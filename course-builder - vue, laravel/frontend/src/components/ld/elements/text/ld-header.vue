<template>
<div class="ld-element-wrapper" :class="element_wrapper_class">
	<transition :name="m_ld_element_edit_transition">
		<div class="ld-element-edit" v-if="m_element.is_editing">
			<!--
			<textarea 
				class="ld-textarea" 
				:maxlength="$store.state.maxsymbols_header"
				v-model="m_value">
			</textarea>
			-->
			<input
				class="ld-textarea" 
				type="text"
				:maxlength="$store.state.maxsymbols_header"
				v-model="m_value" />

			<span class="ld-textarea-details">
				{{ m_value.length + ' / ' + $store.state.maxsymbols_header }}
			</span>
		</div>
	</transition>
	<div class="ld-element-view">
		<h1 class="ld-header" v-html="m_value"></h1>
	</div>
</div>
</template>
<script>
import { mixin_ld_element } from '@/mixins/ld-element';

export default {
	mixins: [
		mixin_ld_element
	],
    data: function () {
        return {
            
        }
    },
	computed: {
		element_wrapper_class() {
			return {
				"ld-element-wrapper-min-height-100" : this.m_element.is_editing
			}
		}
	},
	name: "ld-header",
}
</script>
<style lang="scss">
.ld-header {
    font-weight: 900;
    font-size: 45px;
    text-transform: uppercase;
    margin-bottom: 10px;
	line-height: 1;
	padding-top: 220px;
	
	//margin-top: 200px;
}

@media screen and (max-width:991px) {
	.ld-header {
		font-size: 35px;
		margin-top: 100px;
	}
}
</style>