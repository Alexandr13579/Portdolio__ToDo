<template>
    <li 
    @click="task.complited = !task.complited, $emit('checked', task)"
    :class="task.complited ? 'complitedLi' : '' "
    class="list__item">
        <input-checkbox v-model="task.complited" />
        <span class="item__title" :class="task.complited ? 'complited' : '' ">{{ task.title }}</span>
        <my-btnDeleteTrash @click="$emit('remove', task)" />
    </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>
    .list__item {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-height: 100%;
        background-color: #333333;
        border: 1px solid #333333;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
        border-radius: 8px;
        gap: 15px;
        padding: 16px;
        cursor: pointer; 
        transition: all ease .5s;
        overflow-wrap: break-word;

        &.complitedLi{
            background-color: #262525;
            white-space: normal;        
        }

        input {
            flex: 0 0 22px;
        }

        .item__title{
            flex: 1 1 auto;
            font-size: 16px;
            color: #F2F2F2;
        }

        .complited{
            text-decoration: line-through;
            color: #808080;
            transition: all ease .5s;
        }
    }
</style>