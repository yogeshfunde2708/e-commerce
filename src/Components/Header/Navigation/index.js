import { IoIosMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className="allCatTab">
              <span className="icon1 me-2">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ms-2">
                <FaAngleDown />
              </span>
            </Button>
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
                  <Button>FASHION</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>ELECTRONICS</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>BAKERY</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>GROCERY</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Mobiles</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>BLOG</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>CONTACT</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
