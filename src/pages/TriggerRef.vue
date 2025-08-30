<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, shallowRef, triggerRef, watchEffect } from 'vue';

export default defineComponent({
  setup(props) {
    const shallowTest = shallowRef({ greet: 'hello' });

    watchEffect(() => {
      // 正常不会打印1111，但由于triggerRef原因会进行打印
      console.log('shallowTest.value', shallowTest.value.greet);
    });

    //正常不会触发响应式变化
    shallowTest.value.greet = '1111';

    // 强制触发响应式变换
    triggerRef(shallowTest);
  }
})
</script>