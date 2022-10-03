import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from '../data'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const {  isSidebarOpen, toggleSidebar } = useGlobalContext()

  const linksList = sublinks.map((item, index) =>{
    const {links, page} = item
    return (
      <article key={index}>
        <h4>{page}</h4>
        <div className='sidebar-sublinks'>
          {links.map(({label, icon, url}, index)=>{
            return(
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </article>
    )
  }) 
  
  return (
    <aside className={`sidebar-wrapper  ${isSidebarOpen && "show"}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {linksList}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar