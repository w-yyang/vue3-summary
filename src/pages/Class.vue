<template>
  <div>
    <p :class="{ test1: true }">111</p>
    <p class="test2">222</p>
    <p :class="[cRef ? 'test1' : true, 'test3']">333</p>
    <p :style="{ 'background-color': cRef ? 'red' : 'green' }">444</p>
    <p :style="[styleObj]">555</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  setup(props) {
    const cRef = ref(0);
    const styleObj = reactive({
      color: 'pink'
    });

    return {
      cRef,
      styleObj
    };
  }
})
</script>

<style scoped>
.test1 {
  color: red;
}

.test2 {
  color: blue;
}

.test3 {
  color: green;
}
</style>