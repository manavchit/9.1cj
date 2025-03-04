import Input from "./Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./login.css";

function Login() {
  const [contact, setContact] = useState({
    email: "",
    password: "",
  });

  const { email, password } = contact;
  const navigate = useNavigate(); // Initialize useNavigate

  function handleClick(event) {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    // Simulate successful login (Replace with actual authentication logic if needed)
    navigate('/welcome'); // Redirect to Welcome page
  }

  function handlePass(event) {
    const { name, value } = event.target;
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <div className="Login">
      <div className="login-box">
        <Link to="/signup" className="signup-link">
          <button className="signup-btn">Sign up</button>
        </Link>

        <p>Your email</p>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email please"
          onChange={handlePass}
        />

        <p>Your password</p>
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handlePass}
        />

        <button className="login-btn" onClick={handleClick}>
          Login
        </button>
        
      </div>
    </div>
  );
}

export default Login;
