import axios from "axios"

const API_URL = `${import.meta.env.VITE_API_URL}/users`

const decodeTokenPayload = (token) => {
  if (!token) return null

  const parts = token.split('.')
  if (parts.length < 2) return null

  try {
    const base64Payload = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    const paddedPayload = base64Payload.padEnd(
      base64Payload.length + ((4 - (base64Payload.length % 4)) % 4),
      '='
    )

    const decodedPayload =
      typeof window !== 'undefined'
        ? window.atob(paddedPayload)
        : Buffer.from(paddedPayload, 'base64').toString('utf8')

    return JSON.parse(decodedPayload)
  } catch {
    return null
  }
}

const isTokenValid = (token) => {
  const payload = decodeTokenPayload(token)

  if (!payload) return false

  if (payload.exp && Date.now() >= payload.exp * 1000) {
    return false
  }

  return true
}

const saveAuth = (payload) => {
  const data = payload?.data ?? payload
  const token = data?.token || payload?.token || null
  
  const normalizedUser = data?.user
    ? data.user
    : (data && typeof data === 'object' && !data.token && !data.message ? data : null)

  if (token) {
    localStorage.setItem('token', token)
  } else {
    localStorage.removeItem('token')
  }

  if (normalizedUser) {
    localStorage.setItem('user', JSON.stringify(normalizedUser))
  } else {
    localStorage.removeItem('user')
  }
  

  return { user: normalizedUser, token }
}

const getStoredAuth = () => {
  try {
    const storedUser = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    const user = storedUser ? JSON.parse(storedUser) : null

    return {
      user,
      token,
      isAuthenticated: Boolean(token && isTokenValid(token))
    }
  } catch {
    return {
      user: null,
      token: null,
      isAuthenticated: false
    }
  }
}

const clearAuth = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData)
  return saveAuth(response.data)
}

const logout = () => {
  clearAuth()
}

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData)
  return saveAuth(response.data)
}

export const authService = {
  register,
  logout,
  login,
  isTokenValid,
  getStoredAuth,
  clearAuth
}

export default authService