import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LeftContent from "../Components/LeftContent";
import Navbar from "../Components/Navbar";
import { registerUser } from "./../slices/auth";

function SignIn() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  return (
    <>
      <div className="left-content">
        <LeftContent />
      </div>
      <div className="right-content back">
        <Navbar />
        <div className="form-container">
          <div className="form">
            <input
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
              type="text"
              className="custom-input"
              placeholder="User Name"
            />
            <input
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
              type="email"
              className="custom-input"
              placeholder="Email ID"
            />
            <input
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              type="password"
              name=""
              id=""
              className="custom-input"
              placeholder="Password"
            />
            <button onClick={handleSubmit} className="btn ">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
