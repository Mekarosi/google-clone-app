import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import  Loading   from './Loading'    

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } =  useResultContext()
    const location = useLocation()

    useEffect(() => {
        getResults('/search/q=JavaScript Mastery&num=40')
    }, [])

    if(isLoading) return <Loading />

    console.log(location.pathname)
    
    switch (location.pathname) {
        case '/search':
            return (
                <div className='search-body'>
                    {results.results && results.results.map(({ link, title }, index) => (
                        <div key={index} className='search-div'>
                            <a href={link} target='_blank' rel="noopener noreferrer">
                                <p className='search-link'>
                                    {link.length > 30 ? link.substring(0,30) : link}
                                </p>
                                <p className='search-title .dark'>
                                    {title}
                                </p>
                            </a>
                        </div>
                     ))}

                     {/* {results?.results?.map(({ link, title }, index) => (
                        <div key={index} className='search-div'>
                            <a href={link} target='_blank' rel="noopener noreferrer">
                                <p className='search-link'>
                                    {link.length > 30 ? link.substring(0,30) : link}
                                </p>
                                <p className='search-title .dark'>
                                    {title}
                                </p>
                            </a>
                        </div>
                     ))}  */}
                </div>
            );
            
        case '/images':
            return 'IMAGES'; 

        case '/news':
            return 'NEWS';
            
        case '/videos':
            return 'VIDEOS';
                      
        default:
            return 'ERROR';
    }
  
}
