<template>
	<div>
		<p>{{age}}</p>
		<button @click="myFn">按钮</button>
	</div>
</template>

<script>
/**
 * customRef: 创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。
 */
import {ref, customRef} from 'vue';

function myRef(value) {
	return customRef((track, trigger) => {
		return {
			get(){
				track(); // 告知vue3这个数据需要追踪变化
				console.log('get', value);
				return value;
			},
			set(newValue){
				console.log('set', newValue);
				value = newValue;
				trigger(); // 告知vue3触发界面更新
			}
		};
	});
}

export default {
	setup(){
		let age = myRef(18);

		function myFn(){
			age.value += 1;
		}

		return {age, myFn};
	}
}
</script>

<style scoped>

</style>