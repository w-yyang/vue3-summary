<template>
  <div>
    <p>{{ testObj.a }}</p>
    <div>{{ testObj?.b?.c }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup(props) {
    const testObj = reactive({
      a: 0,
      b: {
        c: 10
      }
    });

    testObj.b.c = 11;

    return {
      testObj
    };
  }
})
</script>

<style scoped>

</style>