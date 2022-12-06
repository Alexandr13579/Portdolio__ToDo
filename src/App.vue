<template>
  <div class="app">
    <div class="black"></div>
    <div class="container">
        <FormTask @create = addNewTask></FormTask>
        <div class="list__tasks">
          <TotalTasks :tasks="tasks" :complitedTasks="complitedTasks" />
          <ListTasks  @checked="sizeComplited" @remove="removeTask" :tasks="tasks"></ListTasks>
        </div>
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
          this.localStorageSave();
          this.sizeComplited();
        },
        localStorageSave() {
            let taskss = JSON.stringify(this.tasks);
            localStorage.setItem('tasks', taskss);
        },
        sizeComplited() {
            this.complitedTasks = (this.tasks.filter(item => {return item.complited === true})).length;
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

<style lang="scss">
@import "@/assert/reset.css";

#app {
  width: 100%;
  height: 100%;
  background-color: #1A1A1A;
  font-family:Arial, Helvetica, sans-serif;
  position: relative;
}

.black{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0D0D0D;
  width: 100%;
  height: 75px;
}

.container{
  position: relative;
  z-index: 2;
  width: 50%;
  margin: auto;
  padding-top: 50px;
}

.list__tasks{
  margin-top: 60px;
}

</style>
