import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              {" "}
              Due to covid 19 epidemic, order may be proceed slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part-2">
                <CountryDropdown />
                <div className="headerSearch ms-3 me-3">
                  <input type="text" placeholder="search for products"></input>
                  <Button>
                    <IoSearch />
                  </Button>
                </div>
                <div className="part-3 d-flex align-items-center ms-auto">
                  <Button className="circle me-3">
                    <FaRegUser />
                  </Button>
                  <div className="ms-auto cartTab d-flex align-items-center">
                    <span className="price"> $3.29</span>
                    <div className="position-relative ms-2">
                      <Button className="circle ">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
