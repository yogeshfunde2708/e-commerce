import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoClose } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { useContext, useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import QunantityBox from "../QunantityBox";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";

const ProductModel = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const context = useContext(MyContext);

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <>
      <Dialog
        open={true}
        onClose={() => context.setIsOpenProductModal(false)}
        className="productModal"
        // TransitionComponent={Transition}
      >
        <Button className="close_" onClick={() => context.setIsOpenProductModal(false)}>
          <IoClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-4">
            <span>Brands:</span>
            <span className="ms-2">Welch's</span>
          </div>
          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
        <hr></hr>
        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <div className="productZoom position-relative">
              <div className="badge badge-primary">23%</div>
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={0}
                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg`}
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-768x691.jpg`}
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={2}
                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg`}
                  />
                </div>
              </Slider>
            </div>
            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                <img
                  src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg`}
                  alt=""
                  className="w-100"
                  onClick={() => goto(0)}
                />
              </div>
              <div className="item">
                <img
                  src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-768x691.jpg`}
                  alt=""
                  className="w-100"
                  onClick={() => goto(1)}
                />
              </div>
              <div className="item">
                <img
                  src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg`}
                  alt=""
                  className="w-100"
                  onClick={() => goto(2)}
                />
              </div>
            </Slider>
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg me-2">$9.35 </span>
              <span className="netPrice text-danger lg">$7.25</span>
            </div>
            <span className="badge bg-success"> IN Stock</span>
            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>
            <div className="d-flex align-items-center">
             <QunantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ms-3">
                {" "}
                Add to Cart
              </Button>
            </div>
            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined"><FaRegHeart /> Add to Wishlist</Button>
              <Button className="btn-round btn-sml ms-3" variant="outlined"><MdOutlineCompareArrows /> compare</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductModel;
