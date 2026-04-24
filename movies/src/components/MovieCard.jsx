import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MovieCard = ({m}) => {
  return (
    <div className="movie-card">
				<img alt={m.Title} src={m.Poster} />
				<h3>{m.Title}</h3>
				<p>{m.Year}</p>
				<Link to={`/movieDetails/${m.imdbID}`}>Details</Link>
			</div>
  )
}

export default MovieCard
