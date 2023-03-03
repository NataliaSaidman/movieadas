// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import './styles.css'

// import required modules
import { Navigation, Autoplay } from "swiper"
import { Card } from "./Card/Card";

const MainCarousel = () => {

  return (
    <div className="carousel__container">
      <Swiper
        loop={true}
        navigation={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export { MainCarousel }