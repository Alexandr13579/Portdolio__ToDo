<template>
    <li 
    @click="task.complited = !task.complited, $emit('checked', task)"
    :class="task.complited ? 'complitedLi' : '' "
    class="list__item"
    >
        <input-checkbox v-model="task.complited" />
        <p :class="task.complited ? 'complited' : '' ">{{ task.title }}</p>
        <button @click="$emit('remove', task)" class="list__btn"><img src="../../assert/todo/trash.svg" alt="delete"></button>
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
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #333333;
        border: 1px solid #333333;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
        border-radius: 8px;
        gap: 15px;
        padding: 16px;
        cursor: pointer; 
        transition: all ease .5s;

        &.complitedLi{
            background-color: #262525;
        }

        p{
            flex: 1 1 100%;
            text-align: left;
            color: #F2F2F2;
        }

        button{
            background-color: inherit;

            &:hover {
                img {
                    content: url("../../assert/todo/trash__hover.svg");
                }
            }
        }

        .complited{
            text-decoration: line-through;
            color: #808080;
            transition: all ease .5s;
        }
    }
</style>