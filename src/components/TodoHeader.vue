<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label>
    <input
    v-model="newTodo"
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="addTodo"
    />
  </header>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  data() {
    return {
      newTodo:''
    }
  },
  methods:{
    addTodo() {
      if(this.newTodo === '') {
        alert('任务名不能为空')
        this.newTodo = ''
        return 
      }
      const todo = {
        name:this.newTodo,
        isDone:false,
        id:nanoid()
      }
      this.$store.commit('ADDTODO',todo)
      this.newTodo = ''
    }
  },
  computed:{
    isAll: {
      get() {
        return this.$store.state.todoList.every(item => item.isDone)
      },
      set(val) {
        this.$store.state.todoList.forEach(item => item.isDone = val)
      }
      /* if(this.$store.state.todoList.every(item => item.isDone)) {
        return true
      } else {
        return false
      } */
    }
  }
}
</script>
