<template>
  <div>
    <input type="text" v-model="inpInstance.valueStr">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useInputWatch } from './CustomHooks';

export default defineComponent({
  setup() {
    const { inpInstance } = useInputWatch();

    return {
      inpInstance
    };
  }
})
</script>