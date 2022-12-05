<template lang="">
    <div>
        <p>total tasks: <span :tasks.length="length">{{ tasks.length }}</span></p>

    </div>
    <ul class="list">
        <li 
        v-for="task in tasks"
        :key="task.id"
        class="list__item">
            <input type="checkbox">
            <p>{{ task.title }}</p>
            <button class="list__btn"><img src="../assert/trash.svg" alt="delete"></button>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        tasks: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="scss">
    ul {
        margin-top: 60px;
    }

    li {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 15px;
    }

    input{
        
    }

    p{
        flex-grow: 1;
    }
</style>