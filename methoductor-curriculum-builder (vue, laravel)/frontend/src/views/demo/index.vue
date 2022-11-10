<template>
	<editor
		type="lesson" id="editor">
		<template #content>
			<div class="l-content">
				<v-card closeable class="mb-5 col-lg-6">
					<template v-if="locale == 'ru'">
						<p>Вы находитесь в демонстрационном режиме создания одного урока.</p>
						<p class="mb-0">
							Для создания всего курса нужно 
							<router-link to="/signup">
								зарегистрироваться.
							</router-link>
						</p>
					</template>
					<template v-else>
						<p>You are in the demo mode of creating a single lesson.</p>
						<p class="mb-0">
							To create the entire course, you need to
							<router-link to="/signup">
								sign up.
							</router-link>
						</p>
					</template>
				</v-card>
			</div>
			<lesson />
		</template>
	</editor>
</template>

<script>
import Editor from '@/components/editor'
import VCard from '@/templates/card'
import Lesson from '@/views/lesson'

import { onBeforeMount } from 'vue'
import localeCompos from '@/composables/locale'

export default {
	setup() {
		const { getLocale } = localeCompos()
		const locale = getLocale()

		onBeforeMount(() => {
			ym(71143837,'reachGoal','watch_demo')
		})
		
		return {
			locale
		}
	},
	components: {
		Lesson,
		VCard,
		Editor
	}
}
</script>