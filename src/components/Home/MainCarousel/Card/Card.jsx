import style from './Card.module.css'

const Card = () => {
    return (
        <div
        className={style.card__container}
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg")`
        }}
        >
            <div className={style.card__details}>
                <h2 className={style.card__title}>One Piece</h2>
                <button className={style.card__button}>MÁS INFO</button>
            </div>
        </div>
    )
}

export { Card }