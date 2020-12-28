import React, { useEffect, useState } from 'react'
import './index.css'
import Funny from './Components/Funny'

export default function Main() {
    const [Joke, setJoke] = useState([])
    

    useEffect(()=>{
        getJoke();
        
    },[])
    
  const getJoke = async() => {
      const response = await fetch(`https://sv443.net/jokeapi/v2/joke/Programming?type=twopart&amount=2`)
      const accept = await response.json()
      
      console.log(accept.jokes);
      setJoke(accept.jokes);
      
  }
  
    
  
    

    return (
        <div className='App' >
            <form className='search-form' >
                
                <button type="submit" className='search-button' >More Jokes</button>
            </form>
           {Joke.map(J => (
               <Funny 
               key = {J.setup}
               setup ={J.setup} 
               delivery = {J.delivery} />
           ))} 
        </div>
    )
}
