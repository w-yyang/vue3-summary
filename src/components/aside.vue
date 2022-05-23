<template>
    <div class="app-aside">
      <ul>
        <li 
          v-for="(item, index) in routeList" 
          :key="item.name"
          @click="handleItem(index)"
          :class="index === activeItem ? 'active-item' : 'common-item'"
        >
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';

import { routeList } from '../routes/routelist';

export default defineComponent({
  components: {
    RouterLink
  },
  setup() {
    const activeItem = ref(-1);
    const handleItem = (index: number) => {
      if(index === activeItem.value) {
        return;
      }
      activeItem.value = index;
    };

    return {
      routeList,
      activeItem,
      handleItem,
    };
  },
});
</script>

<style lang="less" scoped>
  .app-aside {
    width: 240px;
    min-width: 240px;
    border-right: 1.5px solid #ddd;
    height: calc(100vh - 80px);

    ul {
      width: 100%;
      padding: 0 10px;

      li {
        list-style: none;
        height: 30px;
        text-align: center;
        width: 220px;
        line-height: 30px;

        a {
          display: block;
          text-decoration: none;
          height: 30px;
          width: 220px;
        }
      }
    }
  }

  .active-item {
    background-color: #ddd;
    border-radius: 4px;

    a {
      color: #fff;
    }
  } 

  .common-item {
    color: #000;
  }
</style>
