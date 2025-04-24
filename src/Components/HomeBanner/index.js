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
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
              className="w-100"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg"
              className="w-100"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg"
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
