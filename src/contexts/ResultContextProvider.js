
import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'


export const ResultContextProvider = ({ children }) => {
    
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('elon musk')
    
    // /videos, /search, /images, /news
    const getResults = async (types) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${types}`, {
            method: 'GET',
            headers: {
                // 'x-user-agent': 'desktop',
                // 'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key' : process.env.REACT_APP_API_KEY
                
    
            }
        }) 
        
        const data = await response.json()
        console.log(data)
        if(types.includes('/news')){
            setResults(data.entries) 
            console.log(data.entries)
        } else if(types.includes('/images')){
            setResults(data.image_results)
        } else if(types.includes('/videos')){
            setResults(data.videos)
        }
         else {
            setResults(data.results) 
        }
        
        
        setIsLoading(false)
    }

    return(
        <ResultContext.Provider value={{ getResults, results, setResults, searchTerm, setSearchTerm, isLoading }}>
             {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = () =>  useContext(ResultContext)
