<template>
  <div>
    <span>{{ state }}</span><br>
    <span>{{ count }}</span>
    <button @click="addNum">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';

// watch需要侦听特定数据源，并在回调函数中执行副作用
// 默认情况下是惰性的，只有当被侦听的源发生变化时才执行
// 懒执行副作用；
// 更具体地说明什么状态应该触发侦听器重新运行；
// 访问侦听状态变化前后的值。
export default defineComponent({
  setup() {
    // 侦听单一源
    const state = reactive<{ count: number }>({ count: 0 });
    watch(
      () => state.count,
      (count, preCount) => {
        console.log('reactive', count, preCount);
      }
    );
    const count = ref(0);
    const addNum = () => {
      count.value++;
      state.count++;
    };
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