import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#f2fce4",
    "#feefea",
    "#ecffec",
  ]);
  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">Feature Categories</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          slidesPerGroup={1}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide>
                <div className="item text-center cursor" style={{background:item}}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-53-346x310.jpg"
                    alt=""
                  />
                  <h4>Fresh Produce Melons Each</h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default HomeCat;
