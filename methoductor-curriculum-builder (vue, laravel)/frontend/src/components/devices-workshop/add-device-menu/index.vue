<template>
<div class="menu">
	<p>{{ translate("workshop.menu.choose_cat") }}</p>
	<div class="row mb-5">
		<template
			v-for="(category, category_index) in devices_values"
			:key="category_index">
			<div class="col-6 d-flex" v-if="!category.hidden">
				<input
					class="mr-1 mt-2" 
					type="checkbox" 
					v-model="category.checked" 
					:id="'category_checkbox_' + category_index" />

				<label 
					:for="'category_checkbox_' + category_index">
					{{ category.text }}
				</label>
			</div>
		</template>
	</div>
	<template
		v-for="(category, category_index) in devices_values"
		:key="category_index">
		<transition name="top-to-bottom">
		<div class='mb-5' v-show="category.checked && !category.hidden">
			<p>{{ category.text }}:</p>
			<draggable
				class="row"
				animation="300"
				:sort="false"
				:list="category.values"
				:group="{ name: 'devices', pull: 'clone', put: false }"
				:clone="onClone">
				<div 
					class="col-6 mb-3"
					v-for="(device, index) in category.values"
					:key="index">
					<v-button
						@click="workshop_state.displayed_device_map = [category.value, device.value]"
						:active="isEqual([category.value, device.value], workshop_state.displayed_device_map)"
						block
						fill-height
						class="mb-3 py-0">
						<template v-if="device.map">
							<v-sup>
								{{ device.text }}
								<template #sup>
									{{ translate("composable") }}
								</template>
							</v-sup>
						</template>
						<template v-else>
							{{ device.text }}
						</template>
					</v-button>
				</div>
			</draggable>
				<!--
				<div 
					class="col-6 mb-3"
					v-for="(device, index) in category.values"
					:key="index">
					<v-button
						@click="workshop_state.displayed_device_map = [category.value, device.value]"
						:active="isEqual([category.value, device.value], workshop_state.displayed_device_map)"
						block
						fill-height
						class="mb-3 py-0">
						<template v-if="device.map">
							<v-sup>
								{{ device.text }}
								<template #sup>
									составной
								</template>
							</v-sup>
						</template>
						<template v-else>
							{{ device.text }}
						</template>
					</v-button>
				</div>
				-->
		</div>
		</transition>
	</template>
</div>
</template>

<script>
import { isEqual } from "lodash"
import draggable from 'vuedraggable'
import useWorkshopStore from '@/store/devices-workshop'
import devices_values from '@/values/devices'
import VSup from '@/components/v-sup'
import VButton from "@/components/form/v-button"

import localization from "@/composables/localization"
import messages from '@/localization/components/device'



const translate = localization(messages)

export default {
	setup() {
		const { state: workshop_state } = useWorkshopStore()

		function onClone(item) {
			let map = [ item.category, item.value ]
			workshop_state.displayed_device_map = map
			console.log(map)
			return map
			/*
			workshop_state.displayed_device_map = [ item._type, workshop_state.add_device_menu_map[0], item._value]
			return [item._type, workshop_state.add_device_menu_map[0], item._value]
			*/
		}

		function start() {
			return false
		}

		return {
			workshop_state,
			isEqual,
			onClone,
			translate,
			devices_values,
			start
		}
	},
	props: {
		devices: {},
	},
	components: {
		draggable,
		VButton,
		VSup,
	}
}
</script>

<style lang="scss" scoped>
@import "../index";
</style>