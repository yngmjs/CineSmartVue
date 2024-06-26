import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'

const app = createApp(App)
//app.config.globalProperties.$axios = axiosInstance;
app.use(router)

app.mount('#app')
