<template>
  <div ref="box">example</div>
</template>

<script lang="ts">
import { 
  defineComponent, 
  ref, 
  onBeforeMount,
  onMounted, 
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated
} from 'vue';

export default defineComponent({
  setup() {
    let box = ref(null);
    console.log(box.value);
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log(box.value);
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });
    return {box};
  }
});
/**
 * 1.获取元素
 *      在vue2.0中可以通过给元素添加ref='xxx' 然后再在代码中通过
 *      refs.xxx的方式来获取元素 
 *      在vue3.0中也可以通过ref来获取元素
 */
</script>