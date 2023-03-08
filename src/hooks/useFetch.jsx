import { useState, useEffect } from "react"
import { apiKey } from "../apiKey"

const useFetch = ({ type, category, page }) => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/${category}/week?api_key=${apiKey}&language=es&page=${page ? page : "1"}`)
            .then(res => res.json())
            .then(data => {
                setData(data.results)
            })
    })

    return data
}

export { useFetch }