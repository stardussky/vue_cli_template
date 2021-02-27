import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {},
    state: {
        loading: {
            type: 0,
            minTime: 1000,
            default: 0,
            ajax: 0
        }
    },
    getters: {
        isLoading (state) {
            return {
                default: state.loading.default > 0,
                ajax: state.loading.ajax > 0
            }
        }
    },
    mutations: {
        SET_LOADING_TYPE (state, type) {
            state.loading.type = type
        },
        SET_LOADING (state, num) {
            state.loading.type
                ? state.loading.ajax += num
                : state.loading.default += num
        }
    },
    actions: {
        AJAX (context, options) {
            return new Promise((resolve, reject) => {
                this._vm.$axios({
                    ...options
                }).then(({ data, ...res }) => {
                    resolve(data)
                }).catch(e => {
                    reject(e)
                })
            })
        },
        START_LOADING ({ state, commit }, callback) {
            return new Promise(resolve => {
                const startTime = Date.now()
                commit('SET_LOADING', 1)
                callback.call(this, () => {
                    const minTime = state.loading.minTime
                    const remainderTime = Date.now() - startTime
                    setTimeout(() => {
                        commit('SET_LOADING', -1)
                        resolve(true)
                    }, Math.max(minTime - remainderTime, 0))
                })
            })
        }
    }
})
