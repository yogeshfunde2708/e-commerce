import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true
  };

  return (
    <>
      <div className="homeBannerSection">
        <Slider {...settings}>
          <div className="item">
            <img
              src="https://cmsimages.shoppersstop.com/Entry_Banner_web_90704e9cc4/Entry_Banner_web_90704e9cc4.png"
              className="w-100"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://cmsimages.shoppersstop.com/watch_main_kv_web_e69d8346be/watch_main_kv_web_e69d8346be.png"
              className="w-100"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://cmsimages.shoppersstop.com/SS_25_pvt_brands_main_kv_web_0cf0856712/SS_25_pvt_brands_main_kv_web_0cf0856712.png"
              className="w-100"
              alt=""
            />
          </div>
          <div className="item">
          <img
              src="https://cmsimages.shoppersstop.com/WW_web_db1b8a41d2/WW_web_db1b8a41d2.png"
              className="w-100"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeBanner;
