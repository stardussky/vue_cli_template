<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">
                Home
            </router-link> |
            <router-link to="/about">
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
            title: this.seo.title,
            titleTemplate: '%s | Template',
            htmlAttrs: {
                lang: this.seo.lang
            },
            meta: [
                { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
                { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'description', content: this.seo.description },
                { property: 'og:locale', content: this.seo.lang },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: this.seo.title },
                { property: 'og:description', content: this.seo.description },
                { property: 'og:url', content: this.seo.url },
                { property: 'og:site_name', content: this.seo.title },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:image', content: `${this.seo.url}og_img.jpg` },
                { property: 'og:image:alt', content: this.seo.description },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:description', content: this.seo.description },
                { name: 'twitter:title', content: this.seo.title },
                { name: 'twitter:image', content: `${this.seo.url}og_img.jpg` },
                { itemprop: 'name', content: this.seo.title },
                { itemprop: 'description', content: this.seo.description },
                { itemprop: 'image', content: `${this.seo.url}og_img.jpg` }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap' }
            ]
        }
    },
    data () {
        return {
            seo: {
                lang: 'zh-TW',
                title: 'Cli Template',
                description: 'Cli Template',
                url: 'http://localhost:8080/'
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
