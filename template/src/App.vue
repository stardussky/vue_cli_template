<template>
    <div
        id="app"
        :style="globalStyle"
    >
        <div id="nav">
            <router-link to="/index.html">
                Home
            </router-link> |
            <router-link to="/about.html">
                About
            </router-link>
        </div>
        <router-view />
        <AjaxLoading />
        <Loading />
    </div>
</template>

<script>
import { mapViewport } from '@/plugins/prototype/viewport'
import { mapMutations, mapActions } from 'vuex'
import WebFont from 'webfontloader'
import Loading from '@/components/Loading'
import AjaxLoading from '@/components/AjaxLoading'

export default {
    name: 'App',
    metaInfo () {
        return {
            title: this.$route.name || this.title,
            titleTemplate: `%s | ${process.env.VUE_APP_TITLE_TEMPLATE}`,
            htmlAttrs: {
                lang: this.meta.lang,
            },
            meta: [
                { name: 'googlebot', content: 'noindex' }, // TODO: 正式上線後刪除
                { name: 'robots', content: 'noindex' }, // TODO: 正式上線後刪除
                { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'description', content: this.meta.description },
                { property: 'og:locale', content: this.meta.lang },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: this.meta.title },
                { property: 'og:description', content: this.meta.description },
                { property: 'og:url', content: this.meta.url },
                { property: 'og:site_name', content: this.meta.title },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:image', content: `${this.meta.url}og_img.jpg` },
                { property: 'og:image:alt', content: this.meta.description },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:description', content: this.meta.description },
                { name: 'twitter:title', content: this.meta.title },
                { name: 'twitter:image', content: `${this.meta.url}og_img.jpg` },
                { itemprop: 'name', content: this.meta.title },
                { itemprop: 'description', content: this.meta.description },
                { itemprop: 'image', content: `${this.meta.url}og_img.jpg` },
            ],
            link: [
                { rel: 'apple-touch-icon', sizes: '180x180', href: `${this.meta.url}favicon/apple-icon-180x180.png` },
                { rel: 'icon', sizes: '32x32', type: 'image/png', href: `${this.meta.url}favicon/favicon-32x32.png` },
                { rel: 'icon', sizes: '16x16', type: 'image/png', href: `${this.meta.url}favicon/favicon-16x16.png` },
            ],
        }
    },
    components: {
        Loading,
        AjaxLoading,
    },
    setup (props, context) {
        return {
            meta: {
                lang: 'zh-TW',
                title: process.env.VUE_APP_TITLE,
                description: '',
                url: process.env.VUE_APP_URL,
            },
        }
    },
    computed: {
        ...mapViewport.vpHeight,
        globalStyle () {
            return {
                '--vh': `${window.innerHeight / this.vpHeight}vh`,
            }
        },
    },
    async mounted () {
        this.ADD_LOADING_STACK(this.loadFont())
        await this.WAIT_LOADING()
    },
    beforeDestroy () {
        this.$viewport.destroy()
    },
    methods: {
        ...mapMutations(['ADD_LOADING_STACK']),
        ...mapActions(['WAIT_LOADING']),
        loadFont () {
            return new Promise(resolve => {
                WebFont.load({
                    google: {
                        families: ['Noto Sans TC:300,400,700'],
                    },
                    active () {
                        resolve()
                    },
                })
            })
        },
    },
}
</script>

<style lang="scss">
@import '@/style/_main.scss';

#app {
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
