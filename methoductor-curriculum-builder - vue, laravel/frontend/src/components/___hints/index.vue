<template>
<div class="hint-container" :class="container_class">
	<div
		class="hint"
		ref="hint">
		<div class="hint-content hint-content-topics-0">
			<div v-html="translate('topics[0]')" />

			<examples
				:source="examples_source.topics[0]"
			/>
		</div>
		<div class="hint-content hint-content-topics-1">
			<div v-html="translate('topics[1]')" />
		</div>
		<div class="hint-content hint-content-topics-2">
			<div v-html="translate('topics[3]')" />

			<examples
				:source="examples_source.topics[3]"
			/>
		</div>
		<div class="hint-content hint-content-lessons-0">
			<div v-html="translate('lessons[0]')" />
		</div>

		<span
			class="close"
			@click="close">
			<i class="las la-times"></i>
		</span>

		<div class="buttons">
			<transition name="fade">
				<v-button
					v-if="course_state[stateKey].hints.step > 0"
					@click="changeStep(-1)"
					small>
					<i class="las la-arrow-left"></i>{{ translate('c_back') }}
				</v-button>
			</transition>

			<transition name="fade">
				<v-button
					class="ml-auto"
					@click="changeStep(1)"
					v-if="course_state[stateKey].hints.step < course_state[stateKey].hints.maxStep"
					small>
					{{ translate('c_next') }}
					<i class="las la-arrow-right"></i>
				</v-button>
				<v-button
					class="ml-auto"
					@click="close"
					v-else
					small>
					{{ translate('c_understood') }}
				</v-button>
			</transition>
		</div>

		<span class="triangle" />
	</div>

	<div class="mobile-cover" />
</div>
</template>

<script>
import { computed, ref, onMounted } from "vue"

import course_state from "@/store/course"
import translate from './translate'
import examples_source from './examples'

import VButton from '@/components/form/v-button'
import Examples from "@/components/example"

export default {
	setup(props) {
		const hint = ref(null)
		
		if(localStorage.getItem("hints_" + props.stateKey + "_closed")) course_state[props.stateKey].hints.show = false

		const container_class = computed(() => {
			let resultClass = ""
			let activeClass = ""
			if(course_state[props.stateKey].hints.show) activeClass = "active"
			
			resultClass += activeClass
			resultClass += ` hint-${props.stateKey}`
			resultClass += ` hint-step-${course_state[props.stateKey].hints.step}`
			return resultClass
		})

		function changeStep(step) {
			changeHeight()
			course_state[props.stateKey].hints.step += step
			changeHeight()

			if(step > 0 ) hint.value.classList.add("translate-next")
			else hint.value.classList.add("translate-back")

			setTimeout(() => {
				hint.value.classList.remove("translate-next")
				hint.value.classList.remove("translate-back")
				hint.value.style.height = 'auto'
			}, 1250)
			changeHeight()
		}

		function close() {
			course_state[props.stateKey].hints.show = false
			localStorage.setItem("hints_" + props.stateKey + "_closed","true")
		}

		function changeHeight() {
			hint.value.style.height = document.querySelector(".hint-content-" + props.stateKey + "-" + course_state[props.stateKey].hints.step).offsetHeight + 88 + 'px'
		}

		onMounted(() => {
			//changeHeight()
		})

		return {
			container_class,
			translate,
			course_state,
			changeStep,
			examples_source,
			close,
			hint
		}
	},
	props: {
		stateKey: {
			required: true,
		}
	},
	components: {
		VButton,
		Examples
	}
}
</script>

<style scoped lang="scss">
@import './index';
</style>

<!--
состояниями хинта должен управлять цсс, берется проп ключа и в стейте берется текущий индекс и уже он ставится классом хинту
-->