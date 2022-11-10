<template>
<!-- eslint-disable vue/no-mutating-props -->
<div class="devices-workshop" :class="crafting_class">
	<transition name="fade">
		<div class="trash" v-show="workshop_state.show_trash">
			<trash  />
		</div>
	</transition>

	<transition name="fade">
		<div 
			class="limitation-warning"
			v-show="workshop_state.devices.ingredients.length >= 5 && !workshop_state.show_trash">
			{{ translate("workshop.workshop.maximum") }}
		</div>
	</transition>

	<div class="add-device-menu">
		<add-device-menu />
	</div>

	<div class="displayed-device pt-4 px-5" :class="crafting_class">
		<div style="position: relative">
		<transition name="left-to-right">
		<div
			v-if="workshop_state.crafting_mode"
			class="mb-3">
			<!--
			<p class="mb-0">Внимание! В режиме редактирования выбор приёма только просматривает его. Чтобы применить приём к шагу, нажмите на "Выбрать этот приём для шага".</p>
			-->
			<h3 class="header-3 no-number">{{ translate("look") }}</h3>
			<p class="mb-5">{{ translate("alert") }}</p>
		</div>
		
		<h3
			class="header-3 no-number mb-3"
			v-else>{{ translate("chosen") }}</h3>
		</transition>
		</div>

		<template
			v-if="workshop_state.displayed_device_map.length > 0">
			<device
				:map="workshop_state.displayed_device_map"
				always-show-examples />

			<transition name="top-to-bottom">
				<div
					v-if="workshop_state.crafting_mode">
					<p
						class="text-center mt-5"
						v-if="isEqual(workshop_state.displayed_device_map, deviceContainer.device)">
						{{ translate("this_chosen") }}
					</p>
					<v-button
						block
						class="mt-5"
						v-else
						@click="setDisplayedDeviceAsActive">
						{{ translate("choose") }}
					</v-button>
				</div>
				
			</transition>
		</template>

		<p class="mb-0" v-else>{{ translate("choose_left") }}</p>

		<v-card class="my-5 text-center workshop">
			<template
				v-if="workshop_state.crafting_mode">
				<v-button
					class="mb-3"
					@click="workshop_state.crafting_mode = false">
					{{ translate("workshop.workshop.exit") }}
				</v-button>

				<workshop />
			</template>
			
			<div v-else>
				<v-button
					@click="workshop_state.crafting_mode = true">
					{{ translate("edit") }}
				</v-button>
			</div>
		</v-card>
	</div>

	<!--
	<div class="workshop" :class="crafting_class">
		<workshop
			v-if="workshop_state.crafting_mode" />
		<div 
			class="p-3 text-center"
			v-else>
			<v-button
				@click="workshop_state.crafting_mode = true">
				{{ translate("edit") }}
			</v-button>
		</div>
	</div>
	-->
</div>

</template>

<script>
import { watch, onUnmounted, computed } from "vue"
import { isEqual } from "lodash"

import useWorkshopStore from '@/store/devices-workshop'

import Device from '@/components/device'
import VButton from '@/components/form/v-button'
import VCard from '@/templates/card'

import Trash from './trash'
import AddDeviceMenu from './add-device-menu'
import Workshop from './workshop'

import localization from "@/composables/localization"
import messages from '@/localization/components/device'



const translate = localization(messages)

export default {
	emits: ['hide'],
	setup(props, { emit }) {
		
		const { state: workshop_state } = useWorkshopStore()

		

		const crafting_class = computed( () => {
			return workshop_state.crafting_mode ? 'crafting' : ''
		})

		function kostil() {
			if(props.deviceContainer.device.length > 0) workshop_state.displayed_device_map = props.deviceContainer.device
		}
		kostil()

		function setDisplayedDeviceAsActive() {
			props.deviceContainer.device = workshop_state.displayed_device_map
			emit("hide")
		}

		watch(() => workshop_state.displayed_device_map, (map) => {
			if(map.length > 0 && !workshop_state.crafting_mode) {
				for(let i=0; i < map.length; i++) {
					if(!map[i]) return false
				}
				props.deviceContainer.device = map
			}
		})
		
		onUnmounted(() => {
			workshop_state.reset()
		})

		return {
			workshop_state,
			translate,
			setDisplayedDeviceAsActive,
			crafting_class,
			isEqual,
		}
	},
	props: {
		deviceContainer: {
			required: true,
		},
	},
	components: {
		Device,
		Trash,
		AddDeviceMenu,
		Workshop,
		VButton,
		VCard,
	}
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>