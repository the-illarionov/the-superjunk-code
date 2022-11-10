<template>
<div class="examples">
	<template v-if="showTitle">
		{{ examples_length > 1 ? translate("examples") : translate("for_example") }}
	</template>
	<div class="row">
		<div
			v-for="(type, key) in source"
			:key="key"
			:class="'example__' + key + ' ' + exampleClass">
			<p class="title" v-if="examples_length > 1">
				{{ key == 'good' ? translate("good") : translate("bad") }}
			</p>

			<template v-for="(example, index) in source[key]"
				:key="index">
				<transition name="top-to-bottom" mode="out-in">
					<div v-if="!show_explains[key]">
						<div class="mb-3" v-html="example.text"></div>

						<v-button small v-if="example.explain" @click="show_explains[key] = true">
							{{ key == 'good' ? translate("explain_good") : translate("explain_bad") }}
						</v-button>
					</div>
					<div v-else-if="show_explains[key] && example.explain">
						<div class="mb-3" v-html="example.explain"></div>

						<v-button small @click="show_explains[key] = false">{{ translate("understand") }}</v-button>
					</div>
				</transition>
			</template>

			<!--
			<div v-for="(example, index) in source[key]" :key="index">
				<transition name="left-to-right">
					<div v-if="example.good">
						<div v-html="example.text"></div>
						<div class="mt-3">
							<v-button small>
								{{ translate("explain_good") }}
							</v-button>
						</div>

					</div>
					<div v-if="example.bad">
						<div v-html="example.text"></div>
						<div class="mt-3">
							<v-button small>
								{{ translate("explain_bad") }}
							</v-button>
						</div>

					</div>
				</transition>
			</div>
			-->
			<!--
			<flipper 
				v-for="(example, index) in source[key]"
				:key="index">
				<template #front>
					<div v-html="example.text"></div>
				</template>
				<template #back v-if="example.explain">
					<div v-html="example.explain"></div>
				</template>
				<template #front-button v-if="example.explain">
					<div class="mt-3">
						<v-button small>
							{{ key == 'good' ? translate("explain_good") : translate("explain_bad") }}
						</v-button>
					</div>
				</template>
				<template #back-button v-if="example.explain">
					<div class="mt-3">
						<v-button small>{{ translate("understand") }}</v-button>
					</div>
				</template>
			</flipper>
			-->
		</div>

	</div>
</div>
</template>
<script>
import { computed, reactive } from 'vue'
//import Flipper from '@/components/flipper'
import VButton from "@/components/form/v-button"

import localization from "@/composables/localization"
import messages from '@/localization/components/example'



const translate = localization(messages)

export default {
	props: {
		source: {
			required: true,
		},
		showTitle: {
			default: true,
			type: Boolean,
		},
		row: {
			default: false,
			type: Boolean,
		}
	},
	setup(props) {
		const show_explains = reactive({
			good: false,
			bad: false,
		})
		const examples_length = Object.keys(props.source).length

		const exampleClass = computed(() => {
			return props.row ? 'col-lg-12' : 'col-lg-' + 12 / examples_length
		})
		
		return {
			examples_length,
			translate,
			exampleClass,
			show_explains
		}
	},
	components: {
		//Flipper,
		VButton
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>