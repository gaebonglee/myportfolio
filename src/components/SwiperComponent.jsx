import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import pages
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../style/SwiperComponent.scss";

// Import required modules
import { EffectCube, Mousewheel, Pagination } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: false,
        slideShadows: false,
      }}
      pagination={true}
      mousewheel={true}
      modules={[EffectCube, Mousewheel, Pagination]}
      className="mySwiper"
      speed={1500}
    >
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <AboutMe />
      </SwiperSlide>
      <SwiperSlide>
        <Projects />
      </SwiperSlide>
      {/* <SwiperSlide></SwiperSlide> */}
    </Swiper>
  );
};

export default SwiperComponent;
