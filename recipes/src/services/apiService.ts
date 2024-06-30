import { i18n } from '@/i18n'
import { mdiAlertCircleOutline } from '@quasar/extras/mdi-v7'
import axios from 'axios'
import { Notify } from 'quasar'

const API_URL = import.meta.env.VITE_SPOONACULAR_API_URL
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_KEY
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      Notify.create({
        color: 'negative',
        position: 'top-right',
        icon: mdiAlertCircleOutline,
        iconSize: '3rem',
        timeout: 3500,
        message: i18n.global.t('error')
      })
    }
  }
)
