<template>
<div>
	<p v-if="!noTitle">
		<template v-if="device.map">
			<v-sup>
				{{ translate("device") }} «{{ device.text }}»
				<template #sup>{{ translate("composable") }}</template>
			</v-sup>
		</template>
		<template v-else>
			{{ translate("device") }} «{{ device.text }}»
		</template>
		<slot name="button"></slot>
	</p>

	<div v-html="variation.description"></div>

	<template v-if="variation.examples">
		<v-button
			v-if="!alwaysShowExamples"
			class="my-3"
			@click="show_examples = !show_examples">
			{{ show_examples ? translate("hide_example") : translate("show_example")}}
		</v-button>
		<p class="mt-5 mb-0" v-else>{{ translate("example") }}</p>
		<transition name="top-to-bottom">
			<examples
				v-if="show_examples"
				:source="variation.examples[course_state.course_type.current.item.value]"
				:show_title="false"
				/>
		</transition>
	</template>
</div>
</template>

<script>
import { computed, ref, reactive } from "vue"

import course_state from '@/store/course'
//import useLessonStore from '@/store/lesson'

import Examples from "@/components/example"
import getDevice from '@/composables/getDevice'
import VSup from '@/components/v-sup'
import VButton from "@/components/form/v-button"

import localization from "@/composables/localization"
import messages from '@/localization/components/device'



const translate = localization(messages)

function countCoincidences(array, options) {
	let coincidences = 0
	if(array && options) {
		for(let key in options) {
			if(array[key] == options[key]) {
				coincidences++
			}
		}
	}
	return coincidences
}

export default {
	setup(props) {
		const show_examples = ref(false)
		if(props.alwaysShowExamples) show_examples.value = true

		const device = computed(() => getDevice(props.map) )

		// здесь просто указываем все опции, которые могут быть использованы
		// const { state: lesson_state } = useLessonStore()
		const options = reactive({
			//lesson_format_sync: lesson_state.template.options.type.current.item.value
		})

		const variation = computed( () => {
			let max_coincidences = 0
			let variation_index = 0

			if(device.value.variations.length > 1) {
				device.value.variations.forEach( (variation, index) => {
					let coincidences = countCoincidences(variation.options, options )
					if(max_coincidences < coincidences) {
						max_coincidences = coincidences
						variation_index = index
					}
				})
			}

			return device.value.variations[variation_index]
		})

		return {
			device,
			course_state,
			variation,
			show_examples,
			translate
		}
	},
	props: {
		map: {
			required: true,
		},
		noTitle: {
			default() {
				return false
			},
			type: Boolean
		},
		alwaysShowExamples: {
			default() {
				return false
			},
			type: Boolean
		}
	},
	components: {
		Examples,
		VSup,
		VButton
	}
}
</script>

<style>

</style>