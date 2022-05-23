import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue';
import { routeList } from './routelist';

const componentImport = (path: string) => () => import(`../pages/${path}.vue`);

const routeListArr = routeList.map((val) => {
  return {
    path: val.path,
    name: val.name,
    component: componentImport(val.name)
  };
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...routeListArr
];

export default createRouter({
  history: createWebHistory(),
  routes: routes
});
