import {
    createApp
} from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'
import './app.js'
import i18n from './utils/i18n';

axios.defaults.baseURL = 'http:localhost:8000/api/';
createApp(App).use(store).use(router).use(i18n).mount('#app')