<template>
	<span class="scale-on-hover" @click="toggleHint">
		<i class="las la-question-circle"></i>
	</span>
</template>

<script>
import course_state from '@/store/course'
import myScroll from '@/composables/myScroll'

export default {
	setup(props) {
		function toggleHint() {
			if(!course_state[props.stateKey].hints.show) {
				course_state[props.stateKey].hints.show = true
				myScroll({
					element: document.querySelector("#workspace-container"),
					top: 0,
				})
			}

			
			if(course_state[props.stateKey].hints.step === props.step && !localStorage.getItem("hints_" + props.stateKey + "_closed")) {
				course_state[props.stateKey].hints.show = false
				localStorage.setItem("hints_" + props.stateKey + "_closed","true")
				console.log(course_state[props.stateKey].hints.step, props.step)
			} else {
				course_state[props.stateKey].hints.step = props.step
			}
		}

		return {
			toggleHint
		}
	},
	props: {
		stateKey: {
			required: true,
			type: String,
		},
		step: {
			required: true,
			type: Number,
		}
	},
}
</script>

<style>

</style>