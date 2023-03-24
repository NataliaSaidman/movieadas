import "./style.css";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "./Card/Card";

import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const SecondaryCarousel = ({ trending, title, route }) => {
  return (
    <>
      <div className="category__container">
        <Link to={route}>
          <p>{title} Tendencias</p>
          <IoIosArrowForward className="arrow__icon" />
        </Link>
      </div>
      <div>
        <Swiper
          loop={true}
          spaceBetween={10}
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
            1000: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {trending?.map((trend) => (
            <SwiperSlide key={trend.id}>
              <Card
                trend={trend}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export { SecondaryCarousel };
