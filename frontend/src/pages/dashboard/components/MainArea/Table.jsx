import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiCopy, FiExternalLink, FiTrash2 } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { deleteUrl, fetchUrls } from '../../../../features/urls/urlSlice'

const Table = () => {
  const API_URL = import.meta.env.VITE_API_URL 
  const APP_URL = import.meta.env.VITE_APP_URL 
  const { urls } = useSelector((state) => state.urls)
  const dispatch = useDispatch()
  const [expandedRow, setExpandedRow] = useState(null)

  useEffect(() => {
    const ws = new WebSocket(`${API_URL.replace('http', 'ws')}/ws`)

    ws.onmessage = (event) => {
      const data = JSON.parse(event?.data)
      if (data.type === 'clickUpdated') {
        dispatch(fetchUrls())
      }
    }

    return () => {
      ws.close()
    }
  }, [dispatch])

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteUrl(id)).unwrap()
      toast.success('Link removed')
    } catch (error) {
      toast.error(typeof error === 'string' ? error : 'Unable to remove link')
    }
  }

  const handleCopy = async (shortUrl) => {
    try {
      const fullUrl = `${APP_URL}/${shortUrl}`
      await navigator.clipboard.writeText(fullUrl)
      toast.success('Short link copied')
    } catch {
      toast.error('Clipboard access is unavailable')
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200 bg-white text-sm">
        <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.2em] text-slate-500">
          <tr>
            <th className="px-4 py-3">Short link</th>
            <th className="px-4 py-3">Destination</th>
            <th className="px-4 py-3">Clicks</th>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {urls.map((link) => (
            <tr key={link.id} className="bg-white text-slate-700">
              <td className="px-4 py-3">
                <div className="flex flex-col gap-1">
                  <a href={`${APP_URL}/${link.shortUrl}`} target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 hover:underline">
                    {link.shortUrl}
                  </a>
                  <button onClick={() => handleCopy(link.shortUrl)} className="inline-flex w-fit items-center gap-2 text-xs text-slate-500 transition hover:text-slate-900">
                    <FiCopy className="h-3.5 w-3.5" /> Copy
                  </button>
                </div>
              </td>
              <td className="px-4 py-3">
                <div
                  className={`max-w-xs cursor-pointer ${expandedRow === link.id ? 'break-all' : 'truncate'}`}
                  onClick={() => setExpandedRow((prev) => (prev === link.id ? null : link.id))}
                >
                  {link.longUrl}
                </div>
              </td>
              <td className="px-4 py-3 font-medium text-slate-900">{link.clickCount || 0}</td>
              <td className="px-4 py-3 text-slate-500">{link.createdAt ? link.createdAt.slice(0, 10) : '—'}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <a href={`${APP_URL}/${link.shortUrl}`} target="_blank" rel="noreferrer" className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                  <button onClick={() => handleDelete(link.id)} className="rounded-full p-2 text-slate-500 transition hover:bg-rose-50 hover:text-rose-600">
                    <FiTrash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table