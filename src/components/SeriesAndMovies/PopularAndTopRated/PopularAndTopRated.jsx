import style from "./PopularAndTopRated.module.css"

import { Link } from "react-router-dom";

import { SecondaryCarousel } from "../../Home/SecondaryCarousel/SecondaryCarousel";
import { Card } from "../../Home/SecondaryCarousel/Card/Card";

import { IoIosArrowForward } from "react-icons/io"

const PopularAndTopRated = ({ title, seriesMovies, route }) => {
  return (
    <div className={style.main__container}>
      <div className={style.category__container}>
        <Link to={route}>
          <h2>{title}</h2>
          <IoIosArrowForward className={style.arrow__icon} />
        </Link>
      </div>
      <div className={style.container__cards}>
        {seriesMovies.map((media) => (
          <div className={style.card} key={media.id}>
            <Card
              media={media}
            />
          </div>
        ))}
      </div>
      <div className={style.container__cards__mobile}>
        <SecondaryCarousel trending={seriesMovies} />
      </div>
    </div>
  );
};

export { PopularAndTopRated };
