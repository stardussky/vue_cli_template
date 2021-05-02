<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import ImagesLoaded from 'imagesloaded'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    async mounted () {
        this.ADD_LOADING_STACK(this.loadImage())
        await this.WAIT_LOADING()
    },
    methods: {
        ...mapMutations(['ADD_LOADING_STACK']),
        ...mapActions(['WAIT_LOADING']),
        loadImage () {
            return new Promise(resolve => {
                new ImagesLoaded('#app', { background: '[data-background]' }, (instance) => {
                    resolve()
                })
            })
        },
    },
}
</script>
