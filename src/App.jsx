import React from 'react';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import About from './pages/About';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import { MovieProvider } from './context/MovieContext'

const App = () => {

  const n=1;
  const m=2;

  return (
    <MovieProvider>
    <div>
      {/* {n==1 && <MovieCard movie={{title:"Sultan", release_date:"2016", url:"https://www.meinstyn.com/wp-content/uploads/2016/09/Sultan-Movie-Poster-Salman-Khan-And-Anushka-Sharma-HD-Desktop-Wallpaper.jpg"}}/>}
      {m==2 && <MovieCard movie={{title:"Sultan2", release_date:"2016", url:"https://www.meinstyn.com/wp-content/uploads/2016/09/Sultan-Movie-Poster-Salman-Khan-And-Anushka-Sharma-HD-Desktop-Wallpaper.jpg"}}/>} */}
      
      <Navbar/>
      {/* <Home/> */}
      {/* <Fav/> */}
        
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/fav' element={<Favorites/>} />
        {/* <Route path='/contact' element={<Contact/>} /> */}
      </Routes>
      
    </div>
    </MovieProvider>
  )
}

export default App
