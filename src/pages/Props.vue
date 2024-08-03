<template>
  <div>props使用</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String
  },
  setup(props) {
    const { title = '' } = props;
  }
});
</script>