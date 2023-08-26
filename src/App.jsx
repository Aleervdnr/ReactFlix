import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import MoviesScreen from './routes/MoviesScreen';
import TVScreen from './routes/TVScreen';
import FamousPeopleScreen from './routes/FamousPeopleScreen';
import HomeScreen from './routes/HomeScreen';

function App() {

  const [data, setData] = useState(null)


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWM3NjI0MThlODc3NzdmMjQ4ZDZmNjk4YzU1ZmQxMyIsInN1YiI6IjY0ZTY0ZDQxNTI1OGFlMDBlYWEzMDA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YN7V5BATJl3wStlcOKb-e6070twGvtpSlgs0Ig6ScwI'
    }
  };

  const getFetch = (url) => {
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
      setData(response.results)
      console.log(response.results)
    })
    .catch(err => console.error(err));
  }

 
  return (
    <div className='bg-fixed bg-gradient-to-b lg:bg-gradient-to-tr from-[#1F1E31]  to-[#364567] text-white max-lg:pt-[70px] lg:grid'>
      <Header 
        items={["home","movies","TV series","famous people"]}
        bgColor='bg-[#25243A]'
        activeColor='bg-[#5179EF]'
        getFetch={getFetch} />

              <Routes>
                <Route 
                  path='/' 
                  element={
                    <HomeScreen 
                      getFetch={getFetch} 
                      data={data} 
                    />
                  }
                />

                <Route 
                  path='/TVseries' 
                  element={
                    <TVScreen 
                      getFetch={getFetch} 
                      data={data} 
                    />
                  } 
                />

                <Route 
                  path='/movies' 
                  element={
                    <MoviesScreen 
                      getFetch={getFetch} 
                      data={data} 
                    />
                  } 
                />

                <Route 
                  path='/famouspeople' 
                  element={
                    <FamousPeopleScreen 
                      getFetch={getFetch} 
                      data={data}
                    />
                  } 
                />

                <Route
                  path='/*'
                  element={<Navigate to="/"/>}
                />
              </Routes>
      
    </div>
  )
}

export default App
