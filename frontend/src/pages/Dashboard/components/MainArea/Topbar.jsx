import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiLogOut, FiSearch } from 'react-icons/fi'
import { logout, reset } from '../../../../features/auth/authSlice'
import { useSidebar } from '../../../../context/SidebarContext.jsx'
import { CommandMenu } from '../Sidebar/CommandMenu.jsx'

const TopBar = () => {
  const { isCollapsed } = useSidebar()
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div className="border-b mb-4 border-slate-200 bg-white/70 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-600">Dashboard overview</p>
          <h1 className="text-2xl font-semibold text-slate-900">Welcome back, {user?.name? user.name.charAt(0).toUpperCase() + user.name.slice(1)
          : 'there'} 👋</h1>
          <p className="mt-1 text-sm text-slate-500">Keep your link campaigns organized and your click data visible.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsCommandOpen(true)}
            className={`${isCollapsed ? 'inline-flex' : 'hidden'} items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 transition hover:border-emerald-300 hover:text-emerald-700`}
          >
            <FiSearch className="mr-2 h-4 w-4" />
            Quick search
          </button>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-rose-300 hover:text-rose-600"
          >
            <FiLogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>
      <CommandMenu open={isCommandOpen} setOpen={setIsCommandOpen} />
    </div>
  )
}

export default TopBar