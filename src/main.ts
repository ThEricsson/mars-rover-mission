import '@/assets/css/main.css' // Tus estilos personalizados

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import StylePreset from '@/assets/ts/PrimeVueStyle'

import Button from 'primevue/button'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: StylePreset,
    options: {
      darkModeSelector: 'false',
    },
  },
})

app.component('Button', Button)

app.mount('#app')
