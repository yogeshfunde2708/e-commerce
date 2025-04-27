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

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

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
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/cat/:id" exact={true} element={<Listing />}></Route>
        </Routes>
        <Footer />
        {
      isOpenProductModal === true && <ProductModel />
      }
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
