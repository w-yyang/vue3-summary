<template>
  <div>
    <p @click="count++">{{ count }}</p>
    <button @click="closeWatch">stop</button>
  </div>
</template>

<script lang="ts">
// 响应式追踪依赖，初始化时也会执行,依赖变更时重新运行该函数
// 组件卸载时自动停止，一些情况下也可以显示调用返回值以停止运行

import { 
  defineComponent,
  ref,
  watchEffect
} from 'vue';

export default defineComponent({
  setup() {
    const count = ref<number>(0);
    const stop = watchEffect(() => {
      console.log(count.value);
    }, {
      // flush: 'post'
      // onTrack() {}
      // onTrigger() {}
    });
    const closeWatch = () => {
      stop();
    };
    return {
      count,
      closeWatch
    };
  }
});
</script>