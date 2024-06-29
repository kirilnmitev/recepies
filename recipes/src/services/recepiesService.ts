import { apiClient } from './apiService'

export const test = () => {
  apiClient.get('/recipes/complexSearch', {
    params: { number: 10 }
  })
}
