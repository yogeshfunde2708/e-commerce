import { IoIosMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 me-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ms-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isOpenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>men <FaAngleRight className="ms-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>women <FaAngleRight className="ms-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>beauty <FaAngleRight className="ms-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>watches <FaAngleRight className="ms-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>kids <FaAngleRight className="ms-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>gift <FaAngleRight className="ms-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>blog <FaAngleRight className="ms-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>contact <FaAngleRight className="ms-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10  navPart2 d-flex align-items-center">
            <ul className="list list-inline ms-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>men</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>women</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>beauty</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>watches</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>kids</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>gift</Button>
                </Link>
              </li>
              {/* <li className="list-inline-item">
                <Link to="/">
                  <Button>blog</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>CONTACT</Button>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
