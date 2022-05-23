<template>
  <div>
    <p>{{count}}</p>
    <button @click="myFn">按钮</button>
    <p>{{name}}</p>
    <button @click="myFn1">按钮</button>
    <p>{{age}}</p>
    <button @click="myFn2">按钮</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
/*
    1.setup执行时机
        beforeCreate:表示组件刚刚创建出，组建的data和methods还没有初始化好
        setup
        created:组件刚刚被创建出，并且组件的data和methods已经初始化好
    2.setup注意点
        setup  中不可用data和methods 因为未创建好 生命周期
        为了避免错误使用，直接将setup函数中的this修改成undefined
        setup只能是同步的，不可异步
*/
/*
    1.Composition API和Option ApI混合使用（vue2.0）
    2.Composition API本质（组合API/注入API） 将函数 属性进行注入
    3.setup执行时机
    4.setup注意点
*/

export default defineComponent({
  setup(){
    //组合API入口函数 要想在外界访问内部变量必须暴露
    let count = ref<number>(0);
    let age = ref<number>(18);
    function myFn2(){
      alert('456');
    }
    console.log(this);
    // console.log(this.name);
    // myFn1();
    //定义count基础变量，发生改变后vue自动更新
    function myFn(){
      alert(123);
      console.log(count);
      console.log(count.value);
      count.value++;
    }
    //方法可直接定义，然后暴露
    return {
      count,
      age,
      myFn,
      myFn2
    };
  },
  data() {
    return {
      name: 'lnn',
    }
  },
  methods: {
    myFn1() {
      alert('456');
    },
  },
});
</script>