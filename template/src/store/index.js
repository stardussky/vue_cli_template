import Vue from 'vue'
import Vuex from 'vuex'
import detectDevice from '../plugins/prototype/detectDevice'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {},
    state: {
        loading: {
            minTime: 1000,
            wait: 0
        },
        deviceInfo: detectDevice(),
        viewPort: {
            width: window.innerWidth,
            height: window.innerHeight,
            media: {
                mobile: '(max-width: 767px)',
                tablet: '(max-width: 1199px) and (min-width: 768px)',
                desktop: '(min-width:1200px)'
            }
        }
    },
    getters: {
        deviceMedia (state) {
            if (process.browser) {
                for (const key in state.viewPort.media) {
                    if (window.matchMedia(state.viewPort.media[key]).matches) {
                        return key
                    }
                }
            }
            return null
        },
        isLoading (state) {
            return state.loading.wait > 0
        }
    },
    mutations: {
        SET_DEVICE_INFO (state, payload) {
            state.deviceInfo = payload
        },
        SET_VIEWPORT (state, { width, height }) {
            state.viewPort = { ...state.viewPort, width, height }
        },
        ADD_LOADING (state, num) {
            state.loading.wait += num
        },
    },
    actions: {
        AJAX (context, { url = '', method = 'get', ...options } = {}) {
            return new Promise((resolve, reject) => {
                this._vm.$axios({
                    url: process.env.VUE_APP_API + url,
                    method,
                    ...options
                }).then(({ data, ...res }) => {
                    resolve(data)
                }).catch(e => reject(e))
            })
        },
        START_LOADING ({ state, commit }, callback) {
            const startTime = Date.now()
            commit('ADD_LOADING', 1)
            callback.call(this, () => {
                const minTime = state.loading.minTime
                const remainderTime = Date.now() - startTime
                setTimeout(() => {
                    commit('ADD_LOADING', -1)
                }, Math.max(minTime - remainderTime, 0))
            })
        }
    }
})
