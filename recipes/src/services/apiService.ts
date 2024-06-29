import axios from 'axios'

const API_URL = import.meta.env.VITE_SPOONACULAR_API_URL
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_KEY
  }
})
