<template>
  <v-app class="break-text wholeBg">
    <v-container>
      <TaskList  />
    </v-container>
  </v-app>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    TaskList,
  },
};
</script>

<style>
.break-text {
  word-break: break-all; /* Break words at any character */
  white-space: normal;   /* Allow text to wrap normally */
}
.wholeBg{
  background: rgb(177,235,254);
background: linear-gradient(234deg, rgba(177,235,254,1) 33%, rgba(168,233,254,1) 63%, rgba(254,254,254,1) 92%);
}

</style>
