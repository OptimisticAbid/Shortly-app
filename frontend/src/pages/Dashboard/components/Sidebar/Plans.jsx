const Plans = ({ isCollapsed }) => {
  return (
    <div className={`flex flex-col sticky bottom-0 h-12 px-2 pt-2 pb-4 mb-2  text-xs gap-2 ${isCollapsed ? "items-center " : "border-t border-stone-400 "}`}>
        {!isCollapsed && (
          <div className="flex items-center justify-between">
              <div className="">
                  <p className="font-bold">Enterprise Plan</p>
                  <p className="text-stone-500">Pay as you go</p>
              </div>
              <button className="bg-stone-200 rounded px-2 py-1.5 font-medium hover:bg-stone-300">Support</button>
          </div>
        )}
        
    </div>
  )
}

export default Plans