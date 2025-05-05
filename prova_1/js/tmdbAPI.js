const getFilms = async () => {

    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjAzMWU5MTVhMzM1ZTBlOGJjNDVhMDhhNTFkZjY5NCIsIm5iZiI6MTc0NjE1MjczNy4yMjMsInN1YiI6IjY4MTQyZDIxMDNkYWQ0ZmE4NjEyNjllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ah52RnxKewIsuewwkVtC-3PQpi05Iz0Vl2CoRHd7Mvg'
            }
          };

        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.deschttps://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options);
        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch {

        console.log(error);
        return [];
    }
}

const getGenres = async (filmId) => {

  try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjAzMWU5MTVhMzM1ZTBlOGJjNDVhMDhhNTFkZjY5NCIsIm5iZiI6MTc0NjE1MjczNy4yMjMsInN1YiI6IjY4MTQyZDIxMDNkYWQ0ZmE4NjEyNjllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ah52RnxKewIsuewwkVtC-3PQpi05Iz0Vl2CoRHd7Mvg'
        }
      };

      const response = await fetch('https://api.themoviedb.org/3/movie/' + filmId +'?language=pt-BR', options);
      const data = await response.json();
      return data;
  }
  catch {

      console.log(error);
      return [];
  }
}


const tmdb = {
  getFilms, 
  getGenres
}

export default tmdb;