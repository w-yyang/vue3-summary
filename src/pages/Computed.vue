<template>
  <div>
    <button @click="addCount">
      <span>{{ count }}</span>
      <span>{{ countDoubleStr }}</span>
      <span>{{ countStrTest }}</span>
    </button>
    <button @click="() => resetCount(0)">reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);
    const countDoubleStr = computed(() => {
      let countStr = count.value;
      return countStr + '' + countStr;
    });

    const countStrTest = computed({
      get() {
        return count.value;
      },
      set(newValue) {
        count.value = newValue;
      }
    });

    const addCount = () => {
      count.value = count.value + 1;
    };
    const resetCount = () => {
      countStrTest.value = 0;
    };

    return {
      count,
      countDoubleStr,
      countStrTest,
      addCount,
      resetCount
    };
  }
});
</script>