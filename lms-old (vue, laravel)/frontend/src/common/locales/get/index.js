import { findIndex } from "lodash";
import locales from "@/common/Locales";

export default function () {
	let locale = "ru"; // fallback

	let localeInPath = window.location.pathname.slice(0, 3).replace("/", "");

	//console.log(findIndex(locales, { locale: 'fr' }))

	if (findIndex(locales, { locale: localeInPath }) > -1) {
		locale = localeInPath;
		localStorage.setItem("locale", locale);
	} else if (localStorage.getItem("locale")) locale = localStorage.getItem("locale");
	else {
		const getNavigatorLanguage = () => (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage);
		const browserLocale = getNavigatorLanguage().slice(0, 2);

		if (findIndex(locales, { locale: browserLocale }) > -1) locale = browserLocale;
	}

	return locale;
}
