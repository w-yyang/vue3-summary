<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ num }}</p>
    <p>{{ obj.name }}--{{ obj.age }}</p>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

const props = defineProps(['title', 'name', 'obj', 'num'])
watchEffect(() => {
  console.log('title', props.title);
});
</script>