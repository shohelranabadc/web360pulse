import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div>
      {/* Logo */}
      <div>Logo</div>

      {/* Desktop Menu */}
      <div>
        <nav>
          <ul className='flex justify-center items-center space-x-4 gap-4'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>

      {/*  */}
    </div>
  )
}

export default Header