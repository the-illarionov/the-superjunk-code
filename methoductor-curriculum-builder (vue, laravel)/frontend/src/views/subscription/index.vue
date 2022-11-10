<template>
	<div class="parent">
		<div v-html="translate('index.info')">
		</div>
		<div class="button" @click="subscribe">
			{{ translate("index.subscribe") }}
		</div>
		<modal type='error' v-if="show_modal" @hide="show_modal = false">
			{{ translate("index.not_working") }}
		</modal>
	</div>
</template>

<script>
import modal from '@/components/modal'
import loader from "@/store/loader"
import { ref } from 'vue'
import api from '@/api'

import localization from "@/composables/localization"
import messages from '@/localization/views/subscription'



const translate = localization(messages)

export default {
	components: {
		modal
	},
	setup() {
		const show_modal = ref(false)
		function subscribe() {
			/* 
				тут получаем clientid, который задается в index.html
				чтобы тречить количество людей нужно просто на самой метрике сделать сегментацию
			*/
			let clientID = localStorage.getItem('yandexClientId')
			loader.main = true
			api.post('wantsubscription',
			{
				yandex_id: clientID
			})
			.then(function (response) {
				console.log(response.data)
				show_modal.value = true
				loader.main = false
			})
			.catch(function (error) {
				console.log(error)
				loader.main = false
			})
		}

		return { subscribe, show_modal, translate }
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>