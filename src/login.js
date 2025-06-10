import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState({
    userName: "",
    password: "",
  });

  const handleData = (e) => {
    e.preventDefault();
    if (!userName) {
      setError({ ...error, userName: "Enter the username" });
    }
    if (!password) {
      setError({ ...error, password: "Enter the password" });
    }
    if (userName && password) {
      localStorage.setItem("authToken", "dummy-auth-token");
      navigate("/dashboard");
    }
  };

  const handlePasswordVisibility = () =>{
    setPasswordVisible(!passwordVisible);
  }
 
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
            {error.userName ? <div className="error-message">{error.userName}</div> :""}
            <div className="form-input">
              <label>Password :</label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           {error.password ? <div className="error-message">{error.password}</div> :""}
            <div className="form-input-checkbox">
              <input type="checkbox"  onClick={handlePasswordVisibility}/>
              Show Password
            </div>
            <div className="form-input">
              <button type="submit">SIGN IN</button>
            </div>
            <div className="sign-up-box">
              <p>
                Don't have an account? <a href="#">sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
