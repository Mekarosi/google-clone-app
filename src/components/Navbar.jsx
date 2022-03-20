import React from 'react'
import { Link } from 'react-router-dom'

import { Search } from './Search'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='navbar-body .dark'>
        <div className="navbar-div .dark">
            <Link to='/' >
                <p className='navbar-links'>
                    Gogle <span>🔎</span>
                </p>
            </Link>
            <button type='button' className='toggle-btn dark' onClick={() => setDarkTheme(!darkTheme)}>
                 {darkTheme ? 'Light 💡' : 'Dark 🌙'}
            </button>
        </div>
        <Search />
    </div>
  )
}
