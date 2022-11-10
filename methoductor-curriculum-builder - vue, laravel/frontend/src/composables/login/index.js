import { reactive } from 'vue'
import api from '@/api'
import useStore from '@/store/user'
import router from '@/router/index'
import loader from '@/store/loader'

const state = reactive({
    email: "",
    password: "",
    password_confirmation: "",
    unauthorized: false,
    unique: false,
    valid: false,
    mismatch: false,
    wrong: false,
    mail_required_login: false,
    pass_required_login: false,
    mail_required_signup: false,
    pass_required_signup: false,
    pass_confirm_required_signup: false,
})

function validate() {
    api.post('validation',
    {
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation,
    })
    .then(function (response) {
        if(response.data != undefined) {
            if(response.data.status == "valid") {
                state.mismatch = false
                state.valid = false
            }
        }
    })
    .catch(function (error) {
        console.log(error.response)
        if (error.response.data.errors.email == undefined) {
            state.valid = false
        } else {           
            error.response.data.errors.email.forEach(key => {
                if(key == "VALID_EMAIL") {
                    state.valid = true
                }
            })
        }
        if (error.response.data.errors.password == undefined) {
            state.mismatch = false
        } else {           
            error.response.data.errors.password.forEach(key => {
                if(key == "MISMATCH") {
                    state.mismatch = true
                }
            })
        }
    })
}

function login() {
    if(!state.email || !state.password) {
        if(!state.email) {
            state.mail_required_login = true
        } else {
            state.mail_required_login = false
        }
        if (!state.password) {
            state.pass_required_login = true
        } else {
            state.pass_required_login = false
        }
    } else {
        state.mail_required_login = false
        state.pass_required_login = false
        loader.main = true

        api.post('login',
        {
            email: state.email,
            password: state.password,
        })
        .then(function (response) {
            const { state_user } = useStore()

            localStorage.setItem('token', response.data.token)
            api.defaults.headers['Authorization'] = "Bearer " + response.data.token
            state_user.user = response.data.user
            state_user.getInfo = new Promise((resolve) => {
                resolve()
            })
            
            router.replace({ name: 'profile' })
        })
        .catch(function (error) {
            if (error.response.data.message == undefined) {
                console.log(error.response.data)
            } else if (error.response.data.message == "WRONG"){
                state.unauthorized = true
                console.log(state)
            }
            loader.main = false
        })

    }
}

function logout() {
    const { state_user } = useStore()

    localStorage.removeItem('token')
    api.defaults.headers['Authorization'] = ""
    state_user.user = {}
    state_user.getInfo = null
    state_user.courses = []
    router.push("/")
}

function reg() {
    if(!state.email || !state.password || !state.password_confirmation) {
        if(!state.email) {
            state.mail_required_signup = true
        } else {
            state.mail_required_signup = false
        }
        if (!state.password) {
            state.pass_required_signup = true
        } else {
            state.pass_required_signup = false
        }
        if (!state.password_confirmation) {
            state.pass_confirm_required_signup = true
        } else {
            state.pass_confirm_required_signup = false
        }
    } else {
        state.mail_required_signup = false
        state.pass_required_signup = false
        state.pass_confirm_required_signup = false
        loader.main = true
        api.post('register',
        {
            email: state.email,
            yandex_id: localStorage.getItem('yandexClientId'),
            password: state.password,
            password_confirmation: state.password_confirmation,
        })
        .then(() => {
            login()
        })
        .catch(function (error) {
            console.log(error.response)
            console.log(error.response.data.errors)
            if (error.response.data.errors.email == undefined) {
                state.valid = false
                state.unique = false
                state.mail_required_signup = false
            } else {
                error.response.data.errors.email.forEach(key => {
                    if(key == "VALID_EMAIL") {
                        state.valid = true
                        console.log(state)
                    } else if(key == "NOT_UNIQUE") {
                        state.unique = true
                    }
                })
            }
            if (error.response.data.errors.password == undefined) {
                state.mismatch = false
                state.pass_required_signup = false
            } else {           
                error.response.data.errors.password.forEach(key => {
                    if(key == "MISMATCH") {
                        state.mismatch = true
                    }
                })
            }
            loader.main = false
        })
    }
}

export default function() {
    return {
        state,
        reg,
        login,
        logout,
        validate
    }
}