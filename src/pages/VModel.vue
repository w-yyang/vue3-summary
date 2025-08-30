<template>
  <input type="text" v-model="inpRef">
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const inpRef = ref('');

    watch(() => {
      console.log('v-model value', inpRef.value);
    }, {
      immediate: true
    })

    return {
      inpRef
    };
  }
})
</script>