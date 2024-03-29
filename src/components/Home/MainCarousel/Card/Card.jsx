import style from './Card.module.css'

import { Link } from 'react-router-dom'

import { useContext } from "react"

import { menuContext } from "../../../../context/menuContext"

const Card = ({ trend }) => {

    const context = useContext(menuContext)

    const handleSearchBar = () => {
        context.setInputSearch(false)
    }

    return (
        <Link
        to={`/details/${trend.media_type}/${trend.id}`}
        className={`${style.link__container} ${context.lightMode && style.active}`}
        onClick={handleSearchBar}
        >
            <div
            className={style.card__container}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${trend.backdrop_path}")`
            }}
            >
                <div className={style.card__details}>
                    <h2 className={style.card__title}>{trend.title ? trend.title : trend.name}</h2>
                    <button className={style.card__button}>MORE</button>
                </div>
            </div>
        </Link>
    )
}

export { Card }