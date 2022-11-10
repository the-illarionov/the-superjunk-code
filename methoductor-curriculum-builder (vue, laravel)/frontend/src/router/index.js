import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main'
import SignUp from '@/views/signup'
import Login from '@/views/login'
import OauthLand from '@/views/oauthland'
import FacebookError from '@/views/facebookerror'
import Subscription from '@/views/subscription'
import Profile from '@/views/profile'
import Privacy from '@/views/privacy'
import ServerError from '@/views/servererror'
import NetworkError from '@/views/networkerror'
import Forbidden from '@/views/forbidden'

import Course from "@/views/course"
import CourseBlankRoute from "@/views/course/blank-route"
import CourseAudience from "@/views/course/audience"
import CourseQuestions from "@/views/course/questions"
import CourseGoal from "@/views/course/goal"
import CourseExport from "@/views/course/export"

import Workspace from "@/views/course/workspace"
import WorkspaceBlankRoute from "@/views/course/workspace-blank-route"
import Test from "@/views/test"
import TestKerill from "@/views/testkerill"

import NotFound from "@/views/notfound"

const routes = [
	{
		path: '/',
		component: Main,
		productionAvailable: true,
		name: "main",
	},
	{
		path: '/privacy',
		component: Privacy,
		productionAvailable: true,
	},
	{
		path: '/servererror',
		component: ServerError,
		productionAvailable: true,
	},
	{
		path: '/forbidden',
		component: Forbidden,
		productionAvailable: true,
		name: 'forbidden',
	},
	{
		path: '/networkerror',
		component: NetworkError,
		productionAvailable: true,
	},
	{
		path: '/oauthland',
		component: OauthLand,
		productionAvailable: true,
	},
	{
		path: '/facebook_error',
		component: FacebookError,
		productionAvailable: true,
	},
	{
		path: '/subscription',
		component: Subscription,
		productionAvailable: true,
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: SignUp,
		productionAvailable: true,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		productionAvailable: true,
	},
	{
		path: '/course/:course_id',
		name: 'course',
		component: Course,
		productionAvailable: true,
		children: [
			{
				path: '',
				component: CourseBlankRoute,
				name: "course-blank",
			},
			{
				path: 'audience',
				component: CourseAudience,
				name: "course-audience",
			},
			{
				path: 'questions',
				component: CourseQuestions,
				name: "course-questions",
			},
			
			{
				path: 'goal',
				component: CourseGoal,
				name: "course-goal",
			},
			{
				path: 'workspace',
				component: WorkspaceBlankRoute,
				name: 'course-workspace-blank',
			},
			{
				path: 'workspace/:type',
				props: true,
				component: Workspace,
				name: "course-workspace",
			},
			{
				path: 'export',
				component: CourseExport,
				name: "course-export",
			},
			
		]
	},
	{
		path: '/demo',
		component: Course,
		productionAvailable: true,
		name: "demo",
		children: [
			{
				path: '',
				component: CourseBlankRoute,
				name: "blank",
			},
			{
				path: 'audience',
				component: CourseAudience,
				name: "audience",
			},
			{
				path: 'questions',
				component: CourseQuestions,
				name: "questions",
			},

			{
				path: 'goal',
				component: CourseGoal,
				name: "goal",
			},
			{
				path: 'workspace',
				component: WorkspaceBlankRoute,
				name: 'workspace-blank',
			},
			{
				path: 'workspace/:type',
				props: true,
				component: Workspace,
				name: "workspace",
			},
			{
				path: 'export',
				component: CourseExport,
				name: "export",
			},
		]
	},

	{
		path: '/profile',
		component: Profile,
		name: 'profile',
		productionAvailable: true,
	},
	{ 
		path: '/:pathMatch(.*)*', 
		name: '404', 
		component: NotFound, 
		productionAvailable: true,
	},
	


	{
		path: '/test',
		component: Test,
		productionAvailable: false,
	},
	{
		path: '/testkerill',
		component: TestKerill,
		productionAvailable: false,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: process.env.NODE_ENV === 'production' ? routes.filter((route) => route.productionAvailable) : routes,
})

export default router