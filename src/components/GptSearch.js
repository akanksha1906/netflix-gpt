import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constant";

function GptSearch() {
  return (
    <div >
      <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="logo"
        />
      </div>
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
