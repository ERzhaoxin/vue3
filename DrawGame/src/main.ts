import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import "./assets/css/common.css";
import resize from './assets/js/width';

let app = createApp(App);
app.use(resize);
app.use(ElementPlus);
app.use(router).mount('#app');
