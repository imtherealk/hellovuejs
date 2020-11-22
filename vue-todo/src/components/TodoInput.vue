<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa fa-plus addBtn" aria-hidden="true"></i>
    </span>
    <Modal v-if="showModal">
      <h3 slot="header">
        Alert
        <i class="closeModalBtn fa fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        Type Something
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      newTodo: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo !== '') {
        const text = this.newTodo.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();
      } else {
        this.showModal = true;
      }
    },
    clearInput() {
      this.newTodo = "";
    },
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  /* width: 100%; */
}
.addContainer { 
  float: right;
  background: linear-gradient(to right, #BE93C5, #7BC6CC);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>