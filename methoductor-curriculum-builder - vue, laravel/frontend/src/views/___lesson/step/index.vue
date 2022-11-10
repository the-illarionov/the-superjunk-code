<template>

<section-template>
	<template #header v-if="!step.no_name">
		<template v-if="step.non_editable">
			{{ step.name }}
		</template>
		<v-textarea
			block
			v-else
			:placeholder="placeholder_name"
			v-model="step.name" />

	</template>
	<template #content>
		<v-textarea
			v-model="step.value"
			:placeholder="placeholder_description" />
		

		<!--

		<p>Отметьте умения, которые реализованы на этом шаге:</p>
		<template v-if="lesson_state.skills.length > 0 && lesson_state.skills[0].value">
			<v-button
				class="mr-3"
				v-for="(skill, index) in lesson_state.skills"
				:key="index"
				@click="toggleSkill(skill)"
				:active="find(step.skills, skill)">
				{{ skill.value }}	
			</v-button>
		</template>
		<template v-else>
			<p>Вы ещё не добавили умения, <a href="#" @click="scrollToSkills">сделайте это на 3 шаге</a>.</p>
		</template>
		-->
	</template>
	<template #row>
		<device-controller
			:device-container="step"
			:no-title="step.non_editable"
			/>
	</template>
</section-template>


</template>

<script>
import { computed } from "vue"

import SectionTemplate from '@/templates/section'

import VTextarea from "@/components/form/v-textarea"

import DeviceController from '@/components/device-controller'

import localization from "@/composables/localization"
import messages from '@/localization/views/lesson/step'



const translate = localization(messages)

export default {
	props: {
		step: {},
	},
	setup(props) {

		const placeholder_name = computed(() => {
			return props.step.placeholder_name ? props.step.placeholder_name : translate("come_step")
		})

		const placeholder_description = computed(() => {
			return props.step.placeholder_description ? props.step.placeholder_description : translate("come_device")
		})

		/*
		function toggleSkill(skill) {
			let index = findIndex(props.step.skills, skill)

			if(index > -1) {
				props.step.skills.splice(index, 1)
			} else {
				props.step.skills.push(skill)
			}
		}

		function scrollToSkills(e) {
			//console.dir(document.querySelector('#skills-header').getBoundingClientRect())
			scrollTo({ 
				top: document.querySelector('#skills-header').getBoundingClientRect().top + window.scrollY - 100, 
				behavior: 'smooth' 
			})

			e.preventDefault()
			return false
		}
		*/

		return {
			placeholder_name,
			placeholder_description,
			/*
			toggleSkill,
			scrollToSkills
			*/
		}
	},
	components: {
		SectionTemplate,
		VTextarea,
		DeviceController,
	}
}
</script>

<style scoped lang="scss">
@import './index';
</style>