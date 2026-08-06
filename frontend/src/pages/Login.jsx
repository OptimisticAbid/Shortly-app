import { useEffect, useState } from 'react'
import { FiArrowRight, FiLock, FiMail } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')
  
  const { email, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isError, isLoading, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {

    if(isError) {
      toast.error(message)
        dispatch(reset())
    }

    if(isSuccess || user) {
      navigate('/dashboard')
      dispatch(reset())
    }

  }, [user,isError, isLoading, isSuccess,message])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    // Validate inputs
    if (!email || !password) {
     toast.error("Enter all fields")
    }

    else {
      const userData = {
        email,
        password
      }

      dispatch(login(userData))
    }

    // try {
    //   const response = await login({ email, password })
    //   if (response.token) {
    //     navigate("/dashboard")
    //   } else {
    //     setError('Login failed - no token received')
    //   }
    // } catch (err) {
    //   console.error('Login error:', err)
    //   setError(err.message || "Failed to login. Please check your credentials and try again.")
    // } finally {
    //   setLoading(false)
    // }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_32%),linear-gradient(135deg,#f8fffb_0%,#f5f7fb_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="max-w-md text-center lg:text-left">
          <p className="mb-3 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Welcome back</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Sign in to manage your links</h2>
          <p className="mt-4 text-lg text-slate-600">Shorten, organize, and track your URLs from one polished workspace.</p>
        </div>

        <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          {isError && (
            <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {message}
            </div>
          )}

          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiMail className="h-4 w-4 text-slate-500" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={onChange}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiLock className="h-4 w-4 text-slate-500" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={onChange}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
              <FiArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 border-t border-slate-200 pt-6 text-center">
            <p className="text-sm text-slate-500">Don&apos;t have an account?</p>
            <Link
              to="/register"
              className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
            >
              Create one now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login