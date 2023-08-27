const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWM3NjI0MThlODc3NzdmMjQ4ZDZmNjk4YzU1ZmQxMyIsInN1YiI6IjY0ZTY0ZDQxNTI1OGFlMDBlYWEzMDA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YN7V5BATJl3wStlcOKb-e6070twGvtpSlgs0Ig6ScwI'
    }
  };

export const getFetch = async (url, callback) => {


    //Si no hay url,salimos de la funcion
    if(!url) return null

    fetch(url,options)
    .then(response => response.json())
    .then(response => callback(response.results))
}