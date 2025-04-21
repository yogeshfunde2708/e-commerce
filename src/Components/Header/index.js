import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import {MyContext} from '../../App';
import { useContext } from "react";

const Header = () => {
  const context = useContext(MyContext)
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
               { Array.isArray(context?.countryList) && context.countryList.length > 0 && (
    <CountryDropdown />
)}
                <SearchBox />
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
        <Navigation />
      </div>
    </>
  );
};
export default Header;
