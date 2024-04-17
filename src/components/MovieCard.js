import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-36 md:w-48 pr-4">

      <img src={IMG_CDN + poster_path} alt="movie Image" />{" "}
    </div>
  );
};

export default MovieCard;
