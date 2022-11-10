import localization from '@/composables/localization'

const messages = {
	en: {
		hint: `
			<p>Now you need to link the skills to the lessons. </p>
			<p>Later, when making a lesson plan, this will help you not to lose sight of anything important.</p>
			<p>To link a skill, hover over it in the skill map, click the transfer icon in the lower left corner <i class= "las la-arrows-alt" ></i> and transfer the skill to the lesson.</p>
		`,
	},
	ru: {
		hint: `
			<p>Теперь вам нужно привязать микроумения к урокам. </p>
			<p>Позже, при составлении плана урока, это поможет вам не упустить ничего важного из виду.</p>
			<p>Для привязки микроумения наведите на него в карте умений, в левом нижнем углу зажмите иконку переноса <i class="las la-arrows-alt"></i> и перенесите микроумение в урок.</p>
		`,
	},
}

const translate = localization(messages)

export default translate