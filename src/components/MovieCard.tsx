import React, { FC, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import {MovieContext} from "./MovieContext";
import MovieCatdHeader from './MovieCardHeader'

import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import { getMoviesApi } from "../api/ApiCalls";

type CastType={
  id:number
  cast:Array<ActorsType>
  crew:[]
}

type ActorsType={
  cast_id:number
  character: string
  credit_id: string
  gender:number
  id: number
  name: string
  order:number
  profile_path:string
}


//styles
const divWrapStyle = {
  display: "flex",
  justifyContent: "center",
  //alignItems: "center",
  height: "100vh",
  background: "#333",
};

const movieWrap = {
  width: "100%",
  display: "flex",
  padding: "2rem 1.5rem",
  color: "#fff",
};



const summary = {
  width: "80%",
  padding: " 0 2rem",
};

const MovieCard = ({ match }: any) => {
  const [movies, setMovie] = useContext(MovieContext);
  const [cast,setCast]=useState<CastType>()

  useEffect(()=>{
   const fetchData= async(movieId:number)=>{
     const result =await getMoviesApi.getCast(movieId);
     setCast(result);
   }
   fetchData(movieId);
  },[])

  //console.log("CAST",cast?.cast.slice(0,10))


  const movieId = match.params.id;
  const moviesId = movies.filter((movie) => movie.id == movieId);
const actors = cast?.cast.slice(0,15);


console.log(actors);

//console.log(actors);

  return (<>
    <MovieCatdHeader moviesId={moviesId}/>
    <div style={divWrapStyle}>
      {moviesId.map((item) => (
        <div key={item.id} style={movieWrap}>
          <div style={{width:'30%',display:'flex',justifyContent:'center'}}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
            style={{objectFit:'cover',width:'85%',height:'70%'}}/>
          </div>
          <div style={{ width: "60%", position: "relative" }}>
            <h2 style={{ width: "100%", textAlign: "center", margin: "0" }}>
              {item.title} 
            </h2>
            <div style={summary}>
              <h2>{item.title}</h2>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li>
                  <span style={{ fontWeight: "bold" }}>Realese date : </span> {" "}
                  {item.release_date}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>raiting : </span>
                  {item.vote_average}
                  <ThumbUpAltRoundedIcon
                    style={{ width: "1rem", height: "1rem", marginLeft: "6px" }}
                  />
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>total votes : </span>
                  {item.vote_count}
                </li>
                {item.adult ? <li>adult:18+</li> : ""}
                <li>
                  <span style={{ fontWeight: "bold" }}>genre</span>
                </li>
                <li style={{marginBottom:'20px'}}>
      <span style={{ fontWeight: "bold" }}>Actors :</span> {actors?.map(m => <span style={{marginLeft:'10px'}} key={m.cast_id}>{m.name}</span>)}
                </li>
              </ul>
              <div style={{marginBottom:'1rem'}}>{actors?.slice(0,5).map(p=> <img key={p.cast_id} src={"https://image.tmdb.org/t/p/w500/"+ p.profile_path} alt='poster' style={{width:'15%',marginRight:'10px'}}/>)}</div>
              <p
                style={{
                  margin: "0",
                  padding: "0",
                  marginTop: "10px",
                  lineHeight: "1.7rem",
                }}
              >
                {item.overview}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
 </> );
};

export default MovieCard;
