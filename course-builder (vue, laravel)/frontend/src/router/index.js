import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import Demo from '@/views/Demo.vue'
import View from '@/views/View.vue'
import Admin from '@/views/Admin.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Feedback from '@/views/Feedback.vue'
import Docs from '@/views/Docs.vue'
import Agreement from '@/views/Agreement.vue'
import Privacy from '@/views/Privacy.vue'
import OauthLand from '@/views/OauthLand.vue'
import FacebookError from '@/views/FacebookError.vue'
//import { CONSTANTS } from '@/utils/constants.js'
import s_3_1 from '@/views/skillbox/s_1.vue'
import s_3_2 from '@/views/skillbox/s_2.vue'
import s_3_3 from '@/views/skillbox/s_3.vue'
import s_3_4 from '@/views/skillbox/s_4.vue'
import s_3_5 from '@/views/skillbox/s_5.vue'
import s_3_6 from '@/views/skillbox/s_6.vue'
import s_3_7 from '@/views/skillbox/s_7.vue'
import s_3_8 from '@/views/skillbox/s_8.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/demo',
		component: Demo,
		name: "demo",
	},
	{
		path: '/facebook_error',
		component: FacebookError,
		name: "facebookerror",
	},
	{
		path: '/oauthland',
		component: OauthLand,
		name: "oauthland",
	},
	{
		path: '/agreement',
		component: Agreement,
		name: "agreement",
	},
	{
		path: '/docs',
		component: Docs,
		name: "docs",
	},
	{
		path: '/privacy',
		component: Privacy,
		name: "privacy",
	},
	{
		path: '/view',
		component: View,
	},
	{
		path: '/register',
		component: Register,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/feedback',
		component: Feedback,
	},
	{
		path: '/admin',
		component: Admin,
	},
	{
		path: '/s/3/1',
		component: s_3_1,
		name: "skillbox31",
	},
	{
		path: '/s/3/2',
		component: s_3_2,
		name: "skillbox32",
	},
	{
		path: '/s/3/3',
		component: s_3_3,
		name: "skillbox33",
	},
	{
		path: '/s/3/4',
		component: s_3_4,
		name: "skillbox34",
	},
	{
		path: '/s/3/5',
		component: s_3_5,
		name: "skillbox35",
	},
	{
		path: '/s/3/6',
		component: s_3_6,
		name: "skillbox36",
	},
	{
		path: '/s/3/7',
		component: s_3_7,
		name: "skillbox37",
	},
	{
		path: '/s/3/8',
		component: s_3_8,
		name: "skillbox38",
	},
	{
		path: '/:user',
		component: Profile,
	},
	{
		path: '/embed/:user/:slug',
		component: View,
		name: 'embed',
		props: { 
			is_admin: false 
		}
	},
	{
		path: '/:user/:slug',
		component: View,
		name: 'viewlongread',
		props: { 
			is_admin: false 
		}
	},
	{
		path: '/:user/:slug/edit',
		component: View,
		name: 'editlongread',
		props: { 
			is_admin: true 
		}
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
