import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import { Link } from "react-router-dom";
import { IMovie } from "./MovieContext";

type PropsType={
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
  moviesId:{}
}


const cardHeader = {
  color: "#fff",
  backgroundColor: "#333",
  padding: "2rem 2rem",
  display:'flex',
  alignItems:'center',
};
const cardBtn = {
  minWidth: "30px",
  height: "40px",
  borderRadius: "100%",
  background: "rgb(51, 51, 51)",
};

//style={{minWidth:'30px',height:'40px',borderRadius:'100%',background:'rgb(51, 51, 51)'}}

const MovieCardHeader = (props: any) => {

  return (
    <div style={cardHeader}>
      <div style={{width:'50%'}}>
        <Link to="/">
          <Button
            variant="contained"
            size="small"
            color="primary"
            style={cardBtn}
          >
            <ArrowBackOutlinedIcon />
          </Button>
        </Link>
        
      Movie Card Header
      </div>
      <div style={{width:'50%',display:'flex',justifyContent:'flex-end'}}>
      <BookmarkBorderOutlinedIcon/>
      </div>
    </div>
  );
};

export default MovieCardHeader;
