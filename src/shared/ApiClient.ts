import axios from 'axios'
import { env } from './env'

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      window.location.href = '/login'
    }
    return Promise.reject(err)
  },
)
