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

type CastType={
    id:number
    cast:Array<{}>
    crew:Array<{}>
}






export const getMoviesApi = {
  getMovies() {
    return axios
      .get(
        "https://api.themoviedb.org/4/list/1?page=1&api_key=647b39ccfb59105c511c2df9019bc7ec&sort_by=title"
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
};
