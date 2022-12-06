<template>
    <div class="wrapper__todo">
        <FormTask @create = addNewTask></FormTask>
        <div class="list__tasks">
            <TotalTasks :tasks="tasks" :complitedTasks="complitedTasks" />
            <ListTasks  @checked="sizeComplited" @remove="removeTask" :tasks="tasks"></ListTasks>
        </div>
    </div>
</template>

<script>
import FormTask from '@/components/FormTask.vue'; 
import ListTasks from '@/components/ListTasks.vue';
import TotalTasks from '@/components/TotalTasks.vue';
  
export default {
    data() {
      return {
          tasks: [

          ],
          complitedTasks: 0
      }
    },
    methods: {
      addNewTask(task) {
        this.tasks.push(task)
        this.localStorageSave();
      },
      removeTask(task) {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        this.sizeComplited();
        this.localStorageSave();
      },
      localStorageSave() {
          let taskss = JSON.stringify(this.tasks);
          localStorage.setItem('tasks', taskss);
      },
      sizeComplited() {
          this.complitedTasks = (this.tasks.filter(item => {return item.complited === true})).length;
          this.localStorageSave();
      }
    },
    components: {
      FormTask, ListTasks, TotalTasks
    },
    mounted() {
      if (localStorage.getItem('tasks')) {
        try {
          this.tasks = JSON.parse(localStorage.getItem('tasks'));
          this.complitedTasks = (this.tasks.filter(item => {return item.complited === true})).length
        } catch(e) {
          localStorage.removeItem('tasks');
        }
      }
    },
}
</script>
  
<style lang="scss" scoped>
    .wrapper__todo{
        padding-top: 75px;
    }
    .list__tasks{
    margin-top: 60px;
    }

</style>
