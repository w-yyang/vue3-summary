interface IRouteList {
  title: string;
  path: string;
  name: string;
};

export const routeList: IRouteList[] = [
  {
    title: 'ref使用',
    name: 'Ref',
    path: '/use/ref',
  },
  {
    title: 'reactive使用',
    name: 'Reactive',
    path: '/use/reactive'
  },
  {
    title: '生命周期钩子',
    name: 'LifeCycle',
    path: '/use/life-cycle'
  },
  {
    title: '计算属性',
    name: 'Computed',
    path: '/use/computed'
  },
  {
    title: '侦听器',
    name: 'Watch',
    path: '/use/watch'
  },
  {
    title: '父子provide/inject通信',
    name: 'Provide',
    path: '/use/provide'
  },
  {
    title: '父子provide/inject通信',
    name: 'Inject',
    path: '/use/inject'
  },
  {
    title: '父子props通信',
    name: 'Props',
    path: '/use/props'
  },
  {
    title: 'watchEffect使用',
    name: 'WatchEffect',
    path: '/use/watcheffect'
  },
  {
    title: 'Readonly使用',
    name: 'Readonly',
    path: '/use/readonly'
  },
  {
    title: 'isRef and isReactive',
    name: 'IsRefAndReactive',
    path: '/use/isRefAndReactive'
  },
  {
    title: 'toRaw使用',
    name: 'ToRaw',
    path: '/use/toRaw'
  },
  {
    title: 'customRef使用',
    name: 'CustomRef',
    path: '/use/customRef'
  }
];