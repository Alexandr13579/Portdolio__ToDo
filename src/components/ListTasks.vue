<template>
    <div class="wrapper">
        <div class="totals__tasks">
            <p>Total tasks: <span :tasks.length="length">{{ tasks.length }}</span></p>
            <p>Completed: <span :tasks.length="length">{{ tasks.length }} of</span></p>
        </div>
        <ul class="list" >
            <ListTask 
            v-for="task in tasks" 
            :key="task.id" 
            :task="task"
            @remove="$emit('remove', task)">
            </ListTask>
        </ul>
    </div>
</template>

<script>
import ListTask from '@/components/ListTask.vue';

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
    },
    components: {
        ListTask
    },

}
</script>
<style lang="scss">
    .totals__tasks{
        display: flex;
        justify-content: space-between;

        p{
            color: #4EA8DE;

            span{
                margin-left: 8px;
                display: inline-block;
                padding: 2px 8px;
                background-color: #333333;
                border-radius: 50%;
                color: #D9D9D9;
            }
        }
    }
    .wrapper {
        margin-top: 60px;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 25px;
    }
    
</style>