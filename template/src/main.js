import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugin
import VueMeta from 'vue-meta'
import directive from '@/plugins/directives/index'
import prototype from '@/plugins/prototype/index'

Vue.use(VueMeta)
Vue.use(directive)
Vue.use(prototype)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
  render: (h) => h(App),
}).$mount('#app')
