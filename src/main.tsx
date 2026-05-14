import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { env } from '@/shared/env'
import App from './App'
import '@/styles/globals.css'

async function enableMocking() {
  if (!env.useMock) return
  const { worker } = await import('./mocks/browser')
  return worker.start({ onUnhandledRequest: 'bypass' })
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30_000, retry: 1 },
  },
})

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  )
})
