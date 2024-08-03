<template>
  <div>
    <SlotComp>
      <template #default>
        22222222
      </template>
      <template #h1>
        qwerwteyut
      </template>
      <template #h2>
        1111111111
      </template>
    </SlotComp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Slot from './slot.vue';

export default defineComponent({
  components: {
    SlotComp: Slot
  },
  setup(props) {
    return {
      
    };
  }
})
</script>