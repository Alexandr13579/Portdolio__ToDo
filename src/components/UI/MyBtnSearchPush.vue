<template lang="">
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-btnSearhPush'
}
</script>

<style lang="scss" scoped>
    .btn{
        background: #394C60;
        border-radius: 12px;
        font-size: 16px;
        padding: 16px;
    }
</style>