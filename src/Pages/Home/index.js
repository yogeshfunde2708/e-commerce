import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductsItem";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <section className="homeCat"><div className="container">
        </div></section>
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} className="cursor w-100" alt="" />
              </div>
              <div className="banner mt-4">
                <img src={banner2} className="cursor w-100" alt="" />
              </div>
            </div>
            <div className="col-md-9 ptoductRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Best sellers</h3>
                  <p className="text-light text-sml mb-0">
                    do not miss the current offer until the end of the march
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View all <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
