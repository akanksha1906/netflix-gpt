import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // console.log("Bearer"+process.env.REACT_APP_TMDB_KEY)

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("json",json)
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !trendingMovies &&getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
