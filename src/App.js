import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
