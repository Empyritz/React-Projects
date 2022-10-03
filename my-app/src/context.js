import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleSidebar = () =>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  const toggleModal = () =>{
    setIsModalOpen(!isModalOpen)
  }

  return <AppContext.Provider value={{
    isModalOpen,
    isSidebarOpen,
    toggleModal,
    toggleSidebar,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext } 