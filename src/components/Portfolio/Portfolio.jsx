import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Dap from "../../img/dap.png";
import Presensi from "../../img/presensi.png";
import Phonestore from "../../img/phonestore.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        <SwiperSlide>
          <img src={Dap} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Presensi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Phonestore} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
