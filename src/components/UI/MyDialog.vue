<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}
</script>

<style lang="scss" scoped>
    .dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 100;
        display: flex;
    
        &__list {
            margin: auto;
            background-color: #1A1A1A;
            border-radius: 13px;
            min-height: 70px;
            min-width: 300px;
            padding: 20px;
        }
}

</style>