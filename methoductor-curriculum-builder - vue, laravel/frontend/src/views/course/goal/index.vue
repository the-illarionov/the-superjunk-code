<template>
<div class="l-content">
	<div v-if="course_state.is_demo">
		<v-card class="mb-5" closeable>
			<template v-if="locale == 'ru'">
				<p>Вы находитесь в демонстрационном режиме, данные не будут сохранены.</p>
				<p class="mb-0">
					Чтобы сохранить их, 
					<router-link to="/signup">
						зарегистрируйтесь</router-link> и создайте курс.
				</p>
			</template>
			<template v-else>
				<p>You are in demo mode; the data will not be saved.</p>
				<p class="mb-0">
					To save it,
					<router-link to="/signup">
						register</router-link> and create a course.
				</p>
			</template>
		</v-card>
	</div>
	<!--
	<p>Course title:</p>
	-->
	<p>Here will be different options like teamwork/solo, homework/without, realtime/recorded etc.</p>
	<!--
		Здесь же указаны выпадашка с типом курса (заблоченный селект с описанием что только практические синхронные курсы пока без групповой работы)
	-->
	<v-button style="display: none">
		asdasd
	</v-button>
	<go-next
		class="ml-0"
		path="workspace" />
	
</div>
</template>

<script>
import VButton from '@/components/form/v-button'
import course_state from '@/store/course'
import GoNext from "@/components/go-next"
import VCard from '@/templates/card'

import localeCompos from '@/composables/locale'
import translate from './translate'

export default {
	setup() {
		console.log('eslint fix', course_state)

		const { getLocale } = localeCompos()
		const locale = getLocale()

		return {
			translate,
			locale,
			course_state,
		}
	},
	props: {

	},
	components: {
		VButton,
		GoNext,
		VCard,
	}
}
</script>

<style>

</style>