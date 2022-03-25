import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Links } from './Links'

export const Search = () => {

  const [text, setText] = useState('Elon Musk')
  const { setSearchTerm } = useResultContext()
  const [debouncedValue] =useDebounce(text, 300)

useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
}, [debouncedValue])

  return (
    <div className='searching-body'>
      <div>
      <input 
          value={text} 
          type={text} 
          className='searching-text .dark' 
          placeholder='Search gogle or type URL'
          onChange={(e) => setText(e.target.value)}
        />
          {text && (
          <button type='button' className='search-buttonX' onClick={() => setText('')}>
               X
          </button>
        )}
      </div>
        
        <Links />
    </div>
  )
}
