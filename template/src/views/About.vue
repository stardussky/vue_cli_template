<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="getApi">
            Ajax Loading Test
        </button>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
    name: 'About',
    methods: {
        ...mapMutations(['CHANGE_LOADING_TYPE', 'ADD_LOADING_STACK']),
        ...mapActions(['WAIT_LOADING']),
        getApi () {
            this.CHANGE_LOADING_TYPE('LOADING_TYPE_AJAX')
            this.ADD_LOADING_STACK(new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            }))
            this.WAIT_LOADING()
        },
    },
}
</script>

<style lang="scss">
.about {
    button {
        margin-top: 20px;
        padding: 5px 10px;
        border: 1px solid;
    }
}
</style>
