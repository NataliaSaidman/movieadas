import { useState, useEffect } from "react";
import { apiKey } from "../ApiKey/apiKey";

export const useFetch = (type, category, week) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${category}/${
        week ? week : ""
      }?api_key=${apiKey}&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [category, type, week]);

  return data;
};
