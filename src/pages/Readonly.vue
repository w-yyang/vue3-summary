<template>
    <div>
        <p>{{state.name}}</p>
        <p>{{state.attr.age}}</p>
        <p>{{state.attr.height}}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
import {readonly, isReadonly, shallowReadonly} from 'vue';

export default {
  name: 'App',
  setup(){
    /**
     * readonly 用于创建一个只读的数据 并且是递归只读
     * shallowReadonly 用于创建只读数据 并非递归只读
     * 
     * const readonly 区别 
     * const 赋值保护 不能给变量重新赋值
     * readonly 属性保护 不能给属性重新赋值
     */
    // let state = readonly({name: 'lll', attr: {age: 18, height: 1.88}});
    let state = shallowReadonly({name: 'lll', attr: {age: 18, height: 1.88}});
    const value = {name: 'aaa', age: 123};
    function myFn(){
      value.name = 'bbb';
      value.age = 456;
      state.name = '1234';
      state.attr.height = 1888;
      console.log(isReadonly(state));
      console.log(value);//可更改
    }
    return {state, myFn};
  }
}
</script>

<style scoped>

</style>