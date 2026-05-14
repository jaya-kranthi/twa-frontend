import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth.store'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<div>Login page (coming soon)</div>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div>Dashboard (coming soon)</div>
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
