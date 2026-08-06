import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import MainArea from './components/MainArea/MainArea.jsx'
import { fetchUrls } from '../../features/urls/urlSlice.js'
import { SidebarProvider, useSidebar } from '../../context/SidebarContext.jsx'

const DashboardContent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isCollapsed } = useSidebar()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }

    dispatch(fetchUrls())
  }, [user, navigate, dispatch])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_30%),linear-gradient(135deg,#f8fffb_0%,#f5f7fb_100%)] text-slate-900">
      <div className="flex min-h-screen items-start">
        <Sidebar />
        <div className={`min-w-0 flex-1 ${isCollapsed ? 'md:ml-20' : 'md:ml-72'}`}>
          <MainArea />
        </div>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <SidebarProvider>
      <DashboardContent />
    </SidebarProvider>
  )
}

export default Dashboard
//                       hour: '2-digit',
//                       minute: '2-digit',
//                     })}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3 mt-3 sm:mt-0">
//                   <button
//                     onClick={() => handleCopy(url.fullShortUrl, url._id)}
//                     className={`p-2 rounded-full transition ${
//                       copyStatus[url._id]
//                         ? 'bg-emerald-100 text-emerald-700'
//                         : 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100'
//                     }`}
//                     title="Copy URL"
//                   >
//                     {copyStatus[url._id] ? '✓' : <FaCopy />}
//                   </button>
//                   <button
//                     onClick={() => handleDelete(url._id)}
//                     className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition"
//                     title="Delete"
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard