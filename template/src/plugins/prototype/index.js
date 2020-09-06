import detectDevice from './detectDevice'
import * as deviceMedia from './device&media'

export default function (Vue, options) {
    Vue.prototype.$detectDevice = detectDevice
    for (const m in deviceMedia) Vue.prototype[`$${m}`] = deviceMedia[m]
}
