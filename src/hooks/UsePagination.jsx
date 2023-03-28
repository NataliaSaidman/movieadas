import { useState, useEffect } from "react";
import { apiKey } from "../ApiKey/apiKey";

const usePagination = (type, category, week, page) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${category}/${
        week ? week : ""
      }?api_key=${apiKey}&language=en-US&page=${page ? page : "1"}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [category, page, type, week]);

  return data;
};

export { usePagination };
