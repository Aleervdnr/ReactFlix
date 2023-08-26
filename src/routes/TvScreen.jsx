import { useEffect } from "react"
import MovieCard from "../components/MovieCard"
import LayoutScreens from "../components/LayoutScreens"

export default function TVScreen({getFetch, data}) {

  useEffect(() => {
    
    getFetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1')

  }, [])
  

  return (

        <LayoutScreens title="TV Series">
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
        </LayoutScreens>

  )
}
