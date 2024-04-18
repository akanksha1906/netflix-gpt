import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovietrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieTrailer = async () => {
    const trailer = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await trailer.json();

    const filterTrailerID = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailerData = filterTrailerID.length
      ? filterTrailerID[0]
      : json.results[0];

    dispatch(addTrailerVideo(trailerData));
  };
  useEffect(() => {
   !trailerVideo && getMovieTrailer();
  }, []);
};

export default useMovietrailer;
