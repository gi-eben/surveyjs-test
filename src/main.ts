import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createPinia } from 'pinia'
import { persistia } from 'persistia'
import App from './App.vue'
import './css/tailwind.css'

// survey js
import 'survey-creator-core/survey-creator-core.min.css'
import 'survey-core/defaultV2.min.css'

const app = createApp(App)

/* router */
const router = createRouter({
  history: createWebHistory()
})

app.use(router)

/* pinia */
const pinia = createPinia()
pinia.use(persistia)

app.use(pinia)

app.mount('#app')
