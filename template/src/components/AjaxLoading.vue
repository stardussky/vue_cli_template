<template>
    <transition
        name="loading"
        @afterLeave="loadingDone"
    >
        <div
            v-show="loadingConfig.type === 'ajax' && isLoading"
            class="ajax-loading"
        />
    </transition>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    name: 'AjaxLoading',
    computed: {
        ...mapState(['loadingConfig']),
        ...mapGetters(['isLoading']),
    },
    methods: {
        ...mapMutations(['CHANGE_LOADING_TYPE']),
        loadingDone () {
            this.CHANGE_LOADING_TYPE('LOADING_TYPE_DEFAULT')
            this.$bus.$emit('ajax-loading-done')
        },
    },
}
</script>

<style lang="scss">
.ajax-loading {
    @include size(100%);

    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(map-get($colors, white), 0.5);
    z-index: 999;
}
</style>
