<template>
<div>
	<div class="section section_center">
		<div class="section__wrapper px-3">
			<h1 class="header-1">
				{{ translate("welcome.header") }}
			</h1>
			<div v-html="translate('welcome.about')">
			</div>
			<router-link 
				to="/demo"
				v-slot="{ navigate }">
				<v-button
					@click="navigate">
					{{ translate("welcome.create") }}
				</v-button>
			</router-link>
		</div>
	</div>

	<div class="spacer" id="functionality" />
	<div class="section-container">
	<div class="section px-3">
		<h2 class="header-2 mb-3">
			{{ translate("dividers.first.text") }}
		</h2>
		<!--
		<div v-html='translate("dividers.first.text")'>
		</div>
		-->

		<div class="feature-container mb-5"
			v-for="(card, index) in cards"
			:key="index"
			:class="(index + 1) % 2 == 0 ? 'reversed' : ''">
			<div class="col-12 col-lg-5 pt-5 mb-3">
				<h3 class="header-3 mb-3">
					{{ translate('cards.' + card + '.header') }}
				</h3>
				<div v-html="translate('cards.' + card + '.text')" />
			</div>
			<div class="col-12 col-lg-7 mb-3 embed-responsive embed-responsive-16by9">
				<img class="w-100 br-1 lazy-load embed-responsive-item" :data-src="require('@/assets/images/' + translate('cards.' + card + '.img'))" />
			</div>
		</div>
	</div>
	</div>

	<div class="spacer" id="about" />
	<div class="section section_center">
		<div class="section__wrapper">
			<h2 class="header-2">
				{{ translate("dividers.third.header") }}
			</h2>

			<div class="feature-container">
				<div class="col-12 col-lg-5 mb-3">
					<h3 class="header-3 mb-3">
						{{ translate('dividers.third.subheader') }}
					</h3>
					<div v-html="translate('dividers.third.text')" />
				</div>
				<div class="col-12 col-lg-7 mb-3">
					<div class="embed-responsive embed-responsive-16by9">
						<iframe class="embed-responsive-item lazy-load" data-src="https://www.youtube.com/embed/mZrdZYyUQH0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="spacer" id="pricing" />
	<div class="section-container mb-5">
	<div class="section mh-auto">
		<h2 class="header-2 mb-3">
			{{ translate("dividers.fourth.header") }}
		</h2>

		<table class="pricing">
			<tr>
				<td class="column-text">
					
				</td>
				<td class="column-info">
					{{ translate("table.first.two") }}
				</td>
				<td class="column-info">
					{{ translate("table.first.three") }}
				</td>
				<td class="column-info">
					{{ translate("table.first.four") }}
				</td>
			</tr>
			<tr>
				<td>
					{{ translate("table.second.one") }}
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
			</tr>
			<tr>
				<td>
					{{ translate("table.third.one") }}
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
			</tr>
			<tr>
				<td>
					{{ translate("table.fourth.one") }}
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
			</tr>
			<tr>
				<td>
					{{ translate("table.fifth.one") }}
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
			</tr>
			<tr>
				<td>
					{{ translate("table.sixth.one") }}
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
			</tr>
			<tr>
				<td>
					{{ translate("table.seventh.one") }}
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
			</tr>
			<tr>
				<td>
					{{ translate("table.eighth.one") }}
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/cross.svg"/>
				</td>
				<td>
					<img src="@/assets/images/tick.svg"/>
				</td>
			</tr>
			<tr>
				<td>
					{{ translate("table.nineth.one") }}
				</td>
				<td>
					{{ translate("table.nineth.two") }}
				</td>
				<td>
					{{ translate("table.nineth.three") }}
				</td>
				<td>
					{{ translate("table.nineth.four") }}
				</td>
			</tr>
		</table>
	</div>
	</div>

	<div class="text-center mb-5">
		<h2 class="header-2">
			<router-link 
				to="/demo"
				v-slot="{ navigate }">
				<v-button
					@click="navigate">
					{{ translate("welcome.create") }}
				</v-button>
			</router-link>
		</h2>
	</div>
	
	<div class="section-container">
		<div class="section text-left mh-auto row">
			<div class="col-6">
				<p>
					<img src="@/assets/images/logo.png" style="width: 100px; margin-right: 10px" />
					methoductor
				</p>
				
				<p>
					Language:
					<select v-model="global.locale" @change="setLocale">
						<option value="ru">Русский</option>
						<option value="en">English</option>
					</select>
				</p>
			</div>
			<div class="col-6">
				<p>
					<a :href="translate('telegram')">
						<i class="lab la-telegram"></i>
						telegram
					</a>
				</p>

				<p>
					<a href="https://www.instagram.com/methoductor/">
						<i class="lab la-instagram"></i>
						instagram
					</a>
				</p>
				<p>
					<a href="https://www.youtube.com/channel/UCPysvdj8aOzMIzXhbrXKo8Q">
						<i class="lab la-youtube"></i>
						youtube
					</a>
				</p>
				<p>
					<a href="https://twitter.com/methoductor">
						<i class="lab la-twitter"></i>
						twitter
					</a>
				</p>
			</div>
		</div>
	</div>

	<!--
	<div class="card-tabs">
		<div class="card" v-if="notMobile">
			<div class="col-6 img">
				<img :src="cardTabs[activeCard].image"/>
			</div>
			<div class="col-4 text">		
				<div
					v-for="card in cardTabs"
					v-bind:key="card.id"
					:class="(card.id == activeCard) ? 'active' : 'nonactive'"
					@click="activeCard = card.id">
					<h4>
						{{ card.header }}
					</h4>	
					<div v-show="card.id == activeCard" v-html="card.text">
					</div>
				</div>
			</div>
		</div>
		<div class="card" v-else>
			<div class="text col-12">		
				<div
					v-for="card in cardTabs"
					v-bind:key="card.id"
					:class="(card.id == activeCard) ? 'active' : 'nonactive'"
					@click="activeCard = card.id">
					<h4>
						{{ card.header }}
					</h4>	
					<p v-show="card.id == activeCard">
						{{ card.text }}
					</p>
				</div>
			</div>
			<div class="img col-12">
				<img :src="cardTabs[activeCard].image"/>
			</div>
		</div>
	</div>
	-->
