import { UseFetch } from "../../hooks/UseFetch"

import { MainCarousel } from "./MainCarousel/MainCarousel"

const Home = () => {

    const trendingMovies = UseFetch("trending", "movie", "week")
    const trendingSeries = UseFetch("trending", "tv", "week")

    const moviesOrSeries = Math.round((Math.random() * 1))

    return (
        <div>
            {trendingMovies && trendingSeries ? 
                <MainCarousel
                trending=
                {moviesOrSeries ? trendingMovies.slice(0, 3)
                : trendingSeries.slice(0, 3)}
                />
            : "Error"
            }
        </div>
    )
}

export { Home }