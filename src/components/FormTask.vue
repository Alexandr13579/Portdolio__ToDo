<template lang="">
    <form class="addTask" @submit.prevent>
            <input type="text" placeholder="New Task" v-model="task.title">
            <button @click="addNewTask">Add &#43;</button>
        </form>
</template>

<script>
export default {
    data() {
        return {
            task: {
                title: '',
                done: false,
            }
        }
    }, 
    methods: {
        addNewTask() {
            if (this.task.title) {
                this.task.id = Date.now();
                this.$emit('newTask', this.task);
                this.task = {
                    title: '',
                    id: '',
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .addTask{
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

input{
    background-color: #262626;
    border: 1px solid #0D0D0D;
    border-radius: 8px;
    flex-grow: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #808080;
    padding: 16px;

    &:focus{
      border: 1px solid #9747FF;
    }
}

button{
  background: #1E6F9F;
  border-radius: 8px;
  padding: 16px;
}
</style>