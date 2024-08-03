<template>
  <div>
      
  </div>
</template>

<script lang="ts">
import { defineComponent, setup } from 'vue';

export default defineComponent({
  setup(props) {
    const tempTest = { num: 0 };
    const test1 = ref(0);
    const test2 = reactive(tempTest);
    const test3 = shallowReactive(tempTest);

    const test11 = toRaw(test1);
    const test22 = toRaw(test2);
    const test33 = toRaw(test3);

    console.log(test11 === 0);
    console.log(test22 === tempTest);
    console.log(test33 === tempTest);

    return {
      
    };
  }
})
</script>