import Grid from './Grid'
import Topbar from './Topbar'

const MainArea = () => {
  return (
    <div className="min-w-0 flex-1 overflow-hidden">
      <div className="flex h-full flex-col">
        <Topbar />
        <div className="flex-1 overflow-y-auto px-4 pb-6 sm:px-6 lg:px-8">
          <Grid />
        </div>
      </div>
    </div>
  )
}

export default MainArea