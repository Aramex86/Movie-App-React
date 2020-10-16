import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const MoviesList = () => {
  const [movies, setMovie] = useContext(MovieContext);
  //console.log(movies);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: "1rem",
        alignItems: "inherit",
      }}
    >
      {movies.map((movie) => (
        <Card key={movie.id} style={{ width: "19%", marginBottom: "35px" }}>
          <Link
            to={`/movie-card/${movie.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardActionArea>
              <CardMedia>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt="poster"
                  style={{ width: "100%" }}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ maxHeight: "220px" }}
                >
                  {movie.overview}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default MoviesList;
