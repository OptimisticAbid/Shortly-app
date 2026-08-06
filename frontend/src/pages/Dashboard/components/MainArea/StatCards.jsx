import { useSelector } from 'react-redux'
import { FiBarChart2, FiClock, FiLink2, FiTrendingUp, FiZap } from 'react-icons/fi'

const StatCards = () => {
  const { urls } = useSelector((state) => state.urls)

  const totalClicks = urls.reduce((total, link) => total + Number(link.clickCount || 0), 0)
  const activeLinks = urls.length
  const averageClicks = activeLinks ? Math.round(totalClicks / activeLinks) : 0
  const recentLink = urls.reduce((recent, link) => {
    if (!link.createdAt) return recent
    if (!recent || new Date(link.createdAt) > new Date(recent.createdAt)) return link
    return recent
  }, null)
  const topPerformer = urls.reduce((best, link) => {
    if (!best || Number(link.clickCount || 0) > Number(best.clickCount || 0)) {
      return link
    }
    return best
  }, null)
  const customAliasCount = urls.filter((link) => link.shortUrl && link.shortUrl.length <= 12).length

  return (
    <div className="min-w-0 space-y-4">
      <Card title="Total clicks" value={totalClicks.toLocaleString()} icon={FiBarChart2} accent="from-emerald-500 to-emerald-600" />
      <Card title="Average clicks" value={averageClicks.toString()} icon={FiClock} accent="from-slate-500 to-slate-600" />
      <Card title="Active links" value={activeLinks.toString()} icon={FiLink2} accent="from-slate-700 to-slate-800" />
      <Card title="Custom aliases" value={customAliasCount.toString()} icon={FiZap} accent="from-sky-500 to-cyan-600" />
      <Card
        title="Top performer"
        value={topPerformer ? topPerformer.shortUrl : 'No links yet'}
        icon={FiTrendingUp}
        accent="from-violet-500 to-fuchsia-600"
      />
      <Card
        title="Latest link"
        value={recentLink ? recentLink.shortUrl : 'No links yet'}
        icon={FiTrendingUp}
        accent="from-amber-500 to-orange-600"
      />
    </div>
  )
}

export default StatCards

const Card = ({ title, value, icon: Icon, accent }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`inline-flex rounded-2xl bg-linear-to-br ${accent} p-3 text-white`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  )
}