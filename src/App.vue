<template>
  <div class="app">
    <div class="black"></div>
    <div class="container">
        <FormTask @newTask = addNewTask1></FormTask>
        <ListTasks :tasks="tasks"></ListTasks>
    </div>
  </div>
</template>

<script>
import FormTask from '@/components/FormTask.vue'; 
import ListTasks from '@/components/ListTasks.vue'
  export default {
      data() {
        return {
            tasks: [

            ]
        }
      },
      methods: {
        addNewTask1(task) {
          this.tasks.push(task)
        }
      },
      components: {
        FormTask, ListTasks
      }
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

</style>
