import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/pagination";
import { Card } from "./Card";

const pagination = {
  clickable: true,
  renderBullet: function (index: number, className: string) {
    return <span className="pag_five">{index}</span>;
  },
};

export const Carrossel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCreative]}
      slidesPerView={"auto"}
      centeredSlides={true}
      navigation
      effect={"creative"}
      pagination={{ clickable: true }}
      creativeEffect={{
        prev: {
          opacity: 0.3,
          translate: ["-120%", 0, -500],
        },
        next: {
          opacity: 0.3,
          translate: ["120%", 0, -500],
        },
      }}
      breakpoints={{
        1025: {
          creativeEffect: {
            prev: {
              opacity: 0.3,
              translate: ["-90%", 0, -500],
            },
            next: {
              opacity: 0.3,
              translate: ["90%", 0, -500],
            },
          },
        },
      }}
      className="mySwiper"
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
      <SwiperSlide>
        <Card />
      </SwiperSlide>
    </Swiper>
  );
};
