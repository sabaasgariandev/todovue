<template>
    <v-list-item class="bordered-item break-text">
      <v-list-item-content>
        <v-list-item-title>{{ task.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ formattedDate }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon @click="editTask">
          <v-icon class="e">mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="deleteTask">
          <v-icon class="del">mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </template>
  
  <script>
  import dayjs from 'dayjs';
  import jalaliday from 'jalaliday';
  
  // فعال‌سازی افزونه jalaliday
  dayjs.extend(jalaliday);
  
  export default {
    props: ['task'],
    computed: {
      formattedDate() {
        return dayjs(this.task.createdDate).calendar('jalali').locale('fa').format('YYYY/MM/DD');
      },
    },
    methods: {
      editTask() {
        const newTitle = prompt('Edit task title:', this.task.title);
        if (newTitle) {
          this.$store.dispatch('editTask', { ...this.task, title: newTitle });
        }
      },
      deleteTask() {
        this.$store.dispatch('deleteTask', this.task.id);
      },
    },
  };
  </script>
  <style>
  .bordered-item {
    border-bottom: 1px solid #000; /* Change the color and style as needed */
    border-radius: 4px; /* Optional: adds rounded corners */
    margin: 4px 0; /* Optional: adds space between items */
  }
  .break-text {
  word-break: break-all; /* Break words at any character */
  white-space: normal;   /* Allow text to wrap normally */
}
.e{
  color: #1eadb0;
}
.del{
color: rgb(252,100,95);
}
  </style>