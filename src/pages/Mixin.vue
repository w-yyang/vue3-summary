<template>
  <div>
    <p>混入使用</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const mixinObj = {
  created() {
    console.log('12345678');
  }
};

export default defineComponent({
  setup(props) {
    return {};
  },
  mixins: [mixinObj],
  created() {
    console.log('87654321');
  }
})
</script>