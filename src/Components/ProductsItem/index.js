import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../../App";

const ProductItem = (props) => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      <div className={`productItem ${props.itemView} `}>
        <div className="imgWrapper">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
            className="w-100"
            alt=""
          />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <BsArrowsFullscreen />
            </Button>
            <Button>
              <FaRegHeart />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-3">$14.00</span>
          </div>
        </div>
      </div>
    
    </>
  );
};
export default ProductItem;
