import style from './Card.module.css'

const Card = ({ img, title }) => {
    return (
        <div
        className={style.card__container}
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${img}")`
        }}
        >
            <div className={style.card__details}>
                <h2 className={style.card__title}>{title}</h2>
                <button className={style.card__button}>MÁS INFO</button>
            </div>
        </div>
    )
}

export { Card }