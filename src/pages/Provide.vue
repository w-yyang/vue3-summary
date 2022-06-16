<template>
  
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue';

export default defineComponent({
  setup() {
    const data = reactive({
      name: "aaaa"
    });
    provide("name", data);
  }
});
</script>