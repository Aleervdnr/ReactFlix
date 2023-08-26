import { useEffect } from "react"
import MovieCard from "../components/MovieCard"
import LayoutScreens from "../components/LayoutScreens"

export default function FamousPeopleScreen({getFetch,data}) {

    useEffect(() => {
        getFetch("https://api.themoviedb.org/3/person/popular?language=en-US&page=1")   
    }, [])
    

  return (
      <LayoutScreens title="Famous People">
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
      </LayoutScreens>
  )
}
