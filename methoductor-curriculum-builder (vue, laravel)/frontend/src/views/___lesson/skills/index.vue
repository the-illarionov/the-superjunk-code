<template>
<div class="l-content">
	<h3 class="header-2 mb-3">{{ translate("write_skills") }}</h3>

	<draggable
		type="inputs"
		:placeholder="translate('tap_to')"
		:list="lesson_state.skills"
		:add-text="translate('add_skill')" />

	<v-card class="mt-4 mb-5">
		<device
			no-title
			:map="['service','skills']" />
	</v-card>

	<div class="col-lg-4 pl-0">
		<div class="pr-5">
			<v-button
				block
				@click="lesson_state.current_part = lesson_state.structure[0].id">
				{{ translate("c_go") }}
				<i class="las la-arrow-right"></i>
			</v-button>
		</div>
	</div>
</div>
</template>

<script>
import useLessonStore from '@/store/lesson'

import Draggable from '@/components/draggable'
import VButton from '@/components/form/v-button'
import Device from '@/components/device'

import localization from "@/composables/localization"
import messages from '@/localization/views/lesson/skills'
import VCard from '@/templates/card'


const translate = localization(messages)

export default {
	setup() {
		const { state: lesson_state } = useLessonStore()

		return {
			lesson_state,
			translate
		}
	},
	components: {
		Draggable,
		VButton,
		Device,
		VCard
	}
}
</script>

<style>

</style>