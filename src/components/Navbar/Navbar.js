import React from 'react'
import * as FaIcons from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="#" className='menu-bar'>
            <FaIcons.FaBars />
        </Link>
      </div>
    </>
  )
}

export default Navbar
