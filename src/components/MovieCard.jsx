import React from 'react'
import '../css/MovieCard.css'
import { useMovieContext } from '../context/MovieContext';

function MovieCard({movie}) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function liked(e) {
        e.preventDefault();
        if(!favorite) addToFavorites(movie);
        if(favorite) removeFromFavorites(movie.id);
    }

    return (
    <div className='movie-card'>
        <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={liked}>❤</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard

