<template>
  <div>
    <p>vue-router-test-set</p>
    <div>
      <router-link v-for="item in routerTestList" :key="item.path" :to="item.path">{{ item.title }}</router-link>
    </div>
    <div>
      <p>按钮导航式path跳转</p>
      <button v-for="item in routerTestList" :key="`${item.path}_router_btn`" @click="() => handleJumpUrl(item.path)">
        {{ item.title }}
      </button>
    </div>
    <div>
      <p>按钮导航式name跳转</p>
      <button v-for="item in routerTestList" :key="`${item.path}_router_btn_name`" @click="() => handleJumpUrlName(item.name)">
        {{ item.title }}
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router';

export default defineComponent({
  components: {
    RouterView,
    RouterLink
  },
  setup() {
    // 路由实例，可用来动态路由
    const routerInstance = useRouter();
    // 当前路由信息实例 可获取路由参数
    const routeInstance = useRoute();

    const routerTestList = [
      {
        path: '/use/vuerouter/test1',
        title: 'test1',
        name: 'VueRouterTest1'
      },
      {
        path: '/use/vuerouter/test2',
        title: 'test2',
        name: 'VueRouterTest2'
      },
      {
        path: '/use/vuerouter/test3',
        title: 'test3',
        name: 'VueRouterTest3'
      },
    ];

    console.log('router route', routerInstance, routeInstance);

    const handleJumpUrl = (routePath) => {
      const randomNum = Math.random().toFixed(1) * 10;
      routerInstance.push({
        path: routePath,
        query: {
          rIdQ: randomNum,
        },
      });
    };
    const handleJumpUrlName = (routeName) => {
      const randomNum = Math.random().toFixed(1) * 10;
      routerInstance.push({
        name: routeName,
        params: {
          rIdP: randomNum,
        },
      });
    };

    watch(routeInstance, (newVal) => {
      console.log('route changed', newVal.query, newVal.params);
    });

    return {
      routerTestList,
      handleJumpUrl,
      handleJumpUrlName
    };
  }
})
</script>