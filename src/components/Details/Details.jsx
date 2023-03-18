import style from "./details.module.css"
import { useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { UseDetails } from "../../hooks/UseDetails"

const Details = () => {
  const windowSize = useRef(window.innerWidth)

  const params = useParams()
  const mediaDetails = UseDetails(params.type, params.id)
  console.log(mediaDetails)
//   console.log(windowSize)
  /* 804150, movie */
  /* 100088, serie */

  const shortYear = (date) => {
    const newDate = date.slice(0, 4)
    return newDate
  }

  const runtime = (time) => {
    const hours = Math.floor(time / 60)
    const minutes = time % 60
    return `${hours}hr ${minutes}min`
  }

  return (
    <>
      {mediaDetails ? (
        <div className={style.details__container}>
            <div
                className={style.background__image}
                style={{
                backgroundImage:
                    windowSize.current >= 700
                    ? `url('https://image.tmdb.org/t/p/original${mediaDetails.backdrop_path}')`
                    : `url('https://image.tmdb.org/t/p/w300${mediaDetails.poster_path}')`
                }}
            ></div>
            <div className={style.main__details}>
                <div className={style.poster__container}>
                    <img
                    src={`https://image.tmdb.org/t/p/w300${mediaDetails.poster_path}`}
                    alt={mediaDetails.title ? mediaDetails.title : mediaDetails.name}
                    />
                </div>
                <div>
                    <h2 className={style.media__title}>
                        {mediaDetails.title ? mediaDetails.title : mediaDetails.name}
                    </h2>
                    <div className={style.media__time}>
                        <span className={style.media__year}>
                            {shortYear(mediaDetails.release_date)}
                        </span>
                        <span>
                            {runtime(mediaDetails.runtime)}
                        </span>
                    </div>
                    <div className={style.trailer__button}>
                        <Link><button>TRAILER</button></Link>
                    </div>
                    <div className={style.genres__list}>
                        <p>
                            {mediaDetails.genres.map((genre) => (
                                <span>{genre.name}</span>
                            ))}
                        </p>
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
