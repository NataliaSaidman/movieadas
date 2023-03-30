import "./style.css";

import { useContext } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "../../Card/Card";
import { menuContext } from "../../../context/menuContext";

import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SecondaryCarousel = ({ trending, title, route }) => {
  const theme = useContext(menuContext);

  return (
    <div className={`${theme.lightMode ? "active" : ""}`}>
      <div className={title ? "category__container" : "hide"}>
        <Link to={route}>
          <p>Trending {title}</p>
          <IoIosArrowForward className="arrow__icon" />
        </Link>
      </div>
      <div>
        <Swiper
          loop={true}
          spaceBetween={15}
          slidesPerView={2}
          pagination={{
            type: "fraction",
          }}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            700: {
              slidesPerView: 4,
            },
            900: {
              slidesPerView: 5,
            },
            1100: {
              slidesPerView: 6,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {trending?.map((trend) => (
            <SwiperSlide key={trend.id}>
              <Card media={trend} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { SecondaryCarousel };
