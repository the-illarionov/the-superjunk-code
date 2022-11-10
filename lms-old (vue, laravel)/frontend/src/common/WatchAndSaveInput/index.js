import { watch } from "vue";
import { debounce } from "lodash";
import api from "@/common/Api";
//import application from "@/stores/Application"
import router from "@/router";
import generate from "@/common/InitView/Generate";

export default function (options) {
	const saver = debounce((newValue, oldValue) => {
		if (typeof oldValue !== "undefined" && typeof newValue !== "undefined" && newValue.length >= 3) {
			if (options.checks && options.checks.length > 0) {
				options.checks.forEach((check) => {
					if (!check) return false;
				});
			}
			if (!options.success) options.success = () => {};
			if (!options.error) options.error = () => {};
			if (!options.finally) options.finally = () => {};

			if (options.before) options.before();

			const { url, lastParam } = generate(options.url, router.currentRoute.value);

			let data = {};

			data[options.property] = newValue;

			/*
			if (!options.forceReload)
				application.showPreloaderOnRequests = false
			*/
			api.put(url, data)
				.then((response) => {
					options.success(response);

					if (options.forceReload) {
						let params = {};
						params[lastParam] = response.data[options.property];

						router.replace({
							name: router.currentRoute.name,
							params,
						});
					}
				})
				.catch(() => {
					/*
					application.dontHidePreloader = false
					application.preloaders.main = false
					
					options.error(error)
					*/
				});
		}
	}, 500);

	watch(() => {
		return options.object.value ? options.object.value[options.property] : options.object[options.property];
	}, saver);
}
