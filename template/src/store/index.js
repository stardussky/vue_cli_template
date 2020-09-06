import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {},
    state: {
        deviceInfo: null,
        viewPort: {
            width: 0,
            height: 0,
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
        }
    },
    mutations: {
        SET_DEVICE_INFO (state, payload) {
            state.deviceInfo = payload
        },
        SET_VIEWPORT (state, { width, height }) {
            state.viewPort = { ...state.viewPort, width, height }
        }
    }
})
