import { createApp } from 'vue'
import { Notify, Quasar } from 'quasar'

import quasarIconSet from 'quasar/icon-set/svg-material-icons'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@/styles/main.scss'

import App from '@/App.vue'
import router from '@/router'

const myApp = createApp(App)

myApp.use(router)
myApp.use(Quasar, { iconSet: quasarIconSet, plugins: { Notify } })

myApp.mount('#app')
