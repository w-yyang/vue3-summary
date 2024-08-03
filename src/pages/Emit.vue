<template>
  <button @click="changeStr">asdfgh</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['cccc'],
  setup(props, context) {
    const { emit } = context;
    const changeStr = () => {
      emit('cccc', '111111')
    };

    return {
      changeStr
    };
  }
})
</script>