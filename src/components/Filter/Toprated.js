import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './filter.css'
import Card from '../Card/Card'
import { MdArrowForwardIos } from "react-icons/md";

const Toprated = () => {
    const [movieList,setMovieList] = useState([])
     

    // useEffect(() => {
    //      getData()
    // },[])

    useEffect(() => {
        getData()
   },[])
   
   const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d7519dfd2a9637eb7302c3b873e2b9b3&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results.slice(0,6)))
   }
  return (
    <div className="top">
    <div className="movie__list">
    <div className='header'>
    <h2 className="filter_title">TOP RATED</h2>
    <Link to ="/movies/top_rated"  style={{textDecoration:"none"}}> <h3 className='view'>View All<MdArrowForwardIos /></h3></Link>
    </div>

   
    <div className="list__cards">
        {
            movieList&&movieList.map(movie => (
              <Card movie={movie}/>
            ))
        }
    </div>
</div>
</div>
  )
}

export default Toprated