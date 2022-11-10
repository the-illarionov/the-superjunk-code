<template>
	{{ t("message") }} - {{ locale }} <br />

	<select v-model="$i18n.locale" @change="localeChange">
		<option
			v-for="(lang, i) in locales"
			:key="`Lang${i}`"
			:value="lang.locale"
		>
			{{ lang.text }}
		</option>
	</select>
	<br />
	{{ translatedText[$i18n.locale] }}<br />
	<router-link to="/">main</router-link><br />
</template>

<script>
import { useI18n } from "vue-i18n"

import locales from "@/common/Locales"
import user from "@/stores/User"

export default {
	beforeRouteEnter() {
		console.log("before enter from comp")
	},
	setup() {
		const { t, locale, availableLocales } = useI18n()

		const translatedText = {
			en: "english translated",
			ru: "русский текст"
		}

		const localeChange = (e) => {
			let pathWithoutLocale = window.location.pathname.slice(
				3,
				window.location.pathname.length
			)
			document.location.pathname =
				"/" + e.target.value + pathWithoutLocale
		}

		return {
			user,
			availableLocales,
			t,
			locale,
			translatedText,
			localeChange,
			locales
		}
	}
}
</script>

<i18n>
{
  "en": {
    "message": "qweqweqweqwe"
  },
  "ru": {
    "message": "йцуйцуйцуйцу"
  }
}
</i18n>
