<template>
    <svg class="icon">
        <use :xlink:href="'#' + name" />
    </svg>
</template>

<script>

export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang='scss'>
.icon {
    overflow: hidden;
    width: 1rem;
    height: 1rem;
    fill: currentColor;
}
</style>
