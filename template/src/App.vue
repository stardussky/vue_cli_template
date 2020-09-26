<template>
    <div id="app">
        <div id="nav">
            <router-link to="/index.html">
                Home
            </router-link> |
            <router-link to="/about.html">
                About
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import { debounce } from 'lodash'
import { mapMutations } from 'vuex'

export default {
    name: 'App',
    metaInfo () {
        return {
            title: this.meta.title,
            titleTemplate: '%s | Template',
            htmlAttrs: {
                lang: this.meta.lang
            },
            meta: [
                { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
                { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
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
                { itemprop: 'image', content: `${this.meta.url}og_img.jpg` }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap' }
            ]
        }
    },
    data () {
        return {
            meta: {
                lang: 'zh-TW',
                title: 'Cli Template',
                description: 'Cli Template',
                url: process.env.VUE_APP_URL
            }
        }
    },
    mounted () {
        this.resize = debounce(this.resize, 200)
        this.SET_DEVICE_INFO(this.$detectDevice())
        this.SET_VIEWPORT({ width: window.innerWidth, height: window.innerHeight })
        window.addEventListener('resize', this.resize)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.resize)
    },
    methods: {
        ...mapMutations(['SET_DEVICE_INFO', 'SET_VIEWPORT']),
        resize () {
            this.SET_VIEWPORT({ width: window.innerWidth, height: window.innerHeight })
        }
    }
}
</script>

<style lang="scss">
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
