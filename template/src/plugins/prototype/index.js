import detectDevice from './detectDevice'
import * as deviceMedia from './device&media'
import mobileInnerHeight from './mobileInnerHeight'


export default function (Vue, options) {
    Vue.prototype.$detectDevice = detectDevice
    for (const m in deviceMedia) Vue.prototype[`$${m}`] = deviceMedia[m]
    Vue.prototype.$innerHeight = mobileInnerHeight
}
