import style from './Card.module.css'

const Card = ({ img, title }) => {
    return (
        <div className={style.card__container}>
            <div
            className={style.card__image}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${img}")`
            }}
            >
            </div>
            <span className={style.card__title}>{title}</span>
        </div>
    )
}

export { Card }