import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'


axios.default.baseURL = 'http://localhost:8080'


createApp(App).use(store).use(router, axios).mount('#app')
