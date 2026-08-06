import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FiLink2, FiZap } from 'react-icons/fi'
import { createShortUrl, fetchUrls } from '../../../../features/urls/urlSlice'

const UrlComposer = () => {
  const dispatch = useDispatch()
  const [longUrl, setLongUrl] = useState('')
  const [customAlias, setCustomAlias] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const trimmedUrl = longUrl.trim()
    const trimmedAlias = customAlias.trim()

    if (!trimmedUrl) {
      toast.error('Enter a long URL to shorten')
      return
    }

    if (trimmedAlias && !/^[a-zA-Z0-9_-]+$/.test(trimmedAlias)) {
      toast.error('Aliases can only contain letters, numbers, underscores, and hyphens')
      return
    }

    try {
      new URL(trimmedUrl)
    } catch {
      toast.error('Please enter a valid URL starting with http:// or https://')
      return
    }

    setIsSubmitting(true)

    try {
      await dispatch(createShortUrl({ longUrl: trimmedUrl, customAlias: trimmedAlias })).unwrap()
      toast.success(trimmedAlias ? `Custom alias ready: ${trimmedAlias}` : 'Short link created successfully')
      setLongUrl('')
      setCustomAlias('')
      dispatch(fetchUrls())
    } catch (error) {
      toast.error(typeof error === 'string' ? error : 'Unable to create a short link right now')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            <FiZap className="h-4 w-4" />
            Create a short link
          </p>
          <h2 className="text-2xl font-semibold">Turn long URLs into polished share links</h2>
          <p className="mt-2 text-sm text-slate-500">
            Paste any destination and shorten it instantly from your dashboard.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
          <FiLink2 className="h-5 w-5 text-emerald-600" />
          <input
            type="url"
            value={longUrl}
            onChange={(event) => setLongUrl(event.target.value)}
            placeholder="https://example.com/your-very-long-link"
            className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
        </label>

        <div className="flex flex-col gap-3 lg:flex-row">
          <input
            type="text"
            value={customAlias}
            onChange={(event) => setCustomAlias(event.target.value)}
            placeholder="Optional custom alias"
            className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Creating...' : 'Shorten link'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default UrlComposer
