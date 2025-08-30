<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, context) {
    const {
      attrs,
      slots,
      emit,
      expose
    } = context;

    console.log('props params', attrs, slots, emit, expose);
  }
});
</script>