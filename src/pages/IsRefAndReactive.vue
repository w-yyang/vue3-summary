<template>
    <div>
        <!-- ref 和 reactive 区别
            如果template里使用的是ref类型的数据，那么vue会自动帮助添加.value
            如果template里使用的是reactive类型的数据，那么vue不会自动帮助添加.value
            
            vue是如何决定是否需要添加.value
            解析之前自动判断这个数据是否有ref类型的，如果是就自动添加.value

            vue如何判断当前数据是否为ref类型的
            通过当前数据的__v_ref来判断
            如果有这个私有的属性，并且取值为true，就代表是一个ref类型的数据
         -->
        <p>{{age}}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
import {reactive, ref, isRef, isReactive} from 'vue';
/**
 * 1.ref
 *      和reactive一样，也是用来实现响应式数据的方法
 *      由于reactive必须穿对象，如果只想给某个变量实现响应式非常麻烦，vue3提供ref
 * 2.ref本质
 *      底层还是reactive
 *      系统会自动根据给ref传入的值将它转换为ref(xx) -> reactive({value: xx})
 * 3.ref注意点：
 *      在vue中使用ref的值不用通过value获取
 *      在js中使用ref的值必须通过value获取
 */
export default {
    name: 'App',
    setup(){
        let age = ref(22);
        // let age = reactive({value: 16});
        function myFn(){
            console.log(isRef(age));
            console.log(isReactive(age));
            //age = 44;//未更改   转换为reactive
            age.value = 44;   //template中添加不用.value
            console.log(age);
        }
        return {age, myFn};
    }
}
</script>

<style scoped>

</style>