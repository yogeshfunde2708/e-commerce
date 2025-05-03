import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/logo.jpg";
import TextField from "@mui/material/TextField";
import { Button, Link } from "@mui/material";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);

  return (
    <section className="section signIn signUp">
      <div className="shape-bottom">
        <svg
          fill="#fff"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921 819.8"
          style={{ enableBackground: "new 0 0 1921 819.8" }}
        >
          <path
            className="st0"
            d="M1921,413.1v406.7H0V0.5h0.41228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center">
            <img src={Logo} alt="" />
          </div>
          <form action="" className="mt-2">
            <h2 className="mb-3">Sign Up</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    className="w-100"
                    label="Name"
                    type="text"
                    variant="standard"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    className="w-100"
                    label="Phone No"
                    type="text"
                    variant="standard"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                className="w-100"
                label="Email"
                type="email"
                variant="standard"
                required
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                className="w-100"
                label="Password"
                type="password"
                variant="standard"
                required
              />
            </div>
            <a className="border-effect cursor txt">Forgot Password?</a>

            <div className="d-flex align-items-center mb-3 mt-3">
              <div className="row w-100">
                <div className="col-md-6">
                  <Button className="btn-blue w-100 btn-lg btn-big">
                    Sign Up
                  </Button>
                </div>
                <div className="col-md-6 pe-0">
                  <Link to="/" className="d-block w-100">
                    <Button
                      className="btn-lg btn-big w-100"
                      variant="outlined"
                      onClick={() => context.setIsHeaderFooterShow(true)}
                    >
                      Cancle
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <p className="txt">
              allready have an account?{" "}
              <Link to="/signIn" className="border-effect">
                Sign In
              </Link>
            </p>
            <h6 className="mt-4 text-center font-weight-bold">
              Or continue with social account
            </h6>
            <ul className="list list-inline mt-3 mb-3 socials text-center">
              <li className="list-inline-item">
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <FaGoogle />
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
