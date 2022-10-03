import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  },[showLinks])

  const linksList = links.map(({id, url, text})=>{
    return (
      <li key={id}>
        <a href={url}>{text}</a>
      </li>
    )
  })
  const socialIconsList = social.map(({id, url, icon})=>{
    return (
      <li key={id}>
        <a href={url}>
          {icon}
        </a>
      </li>
    )
  })
  console.log(linksList)
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="logo" />
          <button className='nav-toggle' onClick={() => setShowLinks((prev) => !prev)}>
            <FaBars />
          </button>
        </div>
        <div className={`links-container`} ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
          {linksList}
          </ul>
        </div>
          <ul className='social-icons'>
           {socialIconsList}
          </ul>
      </div>
    </nav>
  )
}

export default Navbar