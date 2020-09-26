import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use(config => {
    return config
})

instance.interceptors.response.use(response => {
    return response
})

export { instance }

export default function (Vue) {
    Vue.prototype.$axios = instance
}
