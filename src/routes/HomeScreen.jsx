import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import MovieCard from '../components/MovieCard'

export default function HomeScreen() {

    const {dataMovies, dataTV} = useContext(DataContext)

  return (
    <div className='overflow-x-hidden overflow-y-auto h-screen col-start-2'>
      <h2 className='text-xl font-bold pl-8'>Trending Movies</h2>
      <div className='grid grid-flow-col overflow-y-hidden overflow-x-auto gap-8 px-8 py-6'>
        {dataMovies == null?
            <div>Cargando...</div>
            :
            dataMovies.map(item => 
                <MovieCard 
                    key={item.id}
                    title={item.title}
                    img={item.poster_path}/>
            )
        }
      </div>
      <h2 className='text-xl font-bold pl-8'>Trending Series</h2>
      <div className='grid grid-flow-col overflow-y-hidden overflow-x-auto gap-8 px-8 py-6'>
        {dataTV == null?
            <div>Cargando...</div>
            :
            dataTV.map(item => 
                <MovieCard 
                    key={item.id}
                    title={item.name}
                    img={item.poster_path}/>
            )
        }
      </div>
    </div>
  )
}
