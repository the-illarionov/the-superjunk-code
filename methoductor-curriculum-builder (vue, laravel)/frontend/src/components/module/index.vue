<template>
<v-card>
	<p class="mb-5">
		Название модуля:
		<v-input
			block
			placeholder="Нажмите, чтобы ввести название"
			v-model="module.name" />
	</p>

	<p class="mb-5">
		Умение:
		<v-input
			block
			placeholder="Нажмите, чтобы ввести умение"
			v-model="module.skill" />
	</p>

	<p class="mb-5">
		Шаблон модуля:<br />
		<settings-popup
			no-title
			type="template"
			from="module"
			:template-container="module" />
	</p>

	<v-button
		block
		:disabled="selectDisabled"
		:disabled-text="disabled_text"
		@click="selectModule">
		Выбрать этот модуль для редактирования
	</v-button>
</v-card>
</template>

<script>
import { computed } from "vue"

import VCard from '@/templates/card'
import VButton from '@/components/form/v-button'
import VInput from '@/components/form/v-input'

import SettingsPopup from '@/views/course/settings-popup'

export default {
	emits: ['select-module'],
	setup(props, { emit }) {
		
		const disabled_text = computed(() => {
			let text = "Укажите:\n"
			if(!props.module.name) text += "Название модуля;\n"
			if(!props.module.skill) text += "Умение;\n"
			if(!props.module.template.selected.current.item) text += "Шаблон модуля;"

			return text
		})

		const selectDisabled = computed(() => {
			return !props.module.name || 
				!props.module.skill ||
				!props.module.template.selected.current.item
		})

		function selectModule() {
			if(!selectDisabled.value) {
				emit('select-module')
			}
		}

		return {
			disabled_text,
			selectDisabled,
			selectModule
		}
	},
	props: {
		module: {
			required: true,
		},
	},
	components: {
		VCard,
		VButton,
		VInput,
		SettingsPopup,
	}
}
</script>

<style>

</style>