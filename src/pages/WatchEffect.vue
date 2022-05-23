<template>
  <div>
    <p @click="count++">{{ count }}</p>
    <button @click="closeWatch">stop</button>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent,
  ref,
  watchEffect
} from 'vue';

// 响应式追踪依赖，初始化时也会执行,依赖变更时重新运行该函数
// 组件卸载时自动停止，一些情况下也可以显示调用返回值以停止运行
export default defineComponent({
  setup() {
    const count = ref<number>(0);
    const stop = watchEffect(() => {
      console.log(count.value);
    }, {
      // 配置对象
      // 如果需要在组件更新后重新运行侦听器副作用，我们可以传递带有 flush 选项的附加 options 对象
      // 默认为 'pre'
      // flush 选项还接受 sync，这将强制效果始终同步触发
      // flush: 'post'
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