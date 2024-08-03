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
    title: 'triggerRef使用',
    name: 'TriggerRef',
    path: '/use/triggerRef',
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
    title: '父子props通信',
    name: 'Props',
    path: '/use/props'
  },
  {
    title: 'class使用',
    name: 'Class',
    path: '/use/class',
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
    title: 'toRaw使用',
    name: 'ToRaw',
    path: '/use/toRaw'
  },
  {
    title: 'customRef使用',
    name: 'CustomRef',
    path: '/use/customRef'
  },
  {
    title: 'component使用',
    name: 'Component',
    path: '/use/component',
  },
  {
    title: 'slot使用',
    name: 'SlotUse',
    path: '/use/slot'
  },
  {
    title: 'defineAsyncComponent使用',
    name: 'DefineAsyncComponent',
    path: '/use/defineAsyncComponent'
  },
  {
    title: 'teleport使用',
    name: 'Teleport',
    path: '/use/teleport'
  },
  {
    title: 'attributes使用',
    name: 'AttributesUse',
    path: '/use/attributes'
  },
  {
    title: 'v-model使用',
    name: 'VModel',
    path: '/use/v-model'
  },
  {
    title: 'emits使用',
    name: 'EmitUse',
    path: '/use/emits'
  },
  {
    title: 'transition使用',
    name: 'Transition',
    path: '/use/transition'
  }
];