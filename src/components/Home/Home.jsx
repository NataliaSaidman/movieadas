import { useEffect, useState } from "react"
import { apiKey } from "../../apiKey"

import { MainCarousel } from "./MainCarousel/MainCarousel"

const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([])

    const getMovies = (movieOrSerie) => {
        fetch(`https://api.themoviedb.org/3/trending/${movieOrSerie}/week?api_key=${apiKey}&language=es`)
            .then(res => res.json())
            .then(data => {
                setTrendingMovies(data.results)
            })
    }

    console.log(trendingMovies)

    useEffect(() => {
        const randomNumber = Math.round((Math.random() * 1))
        const movieOrSerie = randomNumber ? "movie" : "tv"
        getMovies(movieOrSerie)
    }, [])

    return (
        <div>
            <MainCarousel

            />
        </div>
    )
}

export { Home }