import { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginUser = { username, password };

    try {
      const loginverify = await axios.post(
        "http://localhost:5000/login",
        loginUser
      );
      if(!loginverify.data[0] ) return console.log("error");
        navigate("/profile")

      console.log(loginverify);
    } catch (error) {
      console.log(error);
    }
    // Basic validation, you can add more advanced validation as needed
    if (username.trim() === "" || password.trim() === "") {
      setIsError(true);
      return;
    }


    setUsername("");
    setPassword("");
    setIsError(false);
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        {isError && (
          <p className="error-message">Please fill in both fields.</p>
        )}
        <br />
        <button type="submit" className="submit-button">
          Login
        </button>
        <Link to="/register">Register Here </Link>
      </form>
    </div>
  );
};

export default Login;
