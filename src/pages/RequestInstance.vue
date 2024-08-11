<template>
  <div>
    请求返回结果
    {{ reqRef }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

import { testFetch } from '../apis/index';

export default defineComponent({
  setup() {
    const reqRef = ref('');

    onMounted(async () => {
      const backData = await testFetch();
      reqRef.value = JSON.stringify(backData);
    });

    return {
      reqRef
    }
  }
})
</script>