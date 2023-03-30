import { useState, useEffect } from "react";
import { apiKey } from "../ApiKey/apiKey";

export const useFetch = (type, category, week) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api.themoviedb.org/3/${type}/${category}/${
        week ? week : ""
      }?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
      });
    return () => setData();
  }, [category, type, week]);

  return {
    data: data,
    isLoading: isLoading,
  };
};
