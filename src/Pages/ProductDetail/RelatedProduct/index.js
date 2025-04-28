import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductItem from "../../../Components/ProductsItem";

const RelatedProduct = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd">{props.title}</h3>
        </div>
      </div>

      <div className="product_row w-100 mt-1">
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default RelatedProduct;
