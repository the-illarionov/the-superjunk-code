<template>
<div class="device-controller">
	<!--
	<template v-if="has_devices">
		<template v-if="displayed_device_map">
			<device
				:no-title="noTitle"
				:map="displayed_device_map">
				<template #button>
					<v-button
						@click="show_popup = true">
						{{ translate("controller.change") }}
					</v-button>
				</template>
			</device>
		</template>
		<template v-else>
			<p>{{ translate("controller.not_found") }}</p>
			<p>{{ translate("controller.self_made") }}</p>
			<v-button
				@click="show_popup = true">
				{{ translate("controller.change_structure") }}
			</v-button>
		</template>
	</template>
	-->
	<device
		v-if="deviceContainer.device.length > 0"
		:no-title="noTitle"
		:map="deviceContainer.device">
		<template #button>
			<v-button
				@click="show_popup = true">
				{{ translate("controller.change") }}
			</v-button>
		</template>
	</device>
	<div v-else>
		<p>{{ translate("controller.add_desc") }}</p>
		<v-button
			@click="show_popup = true">
			{{ translate("controller.add") }}
		</v-button>
	</div>

	<transition name="fade">
		<modal v-if="show_popup" type="popup" @hide="show_popup = false" class="h-100 p-3" popup-class="p-0">
			<devices-workshop
				:device-container="deviceContainer"
				@hide="show_popup = false" />
		</modal>
	</transition>
</div>
</template>

<script>
import { ref } from "vue"

import VButton from "@/components/form/v-button"

import Device from '@/components/device'
import Modal from "@/components/modal"
import DevicesWorkshop from '@/components/devices-workshop'
//import useWorkshopStore from '@/store/devices-workshop'

import localization from "@/composables/localization"
import messages from '@/localization/components/device'



const translate = localization(messages)

export default {
	setup() {
		// const { state: workshop_state } = useWorkshopStore()

		const show_popup = ref(false)

		/*
		const has_device = computed(() => {
			if(props.deviceContainer.device.length > 0) {
				for(let i = 0; i < props.deviceContainer.device.length; i++) {
					if(!props.deviceContainer.device[i]) return false
				}
				return true
			}
			return false
		})
		*/

		/*
		const displayed_device_map = computed( () => {
			let map = false

			if(props.devices.simple.length == 1) {
				map = props.devices.simple[0]
			} else {
				if(props.devices.complex[0] && props.devices.complex[1]) {
					map = props.devices.complex
				}
			}
			
			// workshop_state.displayed_device_map = map
			// здесь можно дёргать стор воркошопа и туда прям прописать displayed_device_map

			return map
		})
		*/

		return {
			//displayed_device_map,
			show_popup,
			translate,
		}
	},
	props: {
		deviceContainer: {
			required: true,
		},
		noTitle: {
			default() {
				return false
			}
		}
	},
	components: {
		Device,
		Modal,
		DevicesWorkshop,
		VButton
	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>