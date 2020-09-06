import store from '@/store/index'

export function isDesktop () {
    return store.getters.deviceMedia === 'desktop'
}

export function isTablet () {
    return store.getters.deviceMedia === 'tablet'
}

export function isMobile () {
    return store.getters.deviceMedia === 'mobile'
}

export function isPc () {
    return store.state.deviceInfo && store.state.deviceInfo.device === 'pc'
}

export function isIE () {
    return store.state.deviceInfo && store.state.deviceInfo.browser === 'ie'
}
