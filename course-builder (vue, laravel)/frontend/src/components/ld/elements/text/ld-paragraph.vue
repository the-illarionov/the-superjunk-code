<template>
<div class="ld-element-wrapper" :class="element_wrapper_class">
	<transition :name="m_ld_element_edit_transition">
		<div class="ld-element-edit" v-if="m_element.is_editing">
			<textarea 
				class="ld-textarea" 
				:maxlength="$store.state.maxsymbols" 
				v-model="m_value">
			</textarea>
			<span class="ld-textarea-details">
				{{ m_value.length + ' / ' + $store.state.maxsymbols }}
			</span>
		</div>
	</transition>
	
	<div class="ld-element-view" v-html="m_value"></div>
</div>
</template>
<script>
/*
#TODO
- система оплаты
*/
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
				"ld-element-wrapper-min-height" : this.m_element.is_editing
			}
		}
	},
	name: "ld-paragraph",
}
</script>