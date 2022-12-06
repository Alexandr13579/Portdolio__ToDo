<template>
    <div class="wrapper">
        <ul class="list" >
            <ListTask 
            v-for="task in tasks" 
            :key="task.id" 
            :task="task"
            @checked="$emit('checked', task)"
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
<style lang="scss" scoped>
    ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 25px;
    }
    
</style>