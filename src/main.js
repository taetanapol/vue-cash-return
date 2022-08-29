import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/tailwind.css'
import './css/style.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
