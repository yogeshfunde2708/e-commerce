import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QunantityBox from "../../Components/QunantityBox";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import RelatedProduct from "./RelatedProduct";

const ProductDetail = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom />
            </div>
            <div className="col-md-7 pe-5">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light">Brands :</span>
                    <span>Welch's</span>
                  </div>
                </li>
                <li className="list-inline-item d-flex ">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      size="small"
                      precision={0.5}
                      readOnly
                    />
                    <span className="text-light cursor ms-auto">1 review</span>
                  </div>
                </li>
              </ul>
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

              <div className="productSize d-flex align-items-center">
                <span>Size / Weight</span>
                <ul className="list list-inline mb-0 ps-4">
                  <li className="list-inline-item">
                    <a
                      href=""
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href=""
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href=""
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href=""
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href=""
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      500g
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center mt-3">
                <QunantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round ms-3">
                  {" "}
                  Add to Cart
                </Button>
                <Tooltip title="Add to wishlist" placement="top">
                  <Button className=" btn-lg btn-big btn-circle ms-4">
                    {" "}
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to compare" placement="top">
                  <Button className=" btn-lg btn-big btn-circle ms-2">
                    {" "}
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
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

          <div className="card mt-5 p-5 detailPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional Information
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews
                  </Button>
                </li>
              </ul>
              <br />
              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>
                    Quisque varius diam vel metus mattis, id aliquam diam
                    rhoncus. Proin vitae magna in dui finibus malesuada et at
                    nulla. Morbi elit ex, viverra vitae ante vel, blandit
                    feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo
                    maximus a. Nullam ultricies sodales nunc, in pellentesque
                    lorem mattis quis. Cras imperdiet est in nunc tristique
                    lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                    Suspendisse velit ex, aliquet vel ornare vel, dignissim a
                    tortor.
                  </p>
                  <p>
                    Morbi ut sapien vitae odio accumsan gravida. Morbi vitae
                    erat auctor, eleifend nunc a, lobortis neque. Praesent
                    aliquam dignissim viverra. Maecenas lacus odio, feugiat eu
                    nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien,
                    elementum sit amet eros sit amet, ultricies cursus ipsum.
                    Sed consequat luctus ligula. Curabitur laoreet rhoncus
                    blandit. Aenean vel diam ut arcu pharetra dignissim ut sed
                    leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem
                    orci convallis quam, sit amet consequat nulla felis pharetra
                    lacus. Duis semper erat mauris, sed egestas purus commodo
                    vel.
                  </p>
                </div>
              )}
              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <div className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>stand-up</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/0 wheels)</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>folded-w-wheels</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>door pass through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>frame</th>
                          <td>
                            <p>aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/0 wheels)</th>
                          <td>
                            <p>20 lbs</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>weight capacity</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr className="handle-height-to-handle">
                          <th>handle height</th>
                          <td>
                            <p>37-45"</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>wheels</th>
                          <td>
                            <p>25"</p>
                          </td>
                        </tr>
                        <tr className="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, blue, red, white</p>
                          </td>
                        </tr>
                        <tr className="pa_size">
                          <th>Size</th>
                          <td>
                            <p>m, 5</p>
                          </td>
                        </tr>
                      </tbody>
                    </div>
                  </div>
                </div>
              )}
              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answer</h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          <RelatedProduct title="Relates Products" />
          <RelatedProduct title="recently viewed Products" />
        </div>
      </section>
    </>
  );
};
export default ProductDetail;
