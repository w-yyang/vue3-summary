<template>
  <div>
    <p>{{ testRef }}</p>
    <button @click="() => handleAddRef()">+1 testRef</button>
    <p>{{ testReactive.id }} -- {{ testReactive.test }}</p>
    <button @click="() => handleAddReactive()">+1 testReactive</button>
    <p>{{ storeTest2.testRef }}</p>
    <button @click="handleRef()">+1 testRef2</button>
    <p>{{ storeTest2.testReactive.id }} -- {{ storeTest2.testReactive.test }}</p>
    <button @click="() => handleReactive()">+1 testReactive2</button>
    <div>
      <p>children</p>
      <TestPinia1 />
    </div>
    <TestPinia2 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs, storeToReactive } from 'pinia';
import { useTestStore1, useTestStore2 } from '../stores/index';
import TestPinia1 from './components/Pinia/PiniaTest1.vue';
import TestPinia2 from './components/Pinia/PiniaTest2.vue';

export default defineComponent({
  components: {
    TestPinia1,
    TestPinia2
  },
  setup() {
    const storeTest1 = useTestStore1();
    const storeTest2 = useTestStore2();

    // ref属性为保持响应式需要解构
    const { testRef } = storeToRefs(storeTest1);

    const { testReactive } = storeTest1;

    return {
      testRef,
      testReactive,
      handleAddRef: storeTest1.handleAddRef,
      handleAddReactive: storeTest1.handleAddReactive,
      handleRef: storeTest2.handleRef,
      handleReactive: storeTest2.handleReactive,
      storeTest2: storeTest2,
    };
  }
})
</script>