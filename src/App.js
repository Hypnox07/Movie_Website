import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Movielist from './components/movieList/Movielist';
import Movie from './components/Pages/MovieDetails/Movie';
import Search from './components/Pages/search/Search';
import { useState } from 'react';

function App() {
  const [input,setInput] = useState()
    
  
const [searchResult,setSearchResult] = useState([]);
const fetchData = async (value) => {
   try{
       const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=d7519dfd2a9637eb7302c3b873e2b9b3`)
       const data = await response.json();
       setSearchResult(data.results)
   }catch(error){
       console.error("Error fetching search result:",error)
   }
}

const handleSumbit = (value) =>{
  setInput(value)
  fetchData(value)
  setInput('')
}
  return (
    <div className="App">
      <Router>
        <Header input={input} handleSumbit={handleSumbit} setInput={setInput}/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<Movielist/>}></Route>
          <Route path='movies/search' element={<Search searchResult={searchResult}/>}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
