<template>
  <div>props使用</div>
  <input type="text" v-model="name">
  <button @click="changeObj">改变</button>
  <Props1 :title="name" :num="22" :obj="obj"/>
  <Props2 :title="name" :num="22" :obj="obj"/>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Props1 from './components/Props/Props1.vue';
import Props2 from './components/Props/Props2.vue';

export default defineComponent({
  components: {
    Props1,
    Props2
  },
  props: {
    title: String
  },
  setup() {
    const name = ref('sdafgdh');
    const obj = reactive({
      name: 'asdfgh',
      age: 11
    });

    const changeObj = () => {
      obj.name = obj.name.repeat(2);
      obj.age = obj.age + 1;
    };

    return {
      name,
      obj,
      changeObj
    };
  }
});
</script>