import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const { user: persistedUser, token: persistedToken, isAuthenticated: persistedAuth } = authService.getStoredAuth()

const initialState = {
  user: persistedUser || null,
  token: persistedToken || null,
  isAuthenticated: persistedAuth,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    authService.logout()
    return true
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload?.user || null
        state.token = action.payload?.token || null
        state.isAuthenticated = Boolean(action.payload?.token && authService.isTokenValid(action.payload.token))
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        state.token = null
        state.isAuthenticated = false
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.isAuthenticated = false
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload?.user || null
        state.token = action.payload?.token || null
        state.isAuthenticated = Boolean(action.payload?.token && authService.isTokenValid(action.payload.token))
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        state.token = null
        state.isAuthenticated = false
      })
  }
})

export const { reset } = authSlice.actions

export default authSlice.reducer