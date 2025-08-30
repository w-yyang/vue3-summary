<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ num }}</p>
    <p>{{ obj.name }}--{{ obj.age }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  props: {
    title: String,
    num: Number,
    obj: {
      name: String,
      age: Number
    }
  },
  setup(props) {
    const { num, obj } = props;
    const { title } = toRefs(props);

    return {
      title,
      num,
      obj
    };
  }
});
</script>