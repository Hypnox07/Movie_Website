import React, { useEffect, useState } from 'react'
import './Movielist.css'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'


const Movielist = () => {
    const [movieList,setMovieList] = useState([])
    const {type} = useParams()
     
    console.log(movieList);

    // useEffect(() => {
    //      getData()
    // },[])

    useEffect(() => {
        getData()
   },[type])
   
   const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=d7519dfd2a9637eb7302c3b873e2b9b3&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
   }
  return (
    <div className="movie__list">
        <h2 className="list__title">{type.toUpperCase()}</h2>
        <div className="list__cards">
            {
                movieList&&movieList.map(movie => (
                    <Card movie={movie}/>
                ))
            }
        </div>
    </div>
  )
}

export default Movielist