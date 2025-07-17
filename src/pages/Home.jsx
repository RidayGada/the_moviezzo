import React, { useState,useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import '../css/Home.css';
import { searchMovies } from '../services/api';
import { getPopularMovies } from '../services/api';


function Home() {

    const Search = async (e) =>{
        e.preventDefault(); //prevents reloading of page
        if(!searchQuery.trim()) return
        if (loading) return
        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);

        } catch(err) {
            console.log(err);
            setError(null);

        } finally {
            setLoading(false);
    
        }

        setSearchQuery("");
    }

    const [searchQuery, setSearchQuery] = useState(''); //state which on change rerenders any component
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadPopularMovies = async () => {
            try{
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
            } catch (err){
                console.log(err);
                setError("Failed to load movies");
            } finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])


    const moviess=[
        {id:1, title: "Sultan", release_date:'2016'},
        {id:2, title: "Dangal", release_date:'2018'},
        {id:3, title: "Pathan", release_date:'2024'},
        {id:4, title: "Houseful", release_date:'2018'}
    ];


    return (
        <div className="home">
            <form onSubmit={Search} className="search-form">
                <input 
                type="text" 
                className='search-input'
                placeholder='Search the movie name here'
                value={searchQuery}
                onChange={(e)=> {
                    setSearchQuery(e.target.value);
                    console.log(e.target.value);
                } }
                />
                <button type='submit'>Search</button>
            </form>

            {error && <div className="error-message">{error}</div> }
            
            {loading ? (
                <div className="loading">Loading...</div>
            ) : ( <div className="movies-grid">
                {movies.map(
                (movie) =>
                // movie.title.toLowerCase().startsWith(searchQuery) && //conditional rendering for search
                <MovieCard movie={movie} key={movie.id}/>                
            )}
            </div>
            )}

        </div>
    )
}

export default Home;
