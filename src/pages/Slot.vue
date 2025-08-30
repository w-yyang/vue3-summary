<template>
  <div>
    <p>
      <slot></slot>
    </p>
    <h1>
      <slot name="h1"></slot>
    </h1>
    <h2>
      <slot name="h2"></slot>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    
  }
})
</script>