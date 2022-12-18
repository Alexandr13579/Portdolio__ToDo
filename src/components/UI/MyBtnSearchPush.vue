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
        background: #4177a1;
        border-radius: 8px;
        font-size: 16px;
        padding: 16px;
        outline: none;
        appearance:none;
    }
</style>