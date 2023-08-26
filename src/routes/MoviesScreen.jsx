import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import LayoutScreens from "../components/LayoutScreens";

export default function MoviesScreen({getFetch,data}) {



    useEffect(() => {
      getFetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
      }, [])

  return (

    <LayoutScreens title="Movies">
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
    </LayoutScreens>

    

  )
}
