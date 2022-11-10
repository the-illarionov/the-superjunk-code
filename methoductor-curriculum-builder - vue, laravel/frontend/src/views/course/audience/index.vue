<template>
<div>
	<h3 class="header-2">
		{{ translate("c_navigation.set_audience") }}
	</h3>
	<div class="mb-5" v-html='translate("description")' />
	<ol class="nested-ol">
		<li class="mb-5">
			<div class="row">
				<div class="col-lg-6 mb-3">
					<h3 class="header-3">
						Вопрос
					</h3>
					<p>Какая-то описашка-помогашка.</p>
				</div>
				<div class="col-lg-6">
					<div class="row">
						<div class="col-4">
							<v-button
								block>
								{{ translate("c_yes") }}
							</v-button>
						</div>
						<div class="col-4">
							<v-button
								block>
								{{ translate("c_no") }}
							</v-button>
						</div>
					</div>
				</div>
			</div>
		</li>
	</ol>
	<go-next
		path="workspace" />
	
</div>
</template>

<script>
import VButton from '@/components/form/v-button'
import course_state from '@/store/course'
import GoNext from "@/components/go-next"

import translate from './translate'

export default {
	setup() {
		console.log('eslint fix', course_state)

		return {
			translate,
		}
	},
	props: {

	},
	components: {
		VButton,
		GoNext,
	}
}
</script>

<style>

</style>