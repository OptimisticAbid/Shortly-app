import AccountsToggle from './AccountsToggle'
import List from './List'
import Plans from './Plans'
import Search from './Search'
import { useSidebar } from '../../../../context/SidebarContext.jsx'
import BrandImage from '../../../../components/BrandImage.jsx'

const Sidebar = () => {
  const { isCollapsed } = useSidebar()

  return (
    <aside className={`hidden shrink-0 border-r border-slate-200 bg-white/80 p-3 backdrop-blur transition-all duration-200 md:fixed md:top-0 md:left-0 md:h-screen md:flex md:flex-col ${isCollapsed ? 'w-20' : 'w-72'}`}>
      <div className="flex-1 overflow-y-auto rounded-3xl p-2">
        <BrandImage />
        {!isCollapsed && <Search />}
        <List isCollapsed={isCollapsed} />
      </div>

      <div className="mt-4 space-y-3">
        <AccountsToggle isCollapsed={isCollapsed} />
        {!isCollapsed && <Plans isCollapsed={isCollapsed} />}
      </div>
    </aside>
  )
}

export default Sidebar