import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard';
import Header from './components/header/Header.jsx';

function App() {
  const [movies, setMovies] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWM3NjI0MThlODc3NzdmMjQ4ZDZmNjk4YzU1ZmQxMyIsInN1YiI6IjY0ZTY0ZDQxNTI1OGFlMDBlYWEzMDA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YN7V5BATJl3wStlcOKb-e6070twGvtpSlgs0Ig6ScwI'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      setMovies(response.results)
      console.log(response.results)
    })
    .catch(err => console.error(err));
  }, [])
  

  return (
    <div className='bg-fixed bg-gradient-to-b lg:bg-gradient-to-tr from-[#1F1E31]  to-[#364567] text-white max-lg:pt-[70px] lg:grid'>
      <Header 
        items={["TV Series","Movies","Famous People"]}
        bgColor='bg-[#25243A]'
        activeColor='bg-[#5179EF]'/>
      <div>
        <h2>Trends</h2>
        
          <div className='w-full grid place-content-center gap-x-[25px] md:grid-cols-2 place-items-center md:grid-cols-[repeat(auto-fill,230px)] gap-y-[25px] md:gap-y-[50px] lg:pl-[260px] lg:pt-[95px]'>
          {movies.map((movie) => 
            <MovieCard key={movie.id} data={movie}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
