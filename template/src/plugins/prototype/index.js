import setupViewport from './viewport/index'

export default function (Vue, options) {
    Vue.prototype.$viewport = setupViewport()
}
