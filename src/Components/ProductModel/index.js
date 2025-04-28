import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoClose } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import QunantityBox from "../QunantityBox";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";

const ProductModel = (props) => {

  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        open={context.isOpenProductModal}
        onClose={() => context.setIsOpenProductModal(false)}
        className="productModal"
      >
        <Button
          className="close_"
          onClick={() => context.setIsOpenProductModal(false)}
        >
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
            <ProductZoom />
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
              <Button className="btn-round btn-sml" variant="outlined">
                <FaRegHeart /> Add to Wishlist
              </Button>
              <Button className="btn-round btn-sml ms-3" variant="outlined">
                <MdOutlineCompareArrows /> compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductModel;