</div>
</template>
<script>
import VButton from "@/components/form/v-button"
import { onMounted } from "vue"

//import router from '@/router'

import messages from '@/localization/views/main'
import localization from "@/composables/localization"
const translate = localization(messages)
import global from "@/store/application"
import lazyLoad from "@/store/lazy-load"


export default {
	setup() {
		const cards = [
			"automatic",
			"templates",
			"devices",
			"skilltree",
			//"assistance",
		]

		/*
		const cardTabs = reactive([
			{
				id: 0,
				header: translate('cards.tabs.team.header'),
				text: translate('cards.tabs.team.text'),
				image: require('@/assets/images/'+translate('cards.tabs.team.img'))
			},
			{
				id: 1,
				header: translate('cards.tabs.builder.header'),
				text: translate('cards.tabs.builder.text'),
				image: require('@/assets/images/'+translate('cards.tabs.builder.img'))
			},
			{
				id: 2,
				header: translate('cards.tabs.templates.header'),
				text: translate('cards.tabs.templates.text'),
				image: require('@/assets/images/'+translate('cards.tabs.templates.img'))
			},
			{
				id: 3,
				header: translate('cards.tabs.community.header'),
				text: translate('cards.tabs.community.text'),
				image: require('@/assets/images/'+translate('cards.tabs.community.img'))
			},
		])

		const activeCard = ref(0)
		*/

		onMounted(() => {
			ym(71143837,'reachGoal','visit_main')

			document.querySelectorAll(".lazy-load").forEach( lazy => {
				lazyLoad.observe(lazy)
			})
		})

		function setLocale() {
			localStorage.setItem("locale", global.locale)
			document.location.reload()
		}

		return {
			translate,
			//cardTabs,
			//activeCard,
			cards,
			global,
			setLocale,
		}
	},
	components: {
		VButton,
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
