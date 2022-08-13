<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: todo.isDone }"
      v-for="todo in filterList"
      :key="todo.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" @change="toggleTodo(todo.id)" />
        <label>{{ todo.name }}</label>
        <button class="destroy" @click="delTodo(todo.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
  computed: {
    filterList() {
      return this.$store.getters.filterList
    }
  },
  methods: {
    toggleTodo(todo) {
      this.$store.commit("TOGGLETODO", todo);
    },
    delTodo(id) {
      this.$store.commit("DELTODO", id);
    },
  },
};
</script>
