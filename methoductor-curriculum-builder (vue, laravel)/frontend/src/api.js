import axios from 'axios'
import router from '@/router/index'
//import useLoader from '@/store/loader'

//const { loader } = useLoader()

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API,
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Accept: 'application/json',
    },
})

axiosInstance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (!error.response.status) {
        router.push({
            path: "/networkerror",
        })
    } else if (error.response.status === 500) {
        router.push({
            path: "/servererror",
        })
    }
    else if (error.response.status === 403) {
        router.replace({
            name: "forbidden",
        })
    }
    return Promise.reject(error)
})


export default axiosInstance