/**
 * 1. vue3响应式数据本质
 *      在vue2中通过defineProperty来实现响应式数据的
 *      在vue3中通过Proxy来实现响应式数据
 */
let obj = {name: 'lll', age: 18};
let arr = [1,3,5];
// let state = new Proxy(obj, {
let state = new Proxy(arr, {
    get(obj, key){
        console.log(obj, key);//{name: 'lll', age: 18} name 
        return obj[key];
    },
    set(obj, key, value){
        console.log(obj, key, value);
        obj[key] = value;
        //更新ui界面
        return true;//数组追加 不加报错
    }
});

state.name = 'bbb';//{name: 'lll', age: 18} name bbb

console.log(state.name);

state.push(7);