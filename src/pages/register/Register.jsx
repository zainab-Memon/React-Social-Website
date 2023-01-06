import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register__container">
        <div className="register__wrapper">
          <div className="register__left">
            <h3 className="register__logo">ZazaSocial</h3>
            <span className="register__desc">
              Connect with friends and the world around you on ZazaSocial.
            </span>
          </div>
          <div className="register__right">
            <div className="register__box">
              <input
                type="text"
                className="register__input"
                placeholder="Username"
              />
              <input
                type="email"
                className="login__input"
                placeholder="Email"
              />
              <input
                type="password"
                className="register__input"
                placeholder="Password"
              />
              <input
                type="password"
                className="register__input"
                placeholder="Confirm Password "
              />
              <button className="register__button-signup">
                <Link to="/home">Sign Up</Link>
              </button>

              <button className="Register__button-login">
                <Link to="/">Log into Account</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
