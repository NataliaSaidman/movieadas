import { useState, useEffect } from "react";
import { apiKey } from "../apiKey";

const UseFetch = (type, category, page, week) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${category}/${
        week ? week : ""
      }?api_key=${apiKey}&language=es-AR&page=${page ? page : "1"}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [category, page, type, week]);

  return data;
};

export { UseFetch };
