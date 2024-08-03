<template>
  <div>
    <span>{{ num }}</span>
    <button @click="add">123456</button>
    <component :is="num !== 0 ? 'ref' : 'reactive'"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Ref from './Ref.vue';
import Reactive from './Reactive.vue';

export default defineComponent({
  components: {
    'ref': Ref,
    'reactive': Reactive
  },
  setup(props) {
    const num = ref(0);

    function add() {
      num.value++;
    }

    return {
      num,
      add
    };
  }
})
</script>