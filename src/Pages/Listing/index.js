import { TbBorderRadius } from "react-icons/tb";
import Sidebar from "../../Components/Sidebar";

const Listing = () => {
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />
            <div className="content_right">
              <img
                src=""
                alt=""
                className="w-100"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Listing;
