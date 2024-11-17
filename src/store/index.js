import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    tasks: [],
    loading: false, // State جدید برای لودینگ
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    setLoading(state, isLoading) {
      state.loading = isLoading; // Mutation جدید برای لودینگ
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      commit('setLoading', true);
      const response = await axios.get('https://6734c937a042ab85d11b9e03.mockapi.io/api/todos');
      commit('setTasks', response.data);
      commit('setLoading', false);
    },
    async addTask({ commit }, task) {
      commit('setLoading', true);
      const response = await axios.post('https://6734c937a042ab85d11b9e03.mockapi.io/api/todos', task);
      commit('addTask', response.data);
      commit('setLoading', false);
    },
    async editTask({ commit }, task) {
      commit('setLoading', true);
      const response = await axios.put(`https://6734c937a042ab85d11b9e03.mockapi.io/api/todos/${task.id}`, task);
      commit('updateTask', response.data);
      commit('setLoading', false);
    },
    async deleteTask({ commit }, taskId) {
      commit('setLoading', true);
      await axios.delete(`https://6734c937a042ab85d11b9e03.mockapi.io/api/todos/${taskId}`);
      commit('removeTask', taskId);
      commit('setLoading', false);
    },
  },
});

export default store;
