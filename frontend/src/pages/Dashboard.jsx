// import { useState, useEffect } from 'react'
// import { fetchUrls, createUrl, deleteUrl } from '../services/UrlServices'
// import { FaSpinner, FaCopy, FaTrashAlt } from 'react-icons/fa'

// function Dashboard() {
//   const [urls, setUrls] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')
//   const [newUrl, setNewUrl] = useState('')
//   const [copyStatus, setCopyStatus] = useState({})

//   useEffect(() => {
//     loadUrls()
//   }, [])

//   const loadUrls = async () => {
//     try {
//       setLoading(true)
//       const data = await fetchUrls()
//       setUrls(data)
//     } catch (err) {
//       setError(err.message || 'Error loading URLs')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleCreateUrl = async (e) => {
//     e.preventDefault()
//     try {
//       setLoading(true)
//       const newUrlData = await createUrl(newUrl)
//       setUrls([newUrlData, ...urls])
//       setNewUrl('')
//     } catch (err) {
//       setError(err.message || 'Error creating shortened URL')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this URL?')) return
//     try {
//       await deleteUrl(id)
//       setUrls(urls.filter((u) => u._id !== id))
//     } catch (err) {
//       setError(err.message || 'Error deleting URL')
//     }
//   }

//   const handleCopy = async (link, id) => {
//     await navigator.clipboard.writeText(link)
//     setCopyStatus({ [id]: true })
//     setTimeout(() => setCopyStatus({ [id]: false }), 2000)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-28 px-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Hero Section */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Shorten your URLs</h1>
//           <p className="text-gray-500">
//             Paste a long URL below and get a neat, shareable short link
//           </p>
//         </div>

//         {/* URL Form */}
//         <form onSubmit={handleCreateUrl} className="flex flex-col sm:flex-row gap-3 mb-10">
//           <input
//             type="url"
//             value={newUrl}
//             onChange={(e) => setNewUrl(e.target.value)}
//             placeholder="Enter long URL to shorten"
//             className="flex-1 border border-gray-300 bg-white rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             required
//           />
//           <button
//             type="submit"
//             disabled={loading || !newUrl}
//             className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
//           >
//             {loading ? <FaSpinner className="animate-spin" /> : 'Shorten URL'}
//           </button>
//         </form>

//         {/* Error Alert */}
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
//             {error}
//           </div>
//         )}

//         {/* URL List */}
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your URLs</h2>

//         <div className="space-y-4">
//           {loading && urls.length === 0 ? (
//             <div className="flex justify-center items-center gap-2 text-gray-500">
//               <FaSpinner className="animate-spin" /> Loading your URLs...
//             </div>
//           ) : urls.length === 0 ? (
//             <p className="text-center text-gray-500 py-8">
//               No URLs yet. Create your first one!
//             </p>
//           ) : (
//             urls.map((url) => (
//               <div
//                 key={url._id}
//                 className="bg-white shadow-sm rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition"
//               >
//                 <div className="flex-1 min-w-0">
//                   <a
//                     href={url.fullShortUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 font-medium hover:underline break-all"
//                   >
//                     {url.fullShortUrl}
//                   </a>
//                   <p className="text-gray-600 truncate">{url.longUrl}</p>
//                   <p className="text-gray-400 text-sm mt-1">
//                     Created: {new Date(url.createdAt).toLocaleDateString()}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3 mt-3 sm:mt-0">
//                   <button
//                     onClick={() => handleCopy(url.fullShortUrl, url._id)}
//                     className="text-gray-500 hover:text-emerald-600 p-2 rounded-full hover:bg-gray-100 transition"
//                     title="Copy URL"
//                   >
//                     {copyStatus[url._id] ? '✓' : <FaCopy />}
//                   </button>
//                   <button
//                     onClick={() => handleDelete(url._id)}
//                     className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition"
//                     title="Delete"
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import { useState, useEffect } from 'react'
import { fetchUrls, createUrl, deleteUrl } from '../services/UrlServices'
import { FaSpinner, FaCopy, FaTrashAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'

function Dashboard() {
  const [urls, setUrls] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [copyStatus, setCopyStatus] = useState({})

  useEffect(() => {
    loadUrls()
  }, [])

  const loadUrls = async () => {
    try {
      setLoading(true)
      const data = await fetchUrls()
      setUrls(data.reverse()) // Newest first
    } catch (err) {
      setError(err.message || 'Error loading URLs')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateUrl = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const newUrlData = await createUrl(newUrl)
      setUrls([newUrlData, ...urls]) // Add to top
      setNewUrl('')
      toast.success('URL shortened successfully!')
    } catch (err) {
      setError(err.message || 'Error creating shortened URL')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this URL?')) return
    try {
      await deleteUrl(id)
      setUrls(urls.filter((u) => u._id !== id))
      toast('URL deleted', { icon: '🗑️' })
    } catch (err) {
      setError(err.message || 'Error deleting URL')
    }
  }

  const handleCopy = async (link, id) => {
    await navigator.clipboard.writeText(link)
    setCopyStatus({ [id]: true })
    toast.success('Copied to clipboard!')
    setTimeout(() => setCopyStatus({ [id]: false }), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-28 px-6">
      <Toaster position="top-right" />

      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Shorten your URLs
          </h1>
          <p className="text-gray-500 text-lg">
            Paste a long URL below and get a neat, shareable short link
          </p>
        </div>

        {/* URL Form */}
        <form
          onSubmit={handleCreateUrl}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          <input
            type="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="Enter long URL to shorten"
            className="flex-1 border border-gray-300 bg-white rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading || !newUrl}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <FaSpinner className="animate-spin" /> : 'Shorten URL'}
          </button>
        </form>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* URL List */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your URLs</h2>

        <div className="space-y-4">
          {loading && urls.length === 0 ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : urls.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No URLs yet. Create your first one!
            </p>
          ) : (
            urls.map((url) => (
              <motion.div
                key={url._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300"
              >
                <div className="flex-1 min-w-0">
                  

                      <a
                    href={url.fullShortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline break-all"
                  >
                    {url.fullShortUrl}
                  </a>

                  <p className="text-gray-600 truncate max-w-lg" title={url.longUrl}>
                    {url.longUrl}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Created: {new Date(url.createdAt).toLocaleString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                  <button
                    onClick={() => handleCopy(url.fullShortUrl, url._id)}
                    className={`p-2 rounded-full transition ${
                      copyStatus[url._id]
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100'
                    }`}
                    title="Copy URL"
                  >
                    {copyStatus[url._id] ? '✓' : <FaCopy />}
                  </button>
                  <button
                    onClick={() => handleDelete(url._id)}
                    className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard