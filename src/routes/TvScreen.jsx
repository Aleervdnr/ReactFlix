import { useEffect } from "react"
import MovieCard from "../components/MovieCard"

export default function TVScreen({getFetch, data}) {

  useEffect(() => {
    
    getFetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1')

  }, [])
  

  return (
    <div className="lg:pl-[260px] lg:pt-[95px]">    
      <div className='w-full grid place-content-center gap-x-[25px] md:grid-cols-2 grid-rows-[50px,1fr] place-items-center md:grid-cols-[repeat(auto-fill,230px)] gap-y-[25px] md:gap-y-[50px] '>  
        <h2 className="col-span-full text-3xl font-bold mr-auto">TV Series</h2>
        {
          data == null?
            <div>Cargando...</div>
            :
            data.map(serie => (
              <MovieCard 
              key={serie.id} 
              title={serie.name} 
              img={serie.poster_path} 
              description={serie.first_air_date}
              />
            ))
        }
      </div>
    </div>
  )
}
