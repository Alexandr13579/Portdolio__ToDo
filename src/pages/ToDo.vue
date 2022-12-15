<template>
    <main>
      <div class="black"></div>
      <div class="container">
        <div class="wrapper__todo">
          <FormTask @create = addNewTask></FormTask>
          <div class="list__tasks">
              <TotalTasks :tasks="tasks" :complitedTasks="complitedTasks" />
              <ListTasks  @checked="sizeComplited" @remove="removeTask" :tasks="tasks" />
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import FormTask from '@/components/ToDo/FormTask.vue';
import ListTasks from '@/components/ToDo/ListTasks.vue';
import TotalTasks from '@/components/ToDo/TotalTasks.vue';
  
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
        this.tasks.push(task);
        this.sortTasksComplited();
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
          this.sortTasksComplited();
          this.localStorageSave();
      },
      sortTasksComplited() {
        this.tasks = this.tasks.sort((a, b) => a.complited - b.complited)
      }
    },
    components: {
      FormTask, ListTasks, TotalTasks, 
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
      padding-top: 45px;
      width: 100%;
      height: 100%;
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      z-index: 5;
    }
    .list__tasks{
    margin-top: 60px;
    width: 100%;
    }

    .black{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 75px;
      background-color: #0D0D0D;
    }

    @media (max-width: 420px) {
      main{

        .totals__tasks{
          flex-direction: column;
          gap: 8px;
        }

        .addTask{
          gap: 4px;

          .input{
            font-size: 13px;
            padding: 8px;
          }

          .button {
            padding: 8px;
          }
        }
      }
    }
</style>
