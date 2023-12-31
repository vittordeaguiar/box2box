// imports CSS
import './assets/css/global.css';
import './assets/css/tailwind.css';
import './utils/axiosConfig';

import { createApp } from 'vue';
import App from './App.vue';
import plugin from 'vue-toastify';
import 'vue-toastify/index.css';

const app = createApp(App);

import router from './router';
// import store from './stores/index';

// app.use(store);
app.use(router);
app.use(plugin, {});
app.mount('#app');
