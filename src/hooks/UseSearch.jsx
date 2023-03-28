import { useState, useEffect } from "react";
import { apiKey } from "../ApiKey/apiKey";

const useSearch = (search, page) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${search}&language=es-AR&page=${
        page ? page : "1"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [search, page]);

  return data;
};

export { useSearch };
