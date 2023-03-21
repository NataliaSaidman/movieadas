// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { Card } from "./Card/Card";
import { Link } from "react-router-dom";

const MainCarousel = ({ trending }) => {
  console.log(trending);
  return (
    <div className="carousel__container">
      <Swiper
        loop={true}
        navigation={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
      >
        {trending?.map((trend) => (
          <SwiperSlide>
            <Link
              to={`/details/${trend.media_type}/${trend.id}`}
              key={trend.id}
            >
              <Card
                img={trend.backdrop_path}
                title={trend.title ? trend.title : trend.name}
              />{" "}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { MainCarousel };
