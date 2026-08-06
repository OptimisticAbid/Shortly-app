import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import authService from '../features/auth/authService'

const ProtectedRoutes = ({ children }) => {
  const location = useLocation()
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.auth.user)

  const activeToken = token || user?.token || localStorage.getItem('token')
  const isAuthenticated = Boolean(activeToken && authService.isTokenValid(activeToken))

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoutes