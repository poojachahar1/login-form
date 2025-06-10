import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleData = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "1234") {
      localStorage.setItem("authToken", "dummy-auth-token");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="grid-form-layout">
           <h1> Login</h1>

          <form onSubmit={handleData}>
            <div className="form-input">
              <label>Email :</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-input">
            <label>Password :</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-input-checkbox">
              <input type="checkbox"/>Show Password
            </div>
            <div className="form-input">
            <button type="submit">SIGN IN</button>
            </div>
            <div className="sign-up-box">
              <p>Don't have an account? <a href="#">sign up</a></p>
            </div>

            
          </form>
        </div>
      </div>
    </>
  );
}
