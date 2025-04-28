import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import { Link } from "@mui/material";

const Sidebar = () => {
  const [value, setvalue] = useState([100, 60000]);
  const [value2, setvalue2] = useState(0);
  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>

          <div className="scroll">
            <ul>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Men"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Women"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Beauty"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Watches"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Kids"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Men"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Men"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Men"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Men"
                />
              </li>
              <li>
                {" "}
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Men"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>Filter BY Price</h6>
          <RangeSlider
            value={value}
            onInput={setvalue}
            min={100}
            max={60000}
            step={5}
          />
          <div className="d-flex pt-2 p2-2 priceRange">
            <span>
              From: <strong className="text-dark">Rs: {value[0]}</strong>
            </span>
            <span className="ml-auto">
              From: <strong className="text-dark">Rs:{value[1]}</strong>
            </span>
          </div>
          <br />
          <div className="filterBox">
            <h6>PRODUCT STATUS</h6>
            <div className="scroll">
              <ul>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="In Stock"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="On Sale"
                  />
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="filterBox">
            <h6>Brands</h6>
            <div className="scroll">
              <ul>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Frito Lay"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Nespresso"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Nespresso"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Quaker"
                  />
                </li>
                <li>
                  {" "}
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Watch`s"
                  />
                </li>
              </ul>
            </div>
          </div>
          <Link to="#">
            <img src="" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
