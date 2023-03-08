import React from "react";
import { Series } from "./PopularSeries/Series";

const SeriesAndMovies = () => {
  return (
    <div>
      Series
      <Series title="Popular Series" category="popular" />
      <Series title="Best rated series" category="top_rated" />
    </div>
  );
};

export { SeriesAndMovies };
