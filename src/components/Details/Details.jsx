import style from "./details.module.css"

import { useEffect, useRef } from "react"

import { useParams, Link } from "react-router-dom"

import { UseDetails } from "../../hooks/UseDetails"
import { scrollToTop } from "../../utils/scrollToTop"

import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"

import notFound from "../../assets/no-image.png"
import notFoundHeader from "../../assets/image-header.png"

const Details = () => {
  const windowSize = useRef(window.innerWidth)

  const params = useParams()
  const mediaDetails = UseDetails(params.type, params.id)

  const setBackgroundImage = () => {
    if (mediaDetails.backdrop_path !== null) {
        if (windowSize.current >= 500) {
            return `url('https://image.tmdb.org/t/p/original${mediaDetails.backdrop_path}')`
        } 
        else {
            return `url('https://image.tmdb.org/t/p/w300${mediaDetails.poster_path}')`
        }
    } 
    else return `url(${notFoundHeader})`
  }

  const shortYear = (date) => {
    const newDate = date.slice(0, 4)
    return newDate
  }

  const runtime = (time) => {
    const hours = Math.floor(time / 60)
    const minutes = time % 60
    return `${hours}hr ${minutes}min`
  }

  const getRanking = (rank) => {
    const ranking = Math.round(rank * (5 / 10))
    const fullStars = []
    const emptyStars = []
    for (let i = 0; i < 5; i++) {
        if (i < ranking) {
          fullStars.push(<AiFillStar key={i} />)
        } else {
          emptyStars.push(<AiOutlineStar key={i} />)
        }
    }
    return {stars: [fullStars, emptyStars], number: ranking}
  }

  const generateTrailerLink = (APIObject) => {
    const getKey = APIObject.results[0].key
    const youtubeLink = `https://www.youtube.com/watch?v=${getKey}`
    return youtubeLink
  }

  useEffect(() => {
    scrollToTop()
  }, [])


  return (
    <>
      {mediaDetails ? (
        <div className={style.details__container}>
            <div
                className={style.background__image}
                style={{backgroundImage: setBackgroundImage()}}
            ></div>
            <div className={style.main__details}>
                <div className={style.poster__container}>
                    <img
                    src={mediaDetails.poster_path !== null 
                        ? `https://image.tmdb.org/t/p/w300${mediaDetails.poster_path}` 
                        : notFound}
                    alt={mediaDetails.title ? mediaDetails.title : mediaDetails.name}
                    />
                </div>
                <div className={style.info__container}>
                    <h2 className={style.media__title}>
                        {mediaDetails.title ? mediaDetails.title : mediaDetails.name}
                    </h2>
                    <div className={style.media__time}>
                        <span>
                            {shortYear(mediaDetails.release_date ? mediaDetails.release_date : mediaDetails.first_air_date)}
                        </span>
                        <span>
                            {mediaDetails.runtime ? runtime(mediaDetails.runtime) : `${mediaDetails.number_of_episodes} Episodes`}
                        </span>
                    </div>
                    <div className={style.media__ranking}>
                        <span aria-label={`${getRanking(mediaDetails.vote_average).number} stars ranking`}>
                            {getRanking(mediaDetails.vote_average).stars}
                        </span>
                    </div>
                    {mediaDetails.videos.results.length !== 0 && 
                        <div className={style.trailer__button}>
                            <Link 
                            to={generateTrailerLink(mediaDetails.videos)}
                            target="_blank"
                            >
                                <button>TRAILER</button>
                            </Link>
                        </div>
                    }
                    <div className={style.genres__list}>
                        <ul>
                            {mediaDetails.genres.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.media__description}>
                        <p>
                            {mediaDetails.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ) : (
        "Error"
        )}
    </>
    )
}

export { Details }
