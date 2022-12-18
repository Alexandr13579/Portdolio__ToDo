<template lang="">
    <button class="button__delete"><img src="../../assert/todo/trash.svg" alt="delete"></button>
</template>

<script>

export default {
    name: 'my-btnDeleteTrash'
}
</script>

<style lang="scss" scoped>
    button{
            background-color: inherit;

            &:hover {
                img {
                    content: url("../../assert/todo/trash__hover.svg");
                }
            }
        }
</style>