import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'
import "./assets/css/common.css";
import resize from './assets/js/width'

let app = createApp(App);
app.use(resize)
app.use(router).mount('#app')
