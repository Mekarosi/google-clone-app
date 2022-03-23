import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import  Loading   from './Loading'    

export const Results = () => {
    const { results: { results, image_results, entries: news }, isLoading, getResults, searchTerm } =  useResultContext()
    const location = useLocation()

    useEffect(() => {
        if (searchTerm !== '') {
          if (location.pathname === '/videos') {
            getResults(`/search/q=${searchTerm} videos`);
          } else {
            getResults(`${location.pathname}/q=${searchTerm}&num=40`);
          }
        }
      }, [searchTerm, location.pathname]);

    if(isLoading) return <Loading />

    console.log(location.pathname)
    console.log(news)
    switch (location.pathname) {
        case '/search':
            return (
                <div className='search-body'>
                    {results && results.map(({ link, title }, index) => (
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
                </div>
            );
            
        case '/images':
            return (
                <div className='image-body'>
  
                    {(results  && image_results) && image_results.map(({ image, link: { href, title }}, index) => (
                            
                            <a className='image-link' href={href} key={index} target='_blank' rel="noopener noreferrer">
                                <img src={image.src} alt={title} loading='lazy' />
                                {console.log(image)}
                                <p className='image-paragragh'>
                                    {title}
                                </p>
                            </a>
                        
                     ))}
                </div>
            );
            

        case '/news':
            return (
               
                <div className='news-body'>
                   
                    {(results && news) && news.map(({ links, id, source, title }) => (
                        
                        <div key={id} className='news-div'>
                            
                            <a href={links[0].href} className='news-links' target='_blank' rel="noopener noreferrer">
                                <p className='news-title .dark'>
                                    {title}
                                </p>
                                <div className='new-title-div'>
                                    <a href={source.href} target='_blank' rel='noopener noreferrer'>{source.href}</a>
                                </div>
                            </a>
                        </div>
                     ))}
                </div>
            );
            
        case '/videos':
            return (
                <div className='videos-body'>
                   {results && results.map((video, index) => (
                       <div key={index} className='video-div'>
                           {console.log(video)}
                           <ReactPlayer url={video.additional_links[0].href} controls width='355px' height='200px'/>
                       </div>
                   ) 

                   )

                   }
                </div>
            );
                      
        default:
            return 'ERROR';
    }
  
}
