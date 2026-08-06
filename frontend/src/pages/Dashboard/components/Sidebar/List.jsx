import { FiHome, FiSettings, FiCreditCard, FiUsers } from 'react-icons/fi'

const list = ({ isCollapsed }) => {
  return (
    <div className="mt-4 space-y-2">
      <Route Icon={FiHome} selected title="Dashboard" isCollapsed={isCollapsed} />
      <Route Icon={FiUsers} title="Accounts" isCollapsed={isCollapsed} />
      <Route Icon={FiCreditCard} title="Billing" isCollapsed={isCollapsed} />
      <Route Icon={FiSettings} title="Settings" isCollapsed={isCollapsed} />
    </div>
  )
}

export default list

const Route = ({ selected, Icon, title, isCollapsed }) => {
  return (
    <button className={`flex items-center gap-3 rounded-2xl border px-3 py-3 text-sm font-medium transition ${isCollapsed ? 'justify-center' : 'w-full'} ${selected ? 'border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm' : 'border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900'}`}>
      <Icon className="h-4 w-4" />
      {!isCollapsed && <span>{title}</span>}
    </button>
  )
}