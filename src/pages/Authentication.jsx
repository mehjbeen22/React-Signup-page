import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

import "./Authentication.css";

export const SignUp = () => {
  const [inputDetail, setInputDetail] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { email, password, confirmPassword } = inputDetail;
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (password.length >= 6) {
      if (
        password.match(/[A-Z]/) &&
        password.match(/[a-z]/) &&
        password.match(/[0-9]/) &&
        password.match(/[^a-zA-Z0-9]/)
      ) {
        setShowError(true);
        setErrorMessage("Strong Password");

        if (password !== confirmPassword) {
          setShowError(true);
          setErrorMessage("Password does not match");
        } else {
          setShowError(true);
          setErrorMessage("Registration Successful ");
        }
      } else {
        setShowError(true);
        setErrorMessage(
          "1 uppercase, 1 lowercase , a number, and  special character"
        );
      }
    } else {
      setShowError(true);
      setErrorMessage("Minimum 6 characters long,");
    }
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputDetail({
      ...inputDetail,
      [name]: value
    });
  };

  console.log(inputDetail);
  return (
    <>
      <div className="form-case">
        <h2 className="signup-text">SignUp</h2>
        <form className="form-inner-case" onSubmit={formSubmitHandler}>
          <div className="email-case input-box">
            <EmailIcon />

            <input
              value={email}
              name="email"
              required
              className="email-case"
              type={"text" || "email"}
              placeholder="Enter Username or Email"
              onChange={inputHandler}
            />
          </div>

          <div className="input-box">
            <LockIcon />
            <input
              value={password}
              name="password"
              type={showPassword ? "text" : "password"}
              className="password-case"
              placeholder="Enter Password"
              onChange={inputHandler}
            />
            {showPassword ? (
              <VisibilityIcon
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <VisibilityOffIcon
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
          </div>

          <div className="input-box">
            <span>
              <LockIcon />
            </span>
            <input
              value={confirmPassword}
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className="password-case"
              placeholder="Confirm Password"
              onChange={inputHandler}
            />
            {showConfirmPassword ? (
              <VisibilityIcon
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              />
            ) : (
              <VisibilityOffIcon
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              />
            )}
          </div>
          {showError && <p className="error-msg-case">{errorMessage} </p>}

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </>
  );
};
