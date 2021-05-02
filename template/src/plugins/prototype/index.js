import axios from './axios'
import bus from './bus'
import viewport from './viewport'

export default function (Vue, options) {
    Vue.prototype.$axios = axios
    Vue.prototype.$bus = bus
    Vue.prototype.$viewport = viewport
}
