import { useEffect, useState } from "react"
import { DataContext } from "./dataContext"
import { getFetch } from "../getFetch"

export default function DataProvider({children}) {

    const [dataMovies, setDataMovies] = useState(null)
    const [dataTV, setDataTV] = useState(null)
    const [dataPeople, setDataPeople] = useState(null)

    useEffect(() => {
        getFetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',setDataMovies)
        getFetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US',setDataTV)
    }, [])

  return (
    <DataContext.Provider value={{dataMovies,dataTV}}>
        {children}
    </DataContext.Provider>
  )
}
