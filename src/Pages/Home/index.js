import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import "swiper/css";
import ProductItem from "../../Components/ProductsItem";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner1} className="cursor w-100" alt="" />
                </div>
                <div className="banner mt-4">
                  <img src={banner2} className="cursor w-100" alt="" />
                </div>
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
              <div className="product_row productrow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
              <div className="d-flex">
                <div className="banner mt-4 mb-5 bannerSec">
                  <img src={banner3} className="cursor w-100" alt="" />
                </div>
                <div className="banner mt-4">
                  <img src={banner4} className="cursor w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
