import Vue from 'vue'
import App from './App.vue'

// IMPORT ROUTER
import router from './router'

// IMPORT VUEX
import store from './store'

//IMPORT GLOBAL COMPONENTS
import BaseSpinner from '@/components/ui/BaseSpinner.vue'
import BaseLink from '@/components/ui/BaseLink.vue'

Vue.config.productionTip = false

// GLOBAL COMPONENTS
Vue.component('base-spinner', BaseSpinner);
Vue.component('base-link', BaseLink);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
