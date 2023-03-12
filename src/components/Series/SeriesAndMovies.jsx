import React from "react";
import { Series } from "./PopularSeries/Series";
import { UseFetch } from "../../hooks/UseFetch";

const SeriesAndMovies = ({ movieOrTv }) => {
  const seriesPopular = UseFetch(movieOrTv, "popular");
  const seriesTopRated = UseFetch(movieOrTv, "top_rated");

  return (
    <div>
      {seriesPopular ? (
        <Series
          title={movieOrTv === "tv" ? "Popular Series" : "Popular Movies"}
          series={seriesPopular.slice(0, 5)}
        />
      ) : (
        "Error"
      )}

      {seriesTopRated ? (
        <Series
          title={movieOrTv === "tv" ? "Best rated series" : "Best rated movies"}
          series={seriesTopRated.slice(0, 5)}
        />
      ) : (
        "Error"
      )}
    </div>
  );
};

export { SeriesAndMovies };
