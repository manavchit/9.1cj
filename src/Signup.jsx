import Input from "./Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [contact, setContact] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = contact;
  console.log(contact);

  function handleClick(event) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!displayName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("User registered with: ", contact);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <p className="signup-title">Create a DEV@Deakin Account</p>

        <div className="input-group">
          <label className="input-label">Name*</label>
          <Input
            name="displayName"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Email*</label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password*</label>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Confirm Password*</label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            onChange={handleChange}
          />
        </div>

        <Link to="/login" onClick={handleClick}>
          <button className="signup-btn">Create</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
