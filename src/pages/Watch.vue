<template>
  <div>
    <span>{{ state }}</span><br>
    <span>{{ count }}</span>
    <button @click="addNum">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    // 侦听单一源
    const state = reactive<{ count: number }>({ count: 0 });
    const count = ref(0);

    const addNum = () => {
      count.value++;
      state.count++;
    };

    watch(
      () => state.count,
      (count, preCount) => {
        debugger;
        console.log('reactive', count, preCount);
      },
      {
        // immediate: true,
        // deep: true,
        // flush: 'post',
        // onTrack() {}
        // onTrigger() {}
      }
    );
    watch(count, (count, preCount) => {
      console.log('ref', count, preCount);
    });
    watch([state.count, count], ([state, count], [preState, preCount]) => {
      console.log('多源侦听', [state, count], [preState, preCount]);
    });

    return {
      state,
      count,
      addNum
    };
  }
});
</script>