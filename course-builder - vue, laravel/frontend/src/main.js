import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import modal from '@/components/utils/modal'

import lodash from '@/utils/lodash.js'
import components from '@/utils/components.js'
//import axios from 'axios'
//import { CONSTANTS } from '@/utils/constants.js'

Vue.config.productionTip = false
//Vue.use(axios)

Vue.prototype.$modal = modal
Vue.prototype.$modal = modal

//Vue.prototype.$CONSTANTS = CONSTANTS;

lodash(Vue);
//axios(Vue);

components(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

