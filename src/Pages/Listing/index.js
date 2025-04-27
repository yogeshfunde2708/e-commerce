import Sidebar from "../../Components/Sidebar";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import ProductItem from "../../Components/ProductsItem";
import Pagination from '@mui/material/Pagination';

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState('four');
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <div className="showBy mt-m mb-3 d-flex align-items-center">
                <div className="d-flex align-items-center btnWrapper">
                  <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}>
                    <IoIosMenu />
                  </Button>
                  <Button className={productView==='three' && 'act'} onClick={()=>setProductView('three')}>
                    <CgMenuGridR />
                  </Button>
                  <Button className={productView==='four' && 'act'} onClick={()=>setProductView('four')}>
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>
                <div className="ms-auto showByFilter">
                  <Button onClick={handleClick}>
                    Show 9<FaAngleDown />
                  </Button>
                  <Menu
                  className="w-100 showPerPageDropDown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                  </Menu>
                </div>
              </div>
              <div className="productListing">
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-5">
              <Pagination count={10} color="primary" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Listing;
