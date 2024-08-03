<template>
  <Home />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

const Home = defineAsyncComponent(() => import('./Home.vue'));

export default defineComponent({
  components: {
    Home
  },
  setup(props) {
    return {
      
    };
  }
})
</script>