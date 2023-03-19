import { useState, useEffect } from "react"
import { apiKey } from "../apiKey"

const UseDetails = (type, id, videos) => {

  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&append_to_response=videos&language=es-AR`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [type, id, videos])

  return data
}

export { UseDetails }