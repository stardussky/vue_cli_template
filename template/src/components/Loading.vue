<template>
    <transition
        name="loading"
        @afterLeave="loadingDone"
    >
        <div
            v-show="loadingConfig.type === 'default' && isLoading"
            class="loading"
        />
    </transition>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Loading',
    computed: {
        ...mapState(['loadingConfig']),
        ...mapGetters(['isLoading']),
    },
    methods: {
        loadingDone () {
            this.$bus.$emit('loading-done')
        },
    },
}
</script>

<style lang="scss">
.loading {
    @include size(100%);

    position: fixed;
    top: 0;
    left: 0;
    background-color: map-get($colors, black);
    pointer-events: none;
    z-index: 999;
}
</style>
