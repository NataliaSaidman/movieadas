import { useState, useEffect } from "react";

const useSearch = (search, page) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${
        process.env.REACT_APP_API_KEY
      }&query=${search}&language=en-US&page=${page ? page : "1"}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
    return () => setData();
  }, [search, page]);

  return {
    data: data,
    isLoading: isLoading,
  };
};

export { useSearch };
