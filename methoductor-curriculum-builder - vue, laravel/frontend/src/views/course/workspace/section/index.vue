<template>

<div class="workspace__section"
	id="workspace__section">
	<!--
	<p>items: {{ state.lesson.items }}</p>
	<p>selected_id: {{ state.lesson.selected_id }}</p>
	-->
	<div v-if="state.lesson.loaded">
		<div v-if="state.section.loaded">
			<p>
				<template v-if="section.subtype === 'task'">
					<b>Task №{{ section.order }}.</b>
				</template>
				<template v-else>
					{{ section.name }}
				</template>
			</p>
			<div v-html="section.description" />

			<examples
				class="mt-3"
				v-if="section.examples"
				:source="section.examples"
			/>

			<v-textarea
				class="mt-3"
				v-if="typeof section.value !== 'undefined'"
				v-model="section.value" />
		</div>
		<div v-else 
			v-html="translate('click_to_edit')">
		</div>
	</div>
	<div v-else>
		<div v-html="translate('lesson_first')" />
	</div>
	<preloader :show_loader="loader.workspace.section"/>
</div>
</template>

<script>
/*
eslint-disable vue/no-unused-components
*/
import { computed } from 'vue'
import translate from './translate'

import loader from "@/store/loader"
import state from '@/store/course'

import Preloader from "@/components/preloader"
import VButton from '@/components/form/v-button'
import VTextarea from '@/components/form/v-textarea'
import VCard from '@/templates/card'
import Examples from "@/components/example"

export default {
	setup() {

		const section = computed(() => {
			return state.lesson.items[state.section.section_id]
		})

		return {
			translate,
			loader,
			state,
			section,
		}
	},
	components: {
		Preloader,
		VButton,
		VCard,
		Examples,
		VTextarea,
	}
}
</script>

<style lang="scss" scoped>
@import './index';
</style>