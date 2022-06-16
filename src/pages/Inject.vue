<template>
  <div>
    <p>{{ name.name }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const name = inject<{name: string} | undefined>("name");
    console.log(name?.name);
    const parentData = computed(() => name);

    return {
      parentData
    };
  },
})
</script>
