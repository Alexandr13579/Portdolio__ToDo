<template lang="">
    <form class="addTask" @submit.prevent>
            <input 
            type="text" 
            placeholder="New Task" 
            v-model="task.title"
            class="input"
            />
            <my-btnSearhPush 
            @click="addNewTask"
            class="btnAdd"
            >Add &#43;</my-btnSearhPush>
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

    @media (max-width: 420px) {
        gap: 4px;
        flex-direction: column;
        .btnAdd {
            padding: 10px;
            align-self: flex-end;
        }
    }
}

</style>