import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/images', text: '📸 Images' },
    { url: '/videos', text: '📺 Videos' },
  ];

export const Links = () => {
  return (
    <div className='link-body'>
        {links.map(({ url, text }) => (
            <NavLink to={url} activeClassName='link-url .dark'>
                {text}
            </NavLink>
        ))}
    </div>
  )
}
