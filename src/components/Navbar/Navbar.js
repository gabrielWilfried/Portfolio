import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa6";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <Link to="#" className='menu-bar'>
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
            <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </Link>
            </li>
            {SidebarData.map((item, index) =>{
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
