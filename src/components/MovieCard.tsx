import React, { useContext, useEffect, useState } from "react";

import { MovieContext, GenreContext } from "./MovieContext";
import MovieCatdHeader from "./MovieCardHeader";

import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import { getMoviesApi } from "../api/ApiCalls";

type CastType = {
  id: number;
  cast: Array<ActorsType>;
  crew: [];
};

type ActorsType = {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
};

type GenresTypes = {
  id: number;
  name: string;
};

//styles
const divWrapStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#333",
};

const movieWrap = {
  width: "100%",
  display: "flex",
  padding: "2rem 1.5rem",
  color: "#fff",
  justifyContent: "center",
};

const summary = {
  width: "80%",
  padding: " 0 2rem",
};

const MovieCard = ({ match }: any) => {
  const [movies, setMovie] = useContext(MovieContext);
  const [genre, setGenre] = useContext(GenreContext);
  const [cast, setCast] = useState<CastType>();
  const movieId = match.params.id;
  const moviesId = movies.filter((movie) => movie.id == movieId);
  const actors = cast?.cast.slice(0, 15);

  useEffect(() => {
    const fetchDataCast = async (movieId: number) => {
      const result = await getMoviesApi.getCast(movieId);
      setCast(result);
    };
    fetchDataCast(movieId);
  }, [movieId]);

  const genreArr = [...genre];
  const genreIds = [
    ...moviesId.map((el) => Object.values(el.genre_ids)).flat(),
  ];
  const genres: Array<GenresTypes> = [];

  genreArr.filter((el) => {
    for (let i = 0; i < genreIds.length; i++) {
      if (genreIds[i] === el.id) {
        genres.push(el);
      }
    }
  });

  return (
    <>
      <MovieCatdHeader moviesId={moviesId} />
      <div style={divWrapStyle}>
        {moviesId.map((item) => (
          <div key={item.id} style={movieWrap}>
            <div
              style={{
                width: "25%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                style={{ height: "80%" }}
                alt="poster"
              />
            </div>
            <div style={{ width: "60%", position: "relative" }}>
              <h2 style={{ width: "100%", textAlign: "center", margin: "0" }}>
                {item.title}
              </h2>
              <div style={summary}>
                <h2>{item.title}</h2>
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <li style={{ padding: ".5rem 0" }}>
                    <span style={{ fontWeight: "bold" }}>Realese date : </span>{" "}
                    {item.release_date}
                  </li>
                  <li style={{ padding: ".5rem 0" }}>
                    <span style={{ fontWeight: "bold" }}>raiting : </span>
                    {item.vote_average}
                    <ThumbUpAltRoundedIcon
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginLeft: "6px",
                      }}
                    />
                  </li>
                  <li style={{ padding: ".5rem 0" }}>
                    <span style={{ fontWeight: "bold" }}>total votes : </span>
                    {item.vote_count}
                  </li>
                  {item.adult ? <li>adult:18+</li> : ""}
                  <li style={{ padding: ".5rem 0" }}>
                    <span style={{ fontWeight: "bold" }}>genre : </span>
                    {genres.map((g) => (
                      <span key={g.id} style={{ marginRight: "10px" }}>
                        {g.name}
                      </span>
                    ))}
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <span style={{ fontWeight: "bold" }}>Actors :</span>{" "}
                    {actors?.map((m) => (
                      <span style={{ marginLeft: "10px" }} key={m.cast_id}>
                        {m.name}
                      </span>
                    ))}
                  </li>
                </ul>
                <div style={{ marginBottom: "1rem" }}>
                  {actors?.slice(0, 5).map((p) => (
                    <img
                      key={p.cast_id}
                      src={"https://image.tmdb.org/t/p/w500/" + p.profile_path}
                      alt="poster"
                      style={{ width: "15%", marginRight: "10px" }}
                    />
                  ))}
                </div>
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
    </>
  );
};

export default MovieCard;
