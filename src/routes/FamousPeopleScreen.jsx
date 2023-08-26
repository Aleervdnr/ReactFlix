import { useEffect } from "react"
import MovieCard from "../components/MovieCard"

export default function FamousPeopleScreen({getFetch,data}) {

    useEffect(() => {
        getFetch("https://api.themoviedb.org/3/person/popular?language=en-US&page=1")   
    }, [])
    

  return (
    <div className="lg:pl-[260px] lg:pt-[95px]">    
    <div className='w-full grid place-content-center gap-x-[25px] md:grid-cols-2 grid-rows-[50px,1fr] place-items-center md:grid-cols-[repeat(auto-fill,230px)] gap-y-[25px] md:gap-y-[50px] '>  
      <h2 className="col-span-full text-3xl font-bold mr-auto">Famouse People</h2>
      {
        data == null?
          <div>Cargando...</div>
          :
          data.map(serie => (
            <MovieCard 
            key={serie.id} 
            title={serie.name} 
            img={serie.profile_path} 
            description={serie.known_for_department}
            />
          ))
      }
    </div>
  </div>
  )
}
