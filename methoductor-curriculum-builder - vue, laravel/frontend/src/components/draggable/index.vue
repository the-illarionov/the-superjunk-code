<template>
	<draggable :list="list" tag="ol" v-bind="dragOptions" handle=".handle" :class="{ 'nested-ol' : is_steps }">
		<li
			class="draggable-container mb-3"
			v-for="(item, index) in list"
			:key="index">
			<template v-if="is_inputs">
				<v-input
					block
					:placeholder="placeholder"
					v-model="item.value" />
			</template>
			
			<template v-else-if="is_steps">
				<step
					:step="item" />
			</template>

			<template v-else-if="is_devices">
				asdasdasd
			</template>

			<!--
			<template v-if="list.length > 1">
				<span class="drag handle">
					<i class="las la-arrows-alt"></i>
				</span>

				<span class="delete" @click="deleteItem(index)">
					<i class="las la-trash-alt fs-15"></i>
				</span>
			</template>
			-->
		</li>
	</draggable>

	<v-button
		v-if="!nonEditable"
		@click="add"
		class="px-3 text-center"
		:block="is_steps">
		<i class="las la-plus"></i>
		{{ addText }}
	</v-button>
</template>

<script>

import draggable from 'vuedraggable'
import { computed, ref } from 'vue'
import VInput from '@/components/form/v-input'
import VButton from '@/components/form/v-button'

import generateStep from '@/store/common/generateLessonStep'
import Step from '@/views/lesson/step'

import localization from "@/composables/localization"
import messages from '@/localization/components/draggable'



const translate = localization(messages)

export default {
	props: {
		list: {
			required: true,
		},
		placeholder: {
			default() {
				return translate("tap_insert")
			}
		},
		addText: {
			default() {
				return translate("add")
			},
		},
		type: {
			required: true,
		},
		nonEditable: {
			default() {
				return false
			}
		}
	},
	setup(props) {
		const is_inputs = ref(false)
		const is_steps = ref(false)
		const is_devices = ref(false)

		if(props.type == 'inputs') is_inputs.value = true
		else if(props.type == 'steps') is_steps.value = true
		else if(props.type == 'devices') is_devices.value = true

		function add() {
			let el = {}
			if(is_steps.value) {
				el = generateStep()
			}
			if(props.list.length < 20) props.list.push(el)
			else alert(translate("too_many"))
		}

		function deleteItem(index) {
			props.list.splice(index, 1)
			//console.log(index)
		}

		const dragOptions = computed(() => {
			return {
				animation: 300,
				group: "description",
				disabled: false,
				ghostClass: "ghost"
			}
		})

		return {
			add,
			deleteItem,
			dragOptions,

			is_inputs,
			is_steps,
			is_devices
		}
	},
	components: {
		draggable,
		VInput,
		VButton,
		Step
	},
}
</script>

<style scoped lang="scss">
@import "./index";
</style>