import React, { useState, createContext, useEffect } from 'react';
import { getMoviesApi } from "../api/ApiCalls";

type IMovie = {
  vote_count: number
  popularity: number
  id: number
  video: boolean
  media_type: string
  vote_average: number
  title: string
  release_date: number
  original_language: string
  original_title: string
  genre_ids: Array<number>
  backdrop_path: string
  adult: boolean
  overview: string
  poster_path: string
};



type IMovieContext = [IMovie[],React.Dispatch<React.SetStateAction<IMovie[]>>]

export const MovieContext = createContext<IMovieContext>([[],()=>null]);

export const MovieProvider = (props: { children: any; }) => {
  const [movies, setMovie] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMoviesApi.getMovies();
      setMovie(result.results);
    };
    fetchData();
  }, []);

  return (
    <MovieContext.Provider value={[movies, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
