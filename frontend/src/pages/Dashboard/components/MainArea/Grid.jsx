import { useSelector } from 'react-redux'
import StatCards from './StatCards'
import Table from './Table'
import UrlComposer from './UrlComposer'
import ClicksGraph from '../../../../components/ClicksCountChart'

const Grid = () => {
  const { urls } = useSelector((state) => state.urls)
  const topLinks = [...urls]
    .sort((a, b) => Number(b.clickCount || 0) - Number(a.clickCount || 0))
    .slice(0, 3)

  return (
    <div className="space-y-6">
      <UrlComposer />

      <div className="grid min-w-0 gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="min-w-0 space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Your links</h2>
                <p className="mt-1 text-sm text-slate-500">Track and manage every short URL you have created.</p>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                {urls.length} active
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <Table />
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-xl font-semibold text-slate-900">Click activity</h2>
            <p className="mt-1 text-sm text-slate-500">A quick view of how your links are performing.</p>
            <div className="mt-4 h-72">
              <ClicksGraph />
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-slate-900">Top performers</h2>
              <p className="mt-1 text-sm text-slate-500">Your highest-clicked links in one glance.</p>
            </div>
            <div className="space-y-3">
              {topLinks.length > 0 ? (
                topLinks.map((link) => (
                  <div key={link.id} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{link.shortUrl}</p>
                      <p className="max-w-60 truncate text-sm text-slate-500">{link.longUrl}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                      {Number(link.clickCount || 0).toLocaleString()} clicks
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No links have registered clicks yet.</p>
              )}
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-6">
          <StatCards />
        </div>
      </div>
    </div>
  )
}

export default Grid