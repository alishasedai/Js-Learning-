import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    if(movies.length === 0){
        return <p>No Movies Found..</p>
    }
  return (
    <div className="movie-list">
			{movies.map((m) => (
                <MovieCard key={m.imdbID} m={m}/>
            ))}
		</div>
  )
}

export default MovieList
