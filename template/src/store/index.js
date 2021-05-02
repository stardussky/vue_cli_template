import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOADING = Object.freeze({
    MIN_LOAD_TIME: 1000,
    LOADING_TYPE_DEFAULT: 'default',
    LOADING_TYPE_AJAX: 'ajax',
})

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {},
    state: {
        loadingConfig: {
            type: LOADING.LOADING_TYPE_DEFAULT,
        },
        loadingStack: [],
    },
    getters: {
        isLoading (state) {
            return !!state.loadingStack.length
        },
    },
    mutations: {
        CHANGE_LOADING_TYPE (state, payload) {
            const type = LOADING[payload]
            if (type && typeof type === 'string') {
                state.loadingConfig.type = type
            }
        },
        ADD_LOADING_STACK (state, payload) {
            if (payload instanceof Promise) {
                state.loadingStack.push(payload)
            }
        },
        DEL_LOADING_STACK (state) {
            state.loadingStack.shift()
        },
    },
    actions: {
        AJAX (context, options) {
            return new Promise((resolve, reject) => {
                this._vm.$axios({
                    ...options,
                }).then(({ data, ...res }) => {
                    resolve(data)
                }).catch(e => {
                    reject(e)
                })
            })
        },
        WAIT_LOADING ({ state, commit }) {
            const startTime = Date.now()
            return Promise.all(state.loadingStack).then(results => {
                const endTime = Date.now()
                setTimeout(() => {
                    results.forEach(result => commit('DEL_LOADING_STACK'))
                }, LOADING.MIN_LOAD_TIME - (endTime - startTime))
            })
        },
    },
})
