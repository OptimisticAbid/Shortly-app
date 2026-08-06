import { FiSidebar } from 'react-icons/fi'
import logo from '../assets/logo.svg'
import logoImg from '../assets/logoImg.jpeg'
import { useSidebar } from '../context/SidebarContext.jsx'

const BrandImage = () => {
  const { isCollapsed, setisCollapsed } = useSidebar()

  return (
    <div className={`mb-4 ${isCollapsed ? 'flex justify-center' : 'px-1'}`}>
      {isCollapsed ? (
        <button className="cursor-pointer rounded-2xl border border-slate-200 p-2 transition hover:bg-slate-100" onClick={() => setisCollapsed(!isCollapsed)}>
          <img src={logoImg} alt="Shortly" className="h-8 w-8 rounded-xl object-cover" />
        </button>
      ) : (
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Shortly" className="h-8 w-8 object-contain" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Shortly</p>
              <p className="text-xs text-slate-500">Link workspace</p>
            </div>
          </div>

          <button className="rounded-2xl p-2 transition hover:bg-white" onClick={() => setisCollapsed(!isCollapsed)}>
            <FiSidebar className="h-4 w-4 text-slate-600" />
          </button>
        </div>
      )}
    </div>
  )
}

export default BrandImage