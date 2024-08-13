<template>
  <div>
    <p>{{ testRef }}</p>
    <button @click="() => handleAddRef()">+1 testRef</button>
    <p>{{ testReactive.id }} -- {{ testReactive.test }}</p>
    <button @click="() => handleAddReactive()">+1 testReactive</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs, storeToReactive } from 'pinia';
import { useTestStore1 } from '../../../stores/index';

export default defineComponent({
  setup() {
    const storeTest1 = useTestStore1();
    const { testRef } = storeToRefs(storeTest1);

    const { testReactive } = storeTest1;

    return {
      testRef,
      testReactive,
      handleAddRef: storeTest1.handleAddRef,
      handleAddReactive: storeTest1.handleAddReactive
    };
  }
})
</script>