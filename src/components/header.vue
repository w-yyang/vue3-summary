<template>
    <header class="app-header">
			<img src="../assets/logo.png" alt="">
			<h2>vue3使用示例合集</h2>
		</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {

	}
});
</script>

<style lang="less" scoped>
	.app-header {
		height: 80px;
		display: grid;
		grid-template-columns: 70px 200px;
		justify-content: left;
		align-content: center;
		justify-items: center;
		align-items: center;
		border-bottom: 1px solid #ddd;

		img {
			width: 50px;
			height: 50px;
		}

		h2 {
			font-weight: 400;
			font-size: 20px;
			justify-self: left;
		}
	}
</style>