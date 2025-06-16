import React, { useState } from "react";
import "./../styles/Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      if (value.length < 8) {
        setErrors({ ...errors, password: "Password must be at least 8 characters long" });
      } else {
        setErrors({ ...errors, password: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    console.log("Submitted:", formData);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up</h2>

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <button type="submit" className="submit-btn">Create Account</button>

        <p className="form-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
}
