import { useState, useEffect } from "react";

const usePagination = (type, category, week, page) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${type}/${category}/${
        week ? week : ""
      }?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${
        page ? page : "1"
      }`
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
