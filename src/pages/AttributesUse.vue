<template>
  <div>
    <Attributes aaa="1234567" class="1111" @click="() => console.log(1111)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Attributes from './Attributes.vue';

export default defineComponent({
  components: {
    Attributes
  },
  setup(props) {
    return {
      
    };
  }
})
</script>