<template>
<div style="width: 100%">
	<p>{{ translate("workshop.workshop.ingredients") }}</p>
	<div class="devices-draggable"
		:class="workshop_state.devices.ingredients.length >= 5 ? 'filled' : ''">
		<draggable
			class="draggable-component"
			:class="workshop_state.devices.ingredients.length == 0 ? 'no-items' : '' "
			:list="workshop_state.devices.ingredients"
			animation="300"
			:group="{ name: 'devices', pull: true}"
			@start="workshop_state.show_trash = true"
			@end="workshop_state.show_trash = false">
			<div 
				class="ingredient"
				v-for="(device_map, index) in workshop_state.devices.ingredients"
				:key="index">
				<v-button
					block
					@click="workshop_state.displayed_device_map = device_map"
					:active="isEqual(device_map, workshop_state.displayed_device_map)">
					{{ getDevice(device_map).text }}
				</v-button>
			</div>
			<p class="text-center" v-if="workshop_state.devices.ingredients.length > 0 && workshop_state.devices.ingredients.length < 5">
				{{ translate("workshop.workshop.drag") }}
			</p>
		</draggable>
		<transition name="fade">
			<div class="dragging-add" v-show="workshop_state.devices.ingredients.length == 0">
				<p class="text">
					{{ translate("workshop.workshop.drag") }}
				</p>
				<div class="drag-cover border-r"></div>
			</div>
		</transition>
		
		<div class="workshop__result" v-if="workshop_state.devices.ingredients.length > 0">
			<template v-if="workshop_state.devices.crafted.length > 0">

			</template>
			<template v-else>
				<p>{{ translate("workshop.workshop.not_found_recipe") }}</p>
				<template v-if="workshop_state.devices.ingredients.length < 5">
					<v-button
						class="mb-5" 
						v-if="show_suggestions"
						@click="show_suggestions = false">
						{{ translate("workshop.workshop.hide_combinable") }}
					</v-button>
					<p v-else>
						{{ translate("workshop.workshop.but_find") }}
						<v-button
							@click="show_suggestions = true">
							{{ translate("workshop.workshop.add_devices") }}
						</v-button>
					</p>
				</template>
				<transition name="top-to-bottom">
					<div class="mb-5" v-if="show_suggestions">
						<v-button class="mr-3 mb-3">
							{{ translate("workshop.workshop.statement") }}
						</v-button>
						<v-button class="mr-3 mb-3">
							{{ translate("workshop.workshop.finish") }}
						</v-button>
						<v-button class="mr-3 mb-3">
							{{ translate("workshop.workshop.statement") }}
						</v-button>
						<v-button class="mr-3 mb-3">
							{{ translate("workshop.workshop.finish") }}
						</v-button>
						<v-button class="mr-3 mb-3">
							{{ translate("workshop.workshop.statement") }}
						</v-button>
						<v-button class="mr-3 mb-3">
							{{ translate("workshop.workshop.finish") }}
						</v-button>
						<v-button class="mr-3 mb-3">
							{{ translate("workshop.workshop.statement") }}
						</v-button>
						<v-button class="mr-3 mb-3">
							{{ translate("workshop.workshop.finish") }}
						</v-button>
					</div>
				</transition>

				<transition name="top-to-bottom">
					<div v-if="workshop_state.devices.ingredients.length > 1">
						<p v-if="show_create_custom">
							<v-button
								@click="show_create_custom = false">
								{{ translate("workshop.workshop.hide_creation") }}
							</v-button> 
						</p>
						<p v-else>
							{{ translate("workshop.workshop.you_may") }}
							<v-button
								@click="show_create_custom = true">
								{{ translate("workshop.workshop.create_own") }}
							</v-button> 
								{{ translate("workshop.workshop.from_ingredients") }}
						</p>
						<transition name="top-to-bottom">
							<v-card v-if="show_create_custom">
								asdasdad
							</v-card>
						</transition>
					</div>
				</transition>
			</template>
		</div>
	</div>
	<!--
	<div class="text-center">
		<v-button
			@click="workshop_state.crafting_mode = false">
			Выйти из режима создания
		</v-button>
	</div>
	-->
	<!--
	<template  v-if="devices.simple.length > 1">
		<div class="row">
			<p class="col-5 text-center">Простые приёмы:</p>
			<p class="col-5 offset-2 text-center">Выбранный приём:</p>
		</div>
	</template>
	<div class="row h-100">
		<div class="col-animated col-5"
			:class="devices.simple.length <= 1 ? 'mx-auto' : ''">
			<p class="text-center" v-if="devices.simple.length == 1">Выбранный приём:</p>
			
		</div>
		
		<div v-if="devices.simple.length > 1" class="col-2 d-flex align-items-center justify-content-center">
			<i class="las la-chevron-right"></i>
		</div>
		<div v-if="devices.simple.length > 1" class="col-5 d-flex align-items-center text-center">
			<template v-if="devices.complex.length == 0">
				<p>Мы не нашли походящий составной приём, попробуйте изменить состав.</p>
			</template>
			<v-button
				block
				@click="workshop_state.displayed_device_map = devices.complex"
				:active="isEqual(devices.complex, workshop_state.displayed_device_map)"
				v-else>
				{{ getDevice(devices.complex).text[locale] }}
			</v-button>
		</div>
	</div>
	<p v-if="devices.simple.length > 0">
		<template v-if="devices.simple.length < 5">
			Можно добавить ещё приёмов.
		</template>
		<template v-else>
			Увы, можно добавить только 5 приёмов максимум.
		</template>
	</p>
	
	-->
</div>
</template>

<script>
import { ref } from "vue"
import draggable from 'vuedraggable'
import { isEqual } from "lodash"

import useWorkshopStore from '@/store/devices-workshop'
import getDevice from '@/composables/getDevice'

import VButton from "@/components/form/v-button"
import VCard from "@/templates/card"

import localization from "@/composables/localization"
import messages from '@/localization/components/device'



const translate = localization(messages)

export default {
	setup() {
		const { state: workshop_state } = useWorkshopStore()

		const show_suggestions = ref(false)
		const show_create_custom = ref(false)

		return {
			getDevice,
			isEqual,
			workshop_state,
			translate,
			show_suggestions,
			show_create_custom,
		}
	},
	components: {
		VButton,
		VCard,
		draggable,
	},
	props: {
		
	}
}
</script>

<style lang="scss" scoped>
@import "../index";
</style>