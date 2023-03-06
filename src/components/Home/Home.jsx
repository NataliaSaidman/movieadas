import { useEffect, useState } from "react"
import { apiKey } from "../../apiKey"

import { MainCarousel } from "./MainCarousel/MainCarousel"

const Home = () => {

    const [trending, setTrending] = useState()

    const getMovies = (movieOrSerie) => {
        fetch(`https://api.themoviedb.org/3/trending/${movieOrSerie}/week?api_key=${apiKey}&language=es`)
            .then(res => res.json())
            .then(data => {
                setTrending(data.results)
            })
    }

    useEffect(() => {
        const randomNumber = Math.round((Math.random() * 1))
        const movieOrSerie = randomNumber ? "movie" : "tv"
        getMovies(movieOrSerie)
    }, [])

    return (
        <div>
            {trending ? <MainCarousel
                trending={[trending[0], trending[1], trending[2]]}
            /> : "Error"}
        </div>
    )
}

export { Home }