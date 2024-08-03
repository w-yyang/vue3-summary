<template>
  <div>
    <Inject />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue';

import Inject from './Inject.vue';

export default defineComponent({
  components: {
    Inject
  },
  setup() {
    const data = reactive({
      name: "aaaa"
    });

    provide("name", data);
  }
});
</script>