import React, { useState, createContext, useEffect } from "react";
import { getMoviesApi } from "../api/ApiCalls";

export type IMovie = {
  vote_count: number;
  popularity: number;
  id: number;
  video: boolean;
  media_type: string;
  vote_average: number;
  title: string;
  release_date: number;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
};




type GenreInsideType = {
  id: number;
  name: string;
};

type IGenreType={
  id:number
  name:string
  genre:Array<GenreInsideType>
}


type IMovieContext = [IMovie[], React.Dispatch<React.SetStateAction<IMovie[]>>];
type IGenreContext = [IGenreType[], React.Dispatch<React.SetStateAction<IGenreType[]>>];

export const MovieContext = createContext<IMovieContext>([[], () => null]);
export const GenreContext = createContext<IGenreContext>([[], () => null]);

export const MovieProvider = (props: { children: any }) => {
  const [movies, setMovie] = useState<IMovie[]>([]);

  
  useEffect(() => {
    const fetchDataMovies = async () => {
      const result = await getMoviesApi.getMovies();
        setMovie(result.results);
     // console.log(result.results);
    };
    fetchDataMovies();
  }, []);
  

  return (
    <MovieContext.Provider value={[movies, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};


export const GenreProvider =(props: { children:any })=>{
  const [genre, setGenre] = useState<IGenreType[]>([]);

  useEffect(() => {
      const fetchDataGenre =async() => {
        const result = await getMoviesApi.getGenre();
        setGenre(result);
      };
      fetchDataGenre();
  },[]);

  return(
    <GenreContext.Provider value={[genre, setGenre]} >
      {props.children}
    </GenreContext.Provider>
  )
}
