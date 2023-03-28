import { useState, useEffect } from "react";
import { apiKey } from "../ApiKey/apiKey";

const useDetails = (type, id, videos) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&append_to_response=videos&language=es-AR`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
    return () => setData();
  }, [type, id, videos]);

  return {
    data: data,
    isLoading: isLoading,
  };
};

export { useDetails };
