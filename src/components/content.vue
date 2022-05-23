<template>
  <div class="ctx-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import { RouterView } from 'vue-router';

export default defineComponent({
  components: {
    RouterView,
  }
});
</script>

<style lang="less" scoped>
  .ctx-wrapper {
    margin: 0 200px;
    padding: 18px 0;
    height: calc(100vh - 80px);
    width: 100%;
    overflow: auto;
  }
</style>