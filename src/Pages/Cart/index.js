import { Button, Link } from "@mui/material";
import Rating from "@mui/material/Rating";
import QunantityBox from "../../Components/QunantityBox";
import { IoIosClose } from "react-icons/io";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd mb-0">Your Cart</h2>
          <p>
            there are <b>3</b> cart in your cart
          </p>
          <div className="row">
            <div className="col-md-9 pe-5">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th width="35%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">Subtotal</th>
                      <th width="10%">remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="35%">
                        <Link to=".product/1">
                          <div className="d-flex align-items-center cartImgWrapper">
                            <div className="imgWrapper">
                              <img src="" alt="" className="w-100" />
                            </div>
                            <div className="info px-3">
                              <h6>field roast chao cheese creamy original </h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="25%">
                        <QunantityBox />
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to=".product/1">
                          <div className="d-flex align-items-center cartImgWrapper">
                            <div className="imgWrapper">
                              <img src="" alt="" className="w-100" />
                            </div>
                            <div className="info px-3">
                              <h6>field roast chao cheese creamy original </h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="25%">
                        <QunantityBox />
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to=".product/1">
                          <div className="d-flex align-items-center cartImgWrapper">
                            <div className="imgWrapper">
                              <img src="" alt="" className="w-100" />
                            </div>
                            <div className="info px-3">
                              <h6>field roast chao cheese creamy original </h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="25%">
                        <QunantityBox />
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4>Cart total</h4>
                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ms-auto text-red font-weight-bold">
                    $12.35
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Shiping</span>
                  <span className="ms-auto">
                    <b>Free</b>
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Estimate For</span>
                  <span className="ms-auto">
                    <b>United Kingdom</b>
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span>Total</span>
                  <span className="ms-auto text-red font-weight-bold">
                    $12.35
                  </span>
                </div>
                <br />
                <Button className="btn-blue bg-red btn-lg btn-big">
                {" "}
                Add to Cart
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
