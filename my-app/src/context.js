import React, { useState, useContext, createContext, Children } from 'react'
import sublinks from './data'
import data from "./data"

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({page:'', links:[]})

  const toggleSidebar = ()=> {
    setSidebarOpen(!isSidebarOpen)
  }

  const openSubmenu = (text, cordinates) => {
    const page = sublinks.find((link)=>link.page === text)
    setPage(page)
    setLocation(cordinates)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return (
    <AppContext.Provider value={{
      isSubmenuOpen,
      isSidebarOpen,
      openSubmenu,
      closeSubmenu,
      toggleSidebar, 
      data, 
      location, 
      page,
      }}>
      {children}
    </AppContext.Provider>
  )

  
}



export const useGlobalContext = ()=>{
  return useContext(AppContext)
}

export { AppProvider }