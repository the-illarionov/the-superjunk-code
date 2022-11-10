<template>
	<v-card
		class="my-3 action-container">
		<span class="action_right action_right_top" @click="editSection(section.id, deep)">
			<i class="las la-pen"></i>
		</span>

		<p class="section-header">
			<template v-if="section.subtype === 'task'">
				Task №{{ section.order }}:
				{{ section.value }}.
			</template>
			<template v-else>
				{{ section.name }}.
			</template>
		</p>
		<template v-if="deep">
			<div
				class="section_deep"
				v-for="(step_id, index) in section.childs"
				:key="index">
				<p>{{ getDevice(step_id).name }}:</p>

				<v-card
					class="mb-3"
					v-for="(substep_id, index) in state.lesson.items[step_id].childs"
					:key="index">
					<p>{{ getDevice(substep_id).name }}:</p>

					{{ getDevice(substep_id).value ?? 'Ещё не заполнено, нажмите на редактирование чтобы заполнить' }}
					
					<!--
					<p class="pt-5">{{ getDevice(step_id) }}</p>
					-->
				</v-card>
			</div>
		</template>
		<template v-else>
			<v-card
				class="mb-3"
				v-for="(step_id, index) in section.childs"
				:key="index">
				<p>{{ getDevice(step_id).name }}:</p>

				<template v-if="getDevice(step_id).value">
					{{ getDevice(step_id).value }}
				</template>
				<template v-else>
					Not filled in yet, click on edit to fill in
				</template>

				<!--
				<p class="pt-5">{{ getDevice(step_id) }}</p>
				-->
			</v-card>
		</template>

		
	</v-card>
</template>

<script>
import loader from "@/store/loader"
import state from '@/store/course'

import VCard from '@/templates/card'

export default {
	setup() {
		function getDevice(step_id) {
			return state.devices.items[ state.lesson.items[step_id].device_id ]
		}

		function editSection(id, deep) {
			loader.workspace.section = true
			setTimeout(() => {
				loader.workspace.section = false
			}, 500)

			state.section.section_id = id
			state.section.deep = deep

			console.log(id)
			console.log(JSON.stringify(state.lesson.items))
		}

		return {
			getDevice,
			state,
			editSection,
		}
	},
	components: {
		VCard
	},
	props: {
		section: {
			required: true,
			type: Object,
		},
		deep: {
			default() {
				return false
			},
			type: Boolean,
		}
	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>