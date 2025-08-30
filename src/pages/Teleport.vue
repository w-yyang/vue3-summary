<template>
  <Teleport to="#test">
    <p>testContent</p>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, Teleport } from 'vue';

export default defineComponent({
  components: {
    Teleport
  },
  setup() {
    return {

    };
  }
})
</script>