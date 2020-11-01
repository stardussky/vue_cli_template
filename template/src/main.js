import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugin
import VueMeta from 'vue-meta'
import axios from '@/plugins/axios'
import svgIcon from '@/plugins/svgIcon'
import directive from '@/plugins/directives/index'
import prototype from '@/plugins/prototype/index'
import bus from '@/plugins/bus'
import globalComponent from '@/plugins/globalComponent'

Vue.use(VueMeta)
Vue.use(axios)
Vue.use(svgIcon)
Vue.use(directive)
Vue.use(prototype)
Vue.use(bus)
Vue.use(globalComponent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
  render: (h) => h(App),
}).$mount('#app')
