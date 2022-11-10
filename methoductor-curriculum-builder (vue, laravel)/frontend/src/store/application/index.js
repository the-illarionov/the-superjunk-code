import { reactive, watch } from "vue"

const global = reactive({
    locale: localStorage.getItem("locale"),
    fallback: 'en',
    sidebar_active: false,
    is_mobile: false,
})

watch(() => global.sidebar_active, (value) => {
    if(value === true) {
        document.querySelector("body").classList.add("freeze-mobile")
    } else {
        document.querySelector("body").classList.remove("freeze-mobile")
    }
})

export default global