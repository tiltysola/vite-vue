import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './global.less';

const app = createApp(App);

app.use(router);

app.mount('#root');
