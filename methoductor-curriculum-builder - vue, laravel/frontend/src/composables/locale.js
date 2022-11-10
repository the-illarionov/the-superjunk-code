//import api from '@/api'
import global from "@/store/application"

function getLocale() {
    if(localStorage.getItem("locale")) {
        global.locale = localStorage.getItem("locale")
    } else {
        global.locale = "en"
        if(window.navigator.language) global.locale = window.navigator.language.slice(0,2)
        
        /*
        const request = api.post('detectlocale')
        const data = request.then((response) => response.data)
        let locales = await data
        let locale = locales.substring(0,2)
        global.locale = locale
        */
        localStorage.setItem("locale", global.locale)
    }
    return global.locale
}

export default function(){
    return {
        getLocale
    }
}
