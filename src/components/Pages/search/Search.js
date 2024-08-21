import React, {  useState } from 'react'
import { IoSearch } from "react-icons/io5";
import "./Search.css"
import Card from '../../Card/Card';


const Search = ({searchResult}) => {
 
  

    

  return (
    <div>
    <div className="search-results">
        {searchResult&&searchResult.map((movie)=>(
            <div key={movie.id}>
                <Card movie={movie}/>
            </div>
        ))}
    </div>
    
    </div>
  )
}

export default Search