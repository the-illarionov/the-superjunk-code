<template>
<div class="wrapper">
	<h3 class="header-3 mb-3 d-flex">
		<span class="mr-2">
			{{ translate('c_navigation.lesson_map') }} №1.
		</span>
		<span style="flex-grow: 1">
			<v-input
				block
				no-bg />
		</span>
	</h3>
	<div class="row">
		<div class="col-lg-7 mb-3">
			<div class="section section_intro">
				<h3 class="header">Beginning.</h3>
				<ol>
					<li class="pb-5">
						<div class="row">
							<div class="col-lg-3 mb-3">
								Демонстрация результата модуля
							</div>
							<div class="col-lg-8">
								В конце модуля вы научитесь верстать самостоятельно такие сайты как: Blizzard, vk.com, spotify. Узнаете как можно добавлять медиа файлы, как писать команды на HTML и строить структуру сайта. 
							</div>
						</div>
					</li>
					<li class="pb-5">
						<div class="row">
							<div class="col-lg-3 mb-3">
								Демонстрация результата модуля
							</div>
							<div class="col-lg-8">
								В конце модуля вы научитесь верстать самостоятельно такие сайты как: Blizzard, vk.com, spotify. Узнаете как можно добавлять медиа файлы, как писать команды на HTML и строить структуру сайта. 
							</div>
						</div>
					</li>
				</ol>
			</div>
			<div class="section section_intro">
				<h3 class="header">Beginning</h3>
				<ol>
					<li class="pb-5">
						<div class="row">
							<div class="col-lg-3 mb-3">
								Демонстрация результата модуля
							</div>
							<div class="col-lg-8">
								В конце модуля вы научитесь верстать самостоятельно такие сайты как: Blizzard, vk.com, spotify. Узнаете как можно добавлять медиа файлы, как писать команды на HTML и строить структуру сайта. 
							</div>
						</div>
					</li>
					<li class="pb-5">
						<div class="row">
							<div class="col-lg-3 mb-3">
								Демонстрация результата модуля
							</div>
							<div class="col-lg-8">
								В конце модуля вы научитесь верстать самостоятельно такие сайты как: Blizzard, vk.com, spotify. Узнаете как можно добавлять медиа файлы, как писать команды на HTML и строить структуру сайта. 
							</div>
						</div>
					</li>
				</ol>
			</div>
		</div>
		<div class="col-lg-5">
			asdasd
		</div>
	</div>
</div>
</template>

<script>
import translate from './translate'
import VInput from '@/components/form/v-input'

export default {
	setup() {
		return {
			translate,
		}
	},
	components: {
		VInput,
	}
}
</script>

<style scoped lang="scss">
@import './index';
</style>