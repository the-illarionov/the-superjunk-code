import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import application from '@/store/application'
import append from '@/composables/append'
import myScroll from '@/composables/myScroll'

import api from '@/api'
import useUser from '@/store/user'

if(localStorage.getItem("token")) {
	const { state_user } = useUser()
    state_user.getInfo = api.get('user')
    
    state_user.getInfo.then( response => {
        state_user.user = response.data
    })
}

const app = createApp(App)

app.config.globalProperties.append = append

router.beforeEach((to, from) => {
	if(to.path !== from.path) {
		myScroll({
			element: window,
			top: 0,
			behavior: "instant",
		})

		/*
		if(document.getElementById("workspace__topics__section")) {
			console.log('rrrr')
			myScroll({
				element: document.getElementById("workspace__topics__section"),
				top: 0,
				behavior: "smooth",
			})

			myScroll({
				element: document.getElementById("workspace__lessons__section"),
				top: 0,
				behavior: "smooth",
			})

			myScroll({
				element: document.getElementById("workspace__lesson__section"),
				top: 0,
				behavior: "smooth",
			})
		}
		*/
	}
	application.sidebar_active = false
})



app.use(router).mount('#app')