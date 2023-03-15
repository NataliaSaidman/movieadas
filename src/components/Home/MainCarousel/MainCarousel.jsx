// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import './styles.css'

// import required modules
import { Navigation, Autoplay } from "swiper"
import { Card } from "./Card/Card"

const MainCarousel = ({ trending }) => {

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
        {trending?.map((trend) => (
          <SwiperSlide key={trend.id}>
            <Card
              img={trend.backdrop_path}
              title={trend.title ? trend.title : trend.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export { MainCarousel }