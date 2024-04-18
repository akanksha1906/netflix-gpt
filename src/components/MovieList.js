import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("movies", movies);
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white ">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex ">
          {movies &&
            movies.map((movie, index) => {
              return <MovieCard key={index} poster_path={movie.poster_path} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
