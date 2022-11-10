import { computed, reactive } from 'vue'
import api from '@/api'
import loader from '@/store/loader'
import router from "@/router"

const state_user = reactive({
    courses: null,
    user: {},
    authorized: computed( () => {
        return typeof state_user.user === 'object' && Object.keys(state_user.user).length > 0
    }),
    getInfo: new Promise(() => {}),
})

function getCourses() {
    loader.main = true
    state_user.getInfo.then(() => {
        api.get('courses')
        .then( response => {
            state_user.courses = response.data
            setTimeout(() => {
                loader.main = false
            }, 100)
        })
    })
}

function addCourse() {
    loader.main = true
    api.post('courses')
    .then(function (response) {
        //console.log(router)
        router.push({
            name: 'course-blank',
            params: {
                course_id: response.data.id
            }
        })
        
        //getCourses()
    })
    .catch(function () {
        loader.main = false
    })
}

export default function() {
    return {
        state_user,
        getCourses,
        addCourse,
    }
}