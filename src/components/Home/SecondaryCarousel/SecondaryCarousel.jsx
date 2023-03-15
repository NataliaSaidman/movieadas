import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from './Card/Card'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.css'

const SecondaryCarousel = ({ trending }) => {

    return (
        <>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {trending?.map((trend) => (
                <SwiperSlide key={trend.id}>
                    <Card
                    img={trend.poster_path}
                    title={trend.title ? trend.title : trend.name}
                    />
                </SwiperSlide>
            ))}
          </Swiper>
        </>
      );
}

export { SecondaryCarousel }