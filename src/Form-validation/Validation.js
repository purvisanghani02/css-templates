import React, { useState } from "react";
import "./validation.css";

const Validation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const newErrors = validation(formData);
    setError(newErrors);
    console.log("newErrors", newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      console.log(`Form submission failed
             due to validation errors.`);
    }
  };

  const validation = (data) => {
    const error = {};

    if (!data.username.trim()) {
      error.username = "username is required";
    }

    if (!data.email.trim()) {
      error.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      error.email = "Email is invalid";
    }
    if (!data.password) {
      error.password = "Password is required";
    } else if (data.password.length < 8) {
      error.password = "password must be 8 characters long";
    }
    if (data.confirmpassword !== data.password) {
      error.confirmPassword = "Passwords do not match";
    }

    return error;
  };

  return (
    <>
      <div className="form_container">
        <h2 className="form-title">form validation</h2>
        <form onSubmit={handlesubmit}>
          <div>
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <span className="error-message">{error.username}</span>
          </div>

          <div>
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <span className="error-message">{error.email}</span>
          </div>

          <div>
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <span className="error-message">{error.password}</span>
          </div>

          <div>
            <label className="form-label">Confuirm Password</label>
            <input
              className="form-input"
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
            />

            <span className="error-message">{error.confirmPassword}</span>
          </div>

          <button className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Validation;
