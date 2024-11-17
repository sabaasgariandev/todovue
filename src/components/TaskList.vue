<template>
    <v-container class="bordered-item bg break-text">
      <AddTask />
      <v-progress-circular
      v-if="loading"
      indeterminate
      color="secondary"
      class="bgg"
    >Loading</v-progress-circular>
      <v-list class="bdrs">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
      </v-list>
    </v-container>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import TaskItem from './TaskItem.vue';
  import AddTask from './AddTask.vue';
  
  export default {
    components: {
      TaskItem,
      AddTask,
    },
    computed: {
    ...mapState(['tasks', 'loading']),
  },
    created() {
      this.$store.dispatch('fetchTasks');
    },
  };
  </script>
  <style>
  .bordered-item {
    border: 1px solid #000; /* Change the color and style as needed */
    border-radius: 10px; /* Optional: adds rounded corners */
    margin: 4px 0; /* Optional: adds space between items */
  }
  .bg{
    background: rgb(252,100,95);
    background: linear-gradient(234deg, rgba(252,100,95,1) 49%, rgba(250,223,94,1) 49%);
  }
  .break-text {
  word-break: break-all; /* Break words at any character */
  white-space: normal;   /* Allow text to wrap normally */
}
.bdrs{
  border-radius:0 0 8px 8px;
}
.bgg{
  background-color: white;
  width: 100%;
}
  </style>