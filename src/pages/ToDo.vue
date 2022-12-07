<template>
    <MyHeaderVue />
    <main>
      <div class="black"></div>
      <div class="container">
        <div class="wrapper__todo">
          <FormTask @create = addNewTask></FormTask>
          <div class="list__tasks">
              <TotalTasks :tasks="tasks" :complitedTasks="complitedTasks" />
              <ListTasks  @checked="sizeComplited" @remove="removeTask" :tasks="tasks"></ListTasks>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import FormTask from '@/components/ToDo/FormTask.vue';
import ListTasks from '@/components/ToDo/ListTasks.vue';
import TotalTasks from '@/components/ToDo/TotalTasks.vue';
import MyHeaderVue from '@/components/My-Header.vue';
  
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
      FormTask, ListTasks, TotalTasks, MyHeaderVue
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
    }
    .list__tasks{
    margin-top: 60px;
    }

    .black{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 75px;
      background-color: #0D0D0D;
    }

</style>
