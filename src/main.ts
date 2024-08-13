import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './routes/index';
import './index.css';

const piniaInstance = createPinia();

createApp(App)
  .use(router)
  .use(piniaInstance)
  .mount('#app');
