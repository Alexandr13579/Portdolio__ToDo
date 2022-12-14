<template lang="">
    <form class="addTask" @submit.prevent>
            <input 
            type="text" 
            placeholder="New Task" 
            v-model="task.title"
            class="input"
            />
            <button 
            @click="addNewTask"
            class="button"
            >Add &#43;</button>
        </form>
</template>

<script>
export default {
    data() {
        return {
            task: {
                title: '',
                complited: false,
            }
        }
    }, 
    methods: {
        addNewTask() {
            if (this.task.title) {
                this.task.id = Date.now();
                this.$emit('create', this.task);
                this.task = {
                    title: '',
                    id: '',
                    complited: false
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

    .input{
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
    .button{
        background: #4177a1;
        border-radius: 8px;
        font-size: 16px;
        padding: 16px;
    }
}


@media (max-width: 420px) {
      main{
        .addTask{
          gap: 4px;

          .input{
            font-size: 13px;
            padding: 8px;
          }

          .button {
            padding: 8px;
            font-size: 13px;

            content: '+';
          }
        }
      }
    }
</style>