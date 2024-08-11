import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
import { IRouteList, routeList } from './routelist';

/* @vite-ignore */
const componentImport = (path: string, parentDir?: string) => () => import(parentDir ? `../pages/components/${parentDir}/${path}.vue` : `../pages/${path}.vue`);

const routeListArr = routeList.map((val) => {
  const importRouteComp = (valItem: IRouteList, parentDir?: string): RouteRecordRaw[] => {
    let valRouter;
    if (!valItem.children) {
      valRouter = {
        ...valItem,
        // @ts-ignore
        component: componentImport(valItem.name, parentDir)
      }
    } else {
      valRouter = {
        ...valItem,
        component: componentImport(valItem.name, parentDir),
        children: valItem.children.map(vItem => importRouteComp(vItem, valItem.name))
      }
    }
    return valRouter;
  };
  return importRouteComp(val);
});

console.log('routeListArr', routeListArr);

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
  // @ts-ignores
  routes: routes
});
