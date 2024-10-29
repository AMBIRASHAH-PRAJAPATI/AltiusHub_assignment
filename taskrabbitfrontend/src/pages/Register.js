import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "./Css/signup.css";

const Register = () => {
  // with single state

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    // e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error("Password does not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username: user.username,
          email: user.email,
          password: user.password,
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registartion failed");
    }
  };

  return (
    <div className="signupage d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="mainS">
          <div className="Sheading">
            <h2>User Registration</h2>
          </div>
          <div className="SignUPform">
            <form
              onSubmit={registerUser()}
              className="form-group  d-flex flex-column justify-content-center align-items-center"
            >
              <label className="">
                Name :
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={user.username}
                  onChange={handleChanges}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleChanges}
                  required
                />
              </label>
              <label>
                Password :
                <input
                  type="Password"
                  name="password"
                  className="form-control"
                  value={user.password}
                  onChange={handleChanges}
                  required
                />
              </label>
              <label>
                Confirm Password :
                <input
                  type="text"
                  name="confirmPassword"
                  className="form-control"
                  value={user.confirmPassword}
                  onChange={handleChanges}
                  required
                />
              </label>
              <div>
                <button type="Submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
