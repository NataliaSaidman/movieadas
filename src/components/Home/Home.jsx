import { UseFetch } from "../../hooks/UseFetch"

import { MainCarousel } from "./MainCarousel/MainCarousel"
import { SecondaryCarousel } from "./SecondaryCarousel/SecondaryCarousel"

import style from './Home.module.css'

const Home = () => {

    const trendingMovies = UseFetch("trending", "movie", "week")
    const trendingSeries = UseFetch("trending", "tv", "week")

    const moviesOrSeries = Math.round((Math.random() * 1))

    return (
        <div className={style.home__container}>
            <div className={style.mainCarousel__container}>
                {trendingMovies && trendingSeries ? 
                    <MainCarousel
                    trending=
                    {moviesOrSeries ? trendingMovies.slice(0, 3)
                    : trendingSeries.slice(0, 3)}
                    />
                : "Error"
                }
            </div>
            <div className={style.seriesTrending__container}>
                <SecondaryCarousel trending={trendingSeries} title={"Series"} />
            </div>
            <div className={style.moviesTrending__container}>
                <SecondaryCarousel trending={trendingMovies} title={"Películas"} />
            </div>
        </div>
    )
}

export { Home }