<template>
	<div>
		<div v-if="school">
			<div v-if="school.owner">
				<p>
					url:
					<input type="text" v-model="school.url" />
				</p>
			</div>

			{{ school }}
			<p>{{ school.name }}</p>
		</div>
		<div v-else>
			<div class="skeleton-container">&nbsp;</div>
		</div>
	</div>
</template>
<script>
import { ref } from "vue";

import initView from "@/common/InitView";

import watchAndSaveInput from "@/common/WatchAndSaveInput";

import application from "@/stores/Application";

const school = ref(null);

export default {
	...initView({
		url: `/schools/:school_url`,
		item: school,
		success() {
			application.dynamicRouteText = school.value.name;
		},
	}),
	setup() {
		watchAndSaveInput({
			object: school,
			property: "url",
			url: "/schools/:school_url",
			forceReload: true,
		});

		return {
			school,
		};
	},
	components: {},
};
</script>
