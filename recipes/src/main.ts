import { createApp } from 'vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@/styles/main.scss'

import App from '@/App.vue'
import router from '@/router'

const myApp = createApp(App)

myApp.use(router)
myApp.use(Quasar, {
  plugins: {}
})

myApp.mount('#app')
