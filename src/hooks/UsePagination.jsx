import { useState, useEffect } from "react";
import { apiKey } from "../apiKey";

const UsePagination = (type, category, page) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${category}/?api_key=${apiKey}&language=es-AR&page=${
        page ? page : "1"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [category, page, type]);

  return data;
};

export { UsePagination };
