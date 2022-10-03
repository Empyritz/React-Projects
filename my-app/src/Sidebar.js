import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'



const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext()


  const linksList = links.map(({id, url, text, icon})=> {
    return (
      <li key={id}><a href={url}>{icon} {text}</a></li>
    )
  })
  const iconsList = social.map(({id, url, icon})=>{
    return (
      <li key={id}>
        <a href={url}>{icon}</a>
      </li>
    )
  })

  return (
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='codding addict' />
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {linksList}
      </ul>
      <ul className='social-icons'>
        {iconsList}
      </ul>
    </aside>
  )
}

export default Sidebar