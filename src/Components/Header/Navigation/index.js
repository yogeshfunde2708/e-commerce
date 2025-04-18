import { IoIosMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
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
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline ms-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <AiTwotoneHome />
                  Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">FASHION</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">ELECTRONICS</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">BAKERY</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">GROCERY</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Mobiles</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">BLOG</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
