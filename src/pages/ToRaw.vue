<template>
    <div>
        <p>{{state}}</p>
        <button @click="myFn">按钮</button>
    </div>    
</template>

<script>
import {reactive, toRaw, ref} from 'vue';
/**
 * 1.toRaw
 *      从reactive或ref中得到原始数据
 * 2.toRaw作用
 *      做一些不想被监听的事情（提升性能）
 */
export default {
    name: 'App',
    setup(){
        /*
            注意：
                如果想要通过toRaw拿到ref类型的原始数据（创建时传入数据数据）
                就必须明确告诉toRaw方法，要获取的是.value的值，
                因为经过vue处理后，.value中保存的才是当初创建时传入的原始数据
        */
        /**
         * ref/reactive数据修改特点
         *   每次修改都被追踪，更新ui界面，非常消耗性能
         *   可以通过toRaw方法拿到原始数据，对原始数据进行修改，不会被追踪，不会更新ui
         */
        let obj0 = {name: 'lll', age: 11};
        let state0 = ref(obj0);
        // let obj2 = toRaw(state);
        let obj3 = toRaw(state0.value);
        console.log(obj0);
        console.log(state0);
        console.log(obj3);
        let obj = {name: 'lll', age: 11};
        let state = reactive(obj);
        let obj2 = toRaw(state);
        console.log(obj === obj2);//true
        // console.log(state === obj);/false
        //state和obj为引用关系，state的本质为Proxy对象，在这个Proxy对象中引用了obj
        //修改obj影响state    界面不更新 无法触发界面更新 只有通过state修改才更新
        function myFn(){
            // obj.name = 'zzz';
            // console.log(obj);
            obj2.name = 'zzz';
            console.log(obj2);
            // state.name = 'zzz';
            console.log(state);
        }
        return {state, myFn};
    }
}
</script>

<style scoped>

</style>