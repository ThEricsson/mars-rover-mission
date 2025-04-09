import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import StylePreset from '@/assets/ts/PrimeVueStyle'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, StylePreset)

app.mount('#app')
