import { useState, useEffect } from "react"
import { apiKey } from "../apiKey"

const UseFetch = (type, category, week, page) => {

  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${category}/${week ? week : ""}?api_key=${apiKey}&language=es-AR&page=${page ? page : "1"}`
    )
      .then(res => res.json())
      .then(data => {
          setData(data.results)
      })
  }, [type, category, week, page])

  return data;
}

export { UseFetch }