import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'

const MovieDetail = () => {
    const {id} = useParams();
    const [movie,setMovie] = useState(null)

    useEffect(() => {
      async function getMovie(){
        const res =await fetch(`http://www.omdbapi.com/?apikey=40d6e159&i=${id}`)
        
        const data = await res.json();
        console.log(data)
        setMovie(data)
      }
      getMovie()
    },[id])
    if(!movie) return <p>Loading..</p>
  return (
    <div>
	<div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p>
		<p><strong>Plot:</strong>{movie.Plot}</p>
        <p><strong>Movie Writer: </strong>{movie.Writer}</p>
        <p><strong>Director : </strong>{movie.Director}</p>
        <p><strong>Actors : </strong>{movie.Actors}</p>
	</div>
    </div>
  )
}

export default MovieDetail
