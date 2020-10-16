import React from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import Nav from "./components/Nav";
import MovieCard from "./components/MovieCard";

import { MovieProvider } from "./components/MovieContext";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <MovieProvider>
      <Nav />
      
      <Switch>
        <Route path="/" exact component={MoviesList} />
        <Route path="/movie-card/:id" component={MovieCard} />
      </Switch>
    </MovieProvider>
  );
};

export default App;
