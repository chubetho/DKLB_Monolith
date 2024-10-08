import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { setupRouter } from './router'

import './style.css'

const app = createApp(App)
app.use(createPinia())
setupRouter(app).then(() => app.mount('#app'))
