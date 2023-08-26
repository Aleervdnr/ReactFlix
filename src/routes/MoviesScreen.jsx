import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function MoviesScreen({getFetch,data}) {



    useEffect(() => {
      getFetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
      }, [])

  return (
    <div className="lg:pl-[260px] lg:pt-[95px]">    
      <div className='w-full grid place-content-center gap-x-[25px] md:grid-cols-2 grid-rows-[50px,1fr] place-items-center md:grid-cols-[repeat(auto-fill,230px)] gap-y-[25px] md:gap-y-[50px] '>  
      <h2 className="col-span-full text-3xl font-bold mr-auto">Movies</h2>
        
        {
          data == null?
            <div>Cargando...</div>
            :
            data.map(movie => (
              <MovieCard 
                key={movie.id}
                title={movie.title} 
                img={movie.poster_path} 
                description={movie.release_date}
              />
            ))
        }      
      </div>

    </div>
  )
}
