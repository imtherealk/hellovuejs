<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems"
              v-on:romoveTodoItem="removeOneItem"
              v-on:toggleTodoItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAllTodoItem="removeAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data: function() {
    return {
      todoItems: [],
    }
  },
  methods: {
    addOneItem: function(todoItem) {
      let obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(item, index) {
      localStorage.removeItem(item.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function(index) {
      let item = this.todoItems[index];
      item.completed = !item.completed
      localStorage.setItem(item.item, JSON.stringify(item))
    },
    removeAllItem: function() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  created: function() {
    if (localStorage.length > 0) {
      for (let i=0; i < localStorage.length; i++){
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(item);
        }
      }
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
