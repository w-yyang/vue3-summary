<template>
  <div>
    <ul>
      <li v-for="(stu, index) in stat.stus" 
        :key="stu.id"
        @click="remStu(index)">
        {{index}} --- {{stu.name}}
      </li>
    </ul>
    <p>{{stat.time}}</p>
    <button @click="myFn()">按钮</button>
    <p>{{sss.a}}</p>
    <p>{{sss.gf.b}}</p>
    <p>{{sss.gf.f.c}}</p>
    <p>{{sss.gf.f.s.d}}</p>
    <button @click="myFn()">按钮</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { shallowReactive, shallowRef, triggerRef } from 'vue'; // 非递归监听 用法相同

/**
 * 1.reactive
 *      reactive是vue3中提供的实现响应式数据的方法
 *      在vue2中响应式数据是通过defineProperty来实现的
 *      而在vue3中响应式数据通过ES6的Proxy来实现
 * 2.reactive注意点
 *      reactive参数必须是对象（json arr）
 *      如果给reactive传递了其他对象默认情况下修改对象，界面不会自动更新，
 *      如果想更新，可以通过重新赋值的方式
 */
/**
 * 1.递归监听
 *      默认情况下，无论通过ref还是reactive都是递归监听
 * 2.递归监听问题
 *      如果数据量比较大，非常消耗性能
 * 3.非递归监听
        注意：如果通过shallowRef创建数据，那么vue监听的是.value的变化，并不是第一层的变化
        仅在数据量较大时才使用shallowRef/shallowReactive
 */

export default defineComponent({
  setup(){
    //ref->reactive
    //ref(10)->reactive({value: 10})
    //shallowRef->shallowReactive
    //shallowRef(10)->shallowReactive({value: 10})
    //shallowRef创建的数据监听的是.value
    let state1 = shallowRef();
    let sss = reactive({
      a: 'a',
      gf: {
        b: 'b',
        f: {
          c: 'c',
          s: {
            d: 'd'
          }
        }
      }
    });
    function myF(){
      // state.a = '1'; shallow 第一层不监听内部无法更新
      sss.gf.b = '2';
      sss.gf.f.c = '3';
      sss.gf.f.s.d = '4';

      //使用shallowRef
      // sss.value = {
      //     内部更改数据
      // };

      // state.value.gf.f.s.d = '1';
      //triggerRef(state);//根据更改数据主动更新界面
      //vue3仅提供triggerRef方法，无triggerReactive
      //如果数据类型是reactive，无法主动触发界面更新
    }
    //ref只能监听简单类型变化 不监听复杂类型(对象数组) 
    let {stat, remStu} = useRemoveStudent();    
    return {
      stat, 
      remStu, 
      sss, 
      myF
    };
  }
});

function useRemoveStudent(){
  let stat = reactive({
    stus: [
      {id: 1, name: 'aaa', age: 10},
      {id: 2, name: 'bbb', age: 10},
      {id: 3, name: 'ccc', age: 10}
    ]
  });
  function remStu(index: number){
    stat.stus = stat.stus.filter((_, idx) => idx !== index);
  }
  //创建响应式数据
  //本质：就是将传入的数据包装成一个proxy对象
  // let state = reactive({
  //     age: 123
  // });
  // let state = reactive([1,2,3]);
  let state = reactive({
      time: new Date()
  });//界面未更改
  // 有问题待处理
  function myFn(){
    //state = '456';//界面不会刷新 传递非对象
    // state.age = 55;
    // state[0] = 666;
    state.time.setDate(state.time.getDate() + 1);
    //修改方式 重新赋值
    const newTime = new Date(state.time.getTime());
    newTime.setDate(state.time.getDate() + 1);
    state.time = newTime;
    console.log(state);
  }
  return {
    state, 
    myFn, 
    stat, 
    remStu
  };
}

// export default {
//     name: 'App',
//     setup(){
//         //ref只能监听简单类型变化 不监听复杂类型(对象数组)
//         let state = reactive({
//             stus: [
//                 {id: 1, name: 'aaa', age: 10},
//                 {id: 2, name: 'bbb', age: 10},
//                 {id: 3, name: 'ccc', age: 10}
//             ]
//         });
//         function remStu(index){
//             state.stus = state.stus.filter((stu, idx) => idx !== index);
//         }
//         return {state, remStu};
//     }
// }
</script>