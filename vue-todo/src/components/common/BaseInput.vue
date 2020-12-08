<template>
  <input v-bind:value="value" 
         v-on:input="updateInput"
         @keypress.enter.prevent="enterInput">
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value);
    },
    enterInput() {
        this.$emit('enter')
    }
  }
}
</script>