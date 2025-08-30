<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // inheritAttrs: false,
  setup(props, { attrs }) {
    console.log(attrs?.class);
    console.log(attrs?.onClick);

    return {

    };
  }
})
</script>