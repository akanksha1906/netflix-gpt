import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies);
  // const trendingMoviesData = useSelector((store) => store.movies);

  // console.log("trendingMoviesData",trendingMoviesData)
  return (
    <div className=" bg-black">
      <div  className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={moviesData.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={moviesData.trendingMovies} />

      </div>
      SecondaryContainer
    </div>
  );
};

export default SecondaryContainer;
