<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="index" class="shadow">
        <i class="checkBtn fa fa-check" 
           v-bind:class="{checkBtnCompleted: todoItem.completed}" 
           v-on:click="toggleComplete(todoItem)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(item, index) {
      localStorage.removeItem(item.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(item) {
      item.completed = !item.completed
      localStorage.setItem(item.item, JSON.stringify(item))
    }
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
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  font-size: 24px
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>