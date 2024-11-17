<template>
  
  <v-text-field
    v-model="newTaskTitle"
    label="Add new task"
    @keyup.enter="addTask"
    class="back custom-append-icon borderr custom-text-field"
  >
    <template v-slot:append>
      <v-icon
        @click="addTask"
        class="custom-icon"
      >
        mdi-plus
      </v-icon>
    </template>
  </v-text-field>
  <v-progress-circular
      v-if="loading"
      indeterminate
      color="secondary"
      class="bgg"
    >Loading</v-progress-circular>

</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      newTaskTitle: '',
    };
  },
  computed: {
    ...mapState(['loading']),
  },
  methods: {
    addTask() {
      if (this.newTaskTitle.trim()) {
        this.$store.dispatch('addTask', { title: this.newTaskTitle });
        this.newTaskTitle = '';
      }
    },
  },
};
</script>

<style>
.back {
  background: white;
  border-radius: 8px 8px 0 0;
}

.custom-icon {
  background-color: red; /* Set the background color to red */
  color: white;          /* Set the icon color to white */
  border-radius: 5px;    /* Optional: makes the background circular */
  width: 50px;           /* Set width */
  height: 50px;          /* Set height */
  display: flex;         /* Use flex to center the icon */
  align-items: center;   /* Center vertically */
  justify-content: center; /* Center horizontally */
  cursor: pointer;       /* Change cursor to pointer on hover */
  border: 2px solid black; /* Optional: adds a border */
}

.custom-text-field .v-input__control {
  border: 1px solid black;      /* Set the border */
  border-radius: 10px;          /* Make the corners rounded */
  padding: 0;                /* Remove default border */
}
.custom-text-field .v-input__slot {
  padding: 10px;                   /* Remove padding for the input */
}
.bgg{
  background-color: white;
}
</style>