<template>
    <div>
        <p>{{age}}</p>
        <button @click="myFn">按钮</button>
        <p>{{age1}}</p>
        <ul>
            <li v-for="item in state" :key="item.id">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import {ref, customRef} from 'vue';
/**
 * 1.customRef
 *      返回一个ref对象，可以显示地控制依赖追踪和触发响应
 */
export default {
    name: 'App',
    setup(){
        // let age = ref(18);
        let age = myRef(18);
        function myFn(){
            age.value += 1;
        }
        let age1 = ref(18);
        // return {age};
        // const data =  await fetch('../public/data.json');
        // console.log(data);
        
        // let state = ref([]);
        // fetch('../public/data.json')
        //     .then((res) => {
        //         console.log(typeof(res));
        //         return res.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         state.value = data;
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        let state = myRef1('../public/data.json');
        return {age, age1, state, myFn};
    }
}

function myRef(value) {
    return customRef((track, trigger) => {
        return {
            get(){
                track();//告知vue3这个数据需要追踪变化
                console.log('get', value);
                return value;
            },
            set(newValue){
                console.log('set', newValue);
                value = newValue;
                trigger();//告知vue3触发界面更新
            }
        };
    });
}

function myRef1(value) {
    return customRef((track, trigger) => {
        fetch(value)
                    .then((res) => {
                        console.log(typeof(res));
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        value = data;
                        trigger();
                    })
                    .catch((err) => {
                        console.log(err);
                    });//可以执行
        return {
            get() {
                track();//告知vue3这个数据需要追踪变化
                // fetch('../public/data.json')
                //     .then((res) => {
                //         console.log(typeof(res));
                //         return res.json();
                //     })
                //     .then((data) => {
                //         console.log(data);
                //         value = data;
                //         trigger();
                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     });不断获取
                //不能在get方法中发送网络请求 渲染界面 -》 调用get -》发送网络请求 -》 保存数据 -》更新界面 -》调用get
                return value;
            },
            set(newValue) {
                console.log('set', newValue);
                value = newValue;
                trigger();//告知vue3出发界面更新
            }
        };
    });
}
</script>

<style scoped>

</style>