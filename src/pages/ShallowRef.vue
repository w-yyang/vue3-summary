<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props) {
    const test1 = shallowRef({ count: 0 })
    
    //该层赋值不会触发更改
    test1.value.count = 1;
    // 该层赋值会触发更改
    test1.value = {};

    return {};
  }
})
</script>