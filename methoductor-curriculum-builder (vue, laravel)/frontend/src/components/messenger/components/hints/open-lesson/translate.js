import localization from '@/composables/localization'

const messages = {
	en: {
		'hint' : `
			<p>Click on the edit icon <i class="las la-pen"></i> of any lesson and we will load its plan.</p>
		`,
	},
	ru: {
		'hint' : `
			<p>Нажмите на иконку редактирования <i class="las la-pen"></i> любого урока и мы загрузим его план.</p>
		`,
	},
}

const translate = localization(messages)

export default translate