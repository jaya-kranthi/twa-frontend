import { create } from 'zustand'

interface AuthState {
  accessToken: string | null
  isAuthenticated: boolean
  setTokens: (access: string, refresh: string, id: string) => void
  clearTokens: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem('access_token'),
  isAuthenticated: !!localStorage.getItem('access_token'),
  setTokens: (access, refresh, id) => {
    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)
    localStorage.setItem('id_token', id)
    set({ accessToken: access, isAuthenticated: true })
  },
  clearTokens: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('id_token')
    set({ accessToken: null, isAuthenticated: false })
  },
}))
