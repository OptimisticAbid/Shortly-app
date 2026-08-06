import logo from '../assets/logo.svg'
import { HashLink } from 'react-router-hash-link'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Shortly logo" className="h-9 w-9" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Shortly</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <HashLink smooth to="/#features" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Features</HashLink>
          <HashLink smooth to="/#pricing" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Pricing</HashLink>
          <HashLink smooth to="/#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Contact</HashLink>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <button onClick={onLogout} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700">
              Log out
            </button>
          ) : (
            <>
              <Link to="/login" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700">
                Sign in
              </Link>
              <Link to="/register" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
