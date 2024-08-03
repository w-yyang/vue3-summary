<template>
    <div>

    </div>
</template>

<script>
import { readonly, ref, reactive } from 'vue';

export default {
  setup(){
    const count1 = ref(0);
    const count2 = reactive({ num: 0 });
    const readonCount = readonly(count1);
    const readonObj = readonly(count2);

    // 触发警告 变量只可读，不可改
    readonCount.value = 111;
    // 触发警告 变量只可读，不可改
    readonObj.num = 222;
  }
}
</script>

<style scoped>

</style>