// Be aware: this file is also used by node to generate static pages (/frontend/ssr/render.js:7)

export const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/HomeView.vue"),
		meta: {
			ssg: true,
		},
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/AboutView.vue"),
	},
]
