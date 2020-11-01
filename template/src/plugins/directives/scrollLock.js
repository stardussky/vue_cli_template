import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default function (Vue, options) {
    Vue.directive('lock', function (el, { value, ...binding }) {
        if (value) {
            disableBodyScroll(el, {
                reserveScrollBarGap: true
            })
            return
        }
        enableBodyScroll(el)
    })
}
