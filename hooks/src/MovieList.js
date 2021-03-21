import React from "react";
import MovieCard from "./MovieCard";

function MovieList (props){
    return (
        props.obj.map((item, index)=><MovieCard movie={item} key={index} />)
      
    );
}
export default MovieList;