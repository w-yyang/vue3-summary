<template>
  <div>
    <button @click="hanlerChangeShowComp">切换显示组件</button>
    <KeepAlive>
      <component :is="changeShowComp"></component>
    </KeepAlive>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, KeepAlive } from 'vue';
import KeepAlive1 from './components/KeepAlive/KeepAlive1.vue';
import KeepAlive2 from './components/KeepAlive/KeepAlive2.vue';

export default defineComponent({
  components: {
    keepAlive1: KeepAlive1,
    keepAlive2: KeepAlive2,
    KeepAlive,
  },
  setup(props) {
    const changeShowComp = ref('keepAlive1');

    const hanlerChangeShowComp = () => {
      console.log('changeName');
      console.log('changeShowComp', changeShowComp.value);
      if (changeShowComp.value === 'keepAlive1') {
        changeShowComp.value = 'keepAlive2';
      } else {
        changeShowComp.value = 'keepAlive1';
      }
    };

    return {
      changeShowComp,
      hanlerChangeShowComp
    };
  }
})
</script>