import React from 'react'
import { Link } from 'react-router-dom'

import { Search } from './Search'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='navbar-body .dark' >
        <div className="navbar-div .dark" style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
           <div>
           <Link to='/' style={{ textDecoration: 'none' }}>
                <p className='navbar-links'>
                    Gog <span>🔎</span>
                </p>
            </Link>
           </div>
            <div>
            <button type='button' className='toggle-btn dark' onClick={() => setDarkTheme(!darkTheme)}>
                 {darkTheme ? 'Light 💡' : 'Dark 🌙'}
            </button>
            </div>
            
        </div>
        <Search />
    </div>
  )
}
