import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.default.baseURL = 'http://192.168.0.38:8080'


createApp(App).use(store).use(router, axios).mount('#app')
