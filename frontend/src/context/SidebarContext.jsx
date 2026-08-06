import { createContext, useState, useContext } from 'react'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setisCollapsed] = useState(false)

  return (
    <SidebarContext.Provider value={{ isCollapsed, setisCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider')
  }
  return context
}
