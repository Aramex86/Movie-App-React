import React, { FC, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { MovieContext } from "./MovieContext";

type UseParamsType = {
  id: string | undefined;
};

const MovieCard = () => {
  const [movies, setMovie] = useContext(MovieContext);

  console.log(movies);

  let { id } :any= useParams();
  
         movies.filter(m=>{
            if(id.id === m.id){
                console.log('same',id);
            }else{
                console.log('not same')
            }
            
        
            
    })


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "500px",
      }}
    >
      MovieCard id{id}
    </div>
  );
};

export default MovieCard;
