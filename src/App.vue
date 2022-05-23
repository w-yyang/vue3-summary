<template>
  <div class="app-container">
      <AppHeader />
      <div class="ctx-content">
        <AppAside />
        <AppContent />
      </div>
  </div>
</template>

<script lang="ts">
import AppHeader from './components/header.vue';
import AppAside from './components/aside.vue';
import AppContent from './components/content.vue';
import './assets/normalize.css';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
    AppAside,
  }
}
</script>

<style lang="less">
  * {
    box-sizing: border-box;
  }

  .app-container {
    width: 100%;

    .ctx-content {
      display: flex;
      flex-wrap: nowrap;
    }
  }
</style>
