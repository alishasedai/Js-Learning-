import React from 'react'
import { useState, useEffect, useRef } from 'react'
import MovieList from '../components/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading,setLoading] = useState(false)
    const inputref = useRef();
    // console.log(inputref)
    const fetchMovie = async (query) => {
        setLoading(true)

        const res = await fetch(`http://www.omdbapi.com/?apikey=40d6e159&s=${query}`)
        const data = await res.json();
        console.log(data)
        setMovies(data.Search || [])
        setLoading(false)
    }
    useEffect(() => {
        fetchMovie("Love");
    },[])
    const handleSearch = (e) => {
        e.preventDefault();
        const data = inputref.current.value.trim();

        if(data) {
            return fetchMovie(data)
        }
    }
  return (
    <div>
      <div className="home">
		<form onSubmit={handleSearch}>
			<input ref={inputref} className="searchInput" placeholder="Search for a movie..." />
			<button type="submit">Search 🔎</button>
		</form>
        {loading ? <p>Loading...</p> : <MovieList movies={movies}/>}
		
	</div>
    </div>
  )
}

export default Home
