<template>
  <div>
    <p>{{ storeTest2.testRef }}</p>
    <p>{{ storeTest2.testReactive.id }} == {{ storeTest2.testReactive.test }}</p>
    <p>{{ storeTest2.testRefDouble }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useTestStore2 } from '../../../stores/index';

export default defineComponent({
  setup(props) {
    const storeTest2 = useTestStore2();

    return {
      storeTest2,
      handleRef: storeTest2.handleRef,
      handleReactive: storeTest2.handleReactive,
    };
  }
})
</script>