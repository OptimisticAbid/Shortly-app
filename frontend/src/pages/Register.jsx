import { useEffect, useState, useRef } from 'react'
import { FiArrowRight, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')
  
  const { name, email, password, password2 } = formData
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const hasResetRef = useRef(false)

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) =>  state.auth)

  useEffect(() => {
    console.log("register running");
    
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/dashboard')
    }

    if(!hasResetRef.current) {
      hasResetRef.current = true
      dispatch(reset())
    }
  }, [user, isError, isSuccess, message, dispatch, navigate])
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error("Passwords do not match!")
    }
    else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
    // try {
    //   await register({
    //     name,
    //     email,
    //     password
    //   })
    //   navigate('/dashboard')
    // } catch (err) {
    //   setError(err.message || "Registration failed. Please try again.")
    // } finally {
    //   setLoading(false)
    // }
  }
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_32%),linear-gradient(135deg,#f8fffb_0%,#f5f7fb_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="max-w-md text-center lg:text-left">
          <p className="mb-3 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Join Shortly</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Create your account and start sharing smarter</h2>
          <p className="mt-4 text-lg text-slate-600">Bring your links into a streamlined workspace with analytics and custom aliases.</p>
        </div>

        <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          {isError && (
            <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {message}
            </div>
          )}

          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                Full name
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiUser className="h-4 w-4 text-slate-500" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={onChange}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Alex Johnson"
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password2" className="mb-2 block text-sm font-medium text-slate-700">
                Confirm password
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiLock className="h-4 w-4 text-slate-500" />
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  required
                  value={password2}
                  onChange={onChange}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Repeat your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? 'Creating account...' : 'Create account'}
              <FiArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 border-t border-slate-200 pt-6 text-center">
            <p className="text-sm text-slate-500">Already have an account?</p>
            <Link
              to="/login"
              className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
            >
              Sign in instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
