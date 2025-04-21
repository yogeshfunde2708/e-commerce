import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import React, { useState, useContext, useEffect } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpen(false);
    context.setSelectedCountry(country)
  };

  useEffect(() =>{
    setCountryList(context.countryList);
  }, [context.countryList])
  
  const filterList=(e)=>{
    const keyword = e.target.value.toLowerCase();
    if(keyword !== ""){
      const list = countryList.filter((item) =>{
        return item.country.toLowerCase().includes(keyword);
      })
      setCountryList(list);
    }else{
      setCountryList(context.countryList);
    }
  }
  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpen(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{context.selectedCountry !== ""? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...':context.selectedCountry : 'Select Location'}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4 className="ml-0">Choose your dilivery locatiion</h4>
        <p>Ente ryour address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setIsOpen(false)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="search your area..." onChange={filterList}></input>
          <Button>
            <IoSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
           countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button onClick={() => selectCountry(index, item.country)}
                    className={`${selectedTab === index ? 'active': ''}`}>
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropdown;
