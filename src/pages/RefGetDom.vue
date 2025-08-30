<template>
  <div>
    <input type="text" ref="domInstance">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const domInstance = ref<HTMLInputElement>(undefined);

    onMounted(() => {
      console.log('domInstance', domInstance.value);
      domInstance.value.focus();
    });

    return {
      domInstance
    };
  }
})
</script>