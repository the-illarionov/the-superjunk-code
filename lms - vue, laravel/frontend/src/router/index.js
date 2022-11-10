import { createRouter, createWebHistory } from "vue-router"
import Main from "@/views/Main"
import Login from "@/views/Login"
import Error404 from "@/components/ErrorHandler/404"
import NestedRouteContainer from "@/components/NestedRouteContainer"

import Teens from "@/views/Teens"
import TeensCourses from "@/views/Teens/Courses"
import TeensCourse from "@/views/Teens/Courses/Course"
import TeensLesson from "@/views/Teens/Courses/Course/Lesson"

import Marketplace from "@/views/Marketplace"
import MarketplaceCourse from "@/views/Marketplace/Course"
import MarketplaceLesson from "@/views/Marketplace/Course/Lesson"

import Profile from "@/views/Profile"
import EditorOfCourses from "@/views/Profile/EditorOfCourses"
import EditorOfCoursesCourse from "@/views/Profile/EditorOfCourses/Course"
import EditorOfCoursesLesson from "@/views/Profile/EditorOfCourses/Course/Lesson"

import StudentOfCourses from "@/views/Profile/StudentOfCourses"
import StudentOfCoursesCourse from "@/views/Profile/StudentOfCourses/Course"
import StudentOfCoursesLesson from "@/views/Profile/StudentOfCourses/Course/Lesson"

import Schools from "@/views/Schools"
import School from "@/views/Schools/School"

import user from "@/stores/User"
import getLocale from "@/common/Locales/Get"

import TestLocalization from "@/views/test/Localization"

const routes = [
	// MAIN
	{
		path: "/",
		name: "Main",
		component: Main
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		beforeEnter: (to, from, next) => {
			if (!user.logged) {
				next()
			} else {
				next({ name: "Profile", params: { nickname: user.nickname } })
			}
		}
	},

	// PROFILE
	{
		path: "/users/:nickname",
		component: NestedRouteContainer,
		children: [
			{
				path: "",
				name: "Profile",
				component: Profile
			},
			{
				path: "editor/courses",
				component: NestedRouteContainer,
				children: [
					{
						path: "",
						component: EditorOfCourses,
						name: "EditorOfCourses"
					},
					{
						path: ":course_url",
						component: NestedRouteContainer,
						children: [
							{
								path: "",
								name: "EditorOfCoursesCourse",
								component: EditorOfCoursesCourse
							},
							{
								path: ":lesson_number",
								name: "EditorOfCoursesLesson",
								component: EditorOfCoursesLesson
							}
						]
					}
				]
			},
			{
				path: "student/courses",
				component: NestedRouteContainer,
				children: [
					{
						path: "",
						component: StudentOfCourses,
						name: "StudentOfCourses"
					},
					{
						path: ":course_url",
						component: NestedRouteContainer,
						children: [
							{
								path: "",
								name: "StudentOfCoursesCourse",
								component: StudentOfCoursesCourse
							},
							{
								path: ":lesson_number",
								name: "StudentOfCoursesLesson",
								component: StudentOfCoursesLesson
							}
						]
					}
				]
			}
		]
	},

	// TEENS
	{
		path: "/teens",
		component: NestedRouteContainer,
		children: [
			{
				path: "",
				name: "Teens",
				component: Teens
			},
			{
				path: "courses",
				component: NestedRouteContainer,
				children: [
					{
						path: "",
						name: "TeensCourses",
						component: TeensCourses
					},
					{
						path: ":course_url",
						component: NestedRouteContainer,
						children: [
							{
								path: "",
								name: "TeensCourse",
								component: TeensCourse
							},
							{
								path: ":lesson_number",
								name: "TeensLesson",
								component: TeensLesson
							}
						]
					}
				]
			}
		]
	},

	// MARKETPLACE
	{
		path: "/marketplace",
		component: NestedRouteContainer,
		children: [
			{
				path: "",
				name: "Marketplace",
				component: Marketplace
			},
			{
				path: ":course_url",
				component: NestedRouteContainer,
				children: [
					{
						path: "",
						name: "MarketplaceCourse",
						component: MarketplaceCourse
					},
					{
						path: ":lesson_number",
						name: "MarketplaceLesson",
						component: MarketplaceLesson
					}
				]
			}
		]
	},

	// SCHOOLS
	{
		path: "/schools",
		component: NestedRouteContainer,
		children: [
			{
				path: "",
				name: "Schools",
				component: Schools
			},
			{
				path: ":school_url",
				component: NestedRouteContainer,
				children: [
					{
						path: "",
						name: "School",
						component: School
					}
				]
			}
		]
	},

	// ERRORS
	{
		path: "/:pathMatch(.*)*",
		name: "Error404",
		component: Error404
	}
]

if (process.env.NODE_ENV !== "production") {
	routes.push({
		path: "/test/localization",
		name: "TestLocalization",
		component: TestLocalization
	})
}

let locale = getLocale()

const router = createRouter({
	history: createWebHistory("/" + locale),
	routes,
	scrollBehavior() {
		return { top: 0 }
	}
})

export default router
