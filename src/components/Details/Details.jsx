import style from './details.module.css'

const Details = () => {

    // API https://api.themoviedb.org/3/movie/722149?api_key=32d077369086bfd026dd5552e300c8f7

    return (
        <div className={style.details__container}>
            <div className={style.background__image}></div>
            <div className={style.main__details}>
                <div className={style.poster__container}>
                    <img src="https://img.freepik.com/foto-gratis/disparo-vertical-carretera-magnificas-montanas-cielo-azul-capturado-california_181624-44891.jpg?w=2000" alt="" />
                </div>
                <div>
                    <h2 className={style.media__title}>Name</h2>
                    <div className={style.media__time}>
                        <span className={style.media__year}>2003</span>
                        <span>05:17</span>
                    </div>
                    <div className={style.trailer__button}>
                        <button>p</button>
                    </div>
                </div>
            </div>
            <div className={style.media__details}>
                <div className={style.media__description}>
                    <p>description</p>
                </div>
                <div className={style.genres__list}>
                    <p>Genres: <span>lorem,</span> <span>lorem,</span> <span>lorem</span></p>
                </div>
            </div>
        </div>
    )
}

export { Details }