<template>
  <div>
    <span>{{ count }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(){
    let count = ref<number>(0);

    count.value++;

    return {
      count,
    };
  },
});
</script>