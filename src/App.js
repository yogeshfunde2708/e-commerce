import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import ProductModel from "./Components/ProductModel";
import Listing from "./Pages/Listing";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const reponsive = await axios.get(url).then((res) => {
      console.log(res.data.data);
      setCountryList(res.data.data);
    });
  };
  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin
  };
  return (
    <>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header/>
        }
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/cat/:id" exact={true} element={<Listing />}></Route>
          <Route path="/product/:id" exact={true} element={<ProductDetail />}></Route>
          <Route path="/cart" exact={true} element={<Cart />}></Route>
          <Route path="/signIn" exact={true} element={<SignIn />}></Route>
          <Route path="/signUp" exact={true} element={<SignUp />}></Route>
        </Routes>
        {
          isHeaderFooterShow === true && <Footer/>
        }
        {
      isOpenProductModal === true && <ProductModel />
      }
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
