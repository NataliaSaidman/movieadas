import style from "./PopularAndTopRated.module.css"

import { useContext } from "react";

import { menuContext } from "../../../context/menuContext";

import { Link } from "react-router-dom";

import { SecondaryCarousel } from "../../Home/SecondaryCarousel/SecondaryCarousel";
import { Card } from "../../Card/Card";

import { IoIosArrowForward } from "react-icons/io"

const PopularAndTopRated = ({ title, seriesMovies, route }) => {
  const theme = useContext(menuContext)

  return (
    <div className={`${style.main__container} ${theme.lightMode && style.active}`}>
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
