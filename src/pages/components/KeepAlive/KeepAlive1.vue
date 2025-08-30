<template>
  <div>
    <p>keepAlive1</p>
    <input type="text" @v-model="inpVal">
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    const inpVal = ref('');

    return {
      inpVal
    };
  }
});
</script>