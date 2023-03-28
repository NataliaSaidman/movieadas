import { useState, useEffect } from "react";
import { apiKey } from "../ApiKey/apiKey";

const usePagination = (type, category, week, page) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${type}/${category}/${
        week ? week : ""
      }?api_key=${apiKey}&language=es-AR&page=${page ? page : "1"}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
    return () => setData();
  }, [category, page, type, week]);

  return {
    data: data,
    isLoading: isLoading,
  };
};

export { usePagination };
