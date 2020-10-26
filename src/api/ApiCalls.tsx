import axios from "axios";

// const instance  = axios.create({
//     baseUrl:'https://api.themoviedb.org',
//     headers: {
//         "API-KEY": "647b39ccfb59105c511c2df9019bc7ec",
//       },
// });

//api_key TMDb = 647b39ccfb59105c511c2df9019bc7ec; -> apikey
//https://cors-anywhere.herokuapp.com/ ->corsanywhere
//https://api.themoviedb.org/4/list/1?page=1&api_key=647b39ccfb59105c511c2df9019bc7ec&sort_by=title.asc";

export const getMoviesApi = {
  getMovies() {
    return axios
      .get(
        "https://api.themoviedb.org/4/list/1?page=1&api_key=647b39ccfb59105c511c2df9019bc7ec&sort_by=title.asc"
      )
      .then((res) => {
        return res.data;
      });
  },
  getCast(movieId: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=647b39ccfb59105c511c2df9019bc7ec`
      )
      .then((res) => {
        return res.data;
      });
  },
  getGenre(){
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=647b39ccfb59105c511c2df9019bc7ec&language=en-US`).
    then(res=>{
      return res.data.genres;
    })
  },
  getSearch(movieSearch:string){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=647b39ccfb59105c511c2df9019bc7ec&language=en-US&query=${movieSearch}&page=1&include_adult=false`).
    then((res)=>{
      return res.data.results;
    })
  }
};
