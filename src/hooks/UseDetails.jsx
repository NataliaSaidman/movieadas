import { useState, useEffect } from "react"
import { apiKey } from "../apiKey"

const UseDetails = (type, id) => {

  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=es-AR`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [type, id])

  return data
}

export { UseDetails }