import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectCoverflow,
  Parallax,
  EffectFlip,
  EffectCards,
  EffectCreative,
  EffectFade
} from "swiper";
import "swiper/swiper-bundle.min.css";
import { Card } from "./Card";

export const Carrossel = () => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCube,
        Parallax,
        EffectCoverflow,
        EffectFlip,
        EffectCards,
        EffectCreative,
        EffectFade
      ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      parallax
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"slide"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
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
  );
};
