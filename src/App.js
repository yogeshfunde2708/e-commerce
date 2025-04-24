import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

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
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
        </Routes>
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
