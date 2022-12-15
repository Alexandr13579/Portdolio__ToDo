<template>
    <div class="wrapper">
        <ul class="list" >
            <transition-group name="tasks">
                <ListTask 
                    v-for="task in tasks" 
                    :key="task.id" 
                    :task="task"
                    @checked="$emit('checked', task)"
                    @remove="$emit('remove', task)">
                </ListTask>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import ListTask from '@/components/ToDo/ListTask.vue';

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
        font-style: 16px;
    }
    
.tasks-move, 
.tasks-enter-active,
.tasks-leave-active {
  transition: all 0.5s ease;
}

.tasks-enter-from,
.tasks-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.tasks-leave-active {
  position: absolute;
}
</style>