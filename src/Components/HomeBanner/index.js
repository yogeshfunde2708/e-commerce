import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import slideBanner1 from "../../assets/images/slideBanner1.jpg"
import slideBanner2 from "../../assets/images/slideBanner2.jpg"

const HomeBanner = () => {

  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={false}
          autoplay={{
            delay:2500,
            disableOnInteraction:false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src={slideBanner1}
                
                className="w-100"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src={slideBanner2}
                className="w-100"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg"
                className="w-100"
                alt=""
              />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
