<template>
  <p>{{ valStr }}</p>
  <Emit @cccc="changeVal" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Emit from './Emit.vue';

export default defineComponent({
  components: {
    Emit
  },
  setup(props, context) {
    const valStr = ref('');

    const changeVal = (val) => {
      valStr.value = val;
    };

    return {
      valStr,
      changeVal
    };
  }
})
</script>