import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setenteredEmailIsValid] = useState(true);
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim("") === "") {
      setenteredEmailIsValid(false);
      return;
    }
    navigate("/home");
  };

  return (
    <>
      <div className="login__container">
        <div className="login__wrapper">
          <div className="login__left">
            <h3 className="login__logo">ZazaSocial</h3>
            <span className="login__desc">
              Connect with friends and the world around you on ZazaSocial.
            </span>
          </div>
          <div className="login__right">
            <form className="login__box" onSubmit={formSubmitHandler}>
              <input
                type="Email"
                className="login__input"
                placeholder="Email"
                onChange={emailChangeHandler}
              />

              <input
                type="password"
                className="login__input"
                placeholder="Password"
                required
              />

              <button
                className={
                  !enteredEmail ? "login__button-disabled" : "login__button"
                }
                type="submit"
                disabled={!enteredEmail}
              >
                Login
              </button>

              <span className="login__forgot">Forgot Password?</span>
              <button className="login__Register-button">
                <Link to="/register">Create a new account </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
